/////////////invocation ACCUEIL/////////////////////avec invocation du css correpondant

function getAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
     
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('stylise').href = "style_accueil.css";
            document.getElementById('content').innerHTML = xhr.responseText;
            getAjaxArt(); //j'invoque ici la fonction qui se situe dans le fichier articles.js
        }
    }
    xhr.open('GET', 'accueil.html');
    xhr.send();
}


document.getElementById('accueil').addEventListener('click', getAjax);


getAjax(); // ici j'invoque seulement la page d'accueil en guise de première page


//////////invocation CONTACT///////////////////// avec invocation du css correspondant

function getAjax2(){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        document.getElementById('stylise').href = "style_contact.css";
        document.getElementById('content').innerHTML = xhr.responseText;
    }
}
xhr.open('GET', 'contact.html');
xhr.send();
}


document.getElementById('contact').addEventListener('click', getAjax2);



///////////// invocation PRESENTATION/////////////////////avec invocation du css correspondant

function getAjax3(){
    var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        document.getElementById('stylise').href = "style_presentation.css";
        document.getElementById('content').innerHTML = xhr.responseText;
    }
}
xhr.open('GET', 'presentation.html');
xhr.send();
}


document.getElementById('presentation').addEventListener('click', getAjax3);

////////// invocation PAGE  DE  LOG ///////////////avec invocation du css correspondant


function getAjaxLog(){
    var rqst = new XMLHttpRequest();
rqst.onreadystatechange = function(){
    if (rqst.readyState == 4 && rqst.status == 200){
        document.getElementById('stylise').href = "style_admin.css";
        document.getElementById('content').innerHTML = rqst.responseText;
    }
}
rqst.open('GET', 'acces.html');
rqst.send();
}

document.getElementById('secret').addEventListener('click', getAjaxLog);




/////////// invocation PAGE ADMINISTRATION DU SITE ///////////////////////////avec invocation css correspondant




function getAjax4(){
    var xhr = new XMLHttpRequest();
    
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4 && xhr.status == 200){
        document.getElementById('stylise').href = "style_admin.css";
        document.getElementById('content').innerHTML = xhr.responseText;
        getAjaxAdm();
    }
}
xhr.open('GET', 'adminPage.html');
xhr.send();
}

