function getAjaxArt(){
    var rqst = new XMLHttpRequest();
    rqst.onreadystatechange = function () {
        if (rqst.readyState == 4 && rqst.status == 200){
            var result = JSON.parse(rqst.responseText).data;
            console.log(result);
            affichage(result);
        }
    }
    rqst.open('GET','datas.json');
    rqst.send();
    }
    
    getAjaxArt();
    
    function affichage(donnees) {
        var txt = '<article>';
        for (var i = 0; i < donnees.length; i++) {
            txt += '<h2>' + donnees[i].title + '</h2>'+
            '<img src="'+ donnees[i].photo +'" alt="..."></img>'+
            '<p>'+ donnees[i].text +'</p>'+
            '<p> auteur : ' + donnees[i].auteur +'</p>'+
            '<p class="dateur"> article paru le ' + donnees[i].date + '</p>'+
            '<br><br>';
        }
        
        txt += '</article>';
        String(txt);
        document.querySelector('#article').innerHTML = txt;
    }
    
    