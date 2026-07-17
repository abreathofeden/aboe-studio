function formeTapis(type){

    let carre=document.getElementById("tapis_carre");

    let dressage=document.getElementById("tapis_dressage");

    if(type=="carre"){

        carre.style.display="block";
        dressage.style.display="none";

    }

    else{

        carre.style.display="none";
        dressage.style.display="block";

    }

}

function changerCouleur(){

    let couleur=document.getElementById("picker").value;

    document.getElementById("couleur").style.backgroundColor=couleur;

}
