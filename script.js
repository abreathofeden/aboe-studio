/* Forme du tapis */

function formeTapis(type){

    const carre=document.getElementById("tapis_carre");

    const dressage=document.getElementById("tapis_dressage");

    carre.style.display="none";
    dressage.style.display="none";

    if(type==="carre"){

        carre.style.display="block";

    }

    else{

        dressage.style.display="block";

    }

}

/* Couleur */

function couleurTapis(couleur){

    document.getElementById("couleur_tapis").style.backgroundColor=couleur;

}

/* Picker */

function pickerCouleur(){

    couleurTapis(document.getElementById("picker").value);

}
