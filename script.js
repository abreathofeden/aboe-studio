/* Forme du tapis */
function formeTapis(type) {
    const carre = document.getElementById("tapis_carre");
    const dressage = document.getElementById("tapis_dressage");

    carre.style.display = "none";
    dressage.style.display = "none";

    if (type === "carre") {
        carre.style.display = "block";
    } else {
        dressage.style.display = "block";
    }
}

/* Couleur du tapis (calque) */
function couleurTapis(couleur) {
    document.querySelector('.couleur').style.backgroundColor = couleur;
}

/* Input color */
function pickerCouleur() {
    const couleur = document.getElementById("picker").value;
    couleurTapis(couleur);
}
