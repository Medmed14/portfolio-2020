///// Fonction de dissimulation de l'accès ADMIN/////
//  ATTENTION :  Le bouton d'accès apparaît au double click sur le copyright en bas de la page

function getAdmin() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('secret').innerHTML = "ADMIN" ;

        }
    }
    xhr.open('GET', 'index.html');
    xhr.send();
}

document.getElementById('copy').addEventListener('dblclick',getAdmin);





///////////// FONCTION DE LOGIN/MDP ADMIN //////////////////////


function passSystem(){

identifiant = "Mehdi";
code = 123456;

log = document.getElementById('loginUser').value;
nmb = document.getElementById('userPassword').value;

if(nmb == code && log == identifiant){

    getAjax4() //acces page administrateur une fois la verif validée
    
}else{
    alert('erreur de login ou mot de passe...');

}
}



/////////////  SECONDE PARTIE  /////////////////////

/////////////////////////////GESTION  DU  CONTENU  COTE  ADMIN///////////////////////

function getAjaxAdm(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200){
            var result = JSON.parse(xhr.responseText).data;
            affich(result);
        }
    }
    xhr.open('GET','datas.json');
    xhr.send();
    }
    
   
    
function affich(donnees) {
        var tbl = "<tr>";
        for (var j = 0; j < donnees.length; j++) {
            tbl += '<td class="id" >'+ donnees[j].id +'</td>'+
            '<td class="titre" >'+ donnees[j].title +'</td>'+
            '<td class="contImg">'+'<img class="illustration" src="'+ donnees[j].photo +'" alt="..."></img>'+'</td>'+
            '<td class="contenu" >'+ donnees[j].text +'</td>'+
            '<td class="date" >'+ donnees[j].date +'</td>'+
            '<td class="auteur" >'+ donnees[j].auteur +'</td>'+
            '<td class="logoEdit" >'+'<i class="far fa-edit"></i>'+'</td>'+
            '<td class="logoTrash" >'+'<i class="far fa-trash-alt"></i>'+'</td>'; 
            tbl += "</tr>";
        }
       
        document.querySelector('#tablAdmin').innerHTML = tbl;
}

