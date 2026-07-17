/* Changer la forme du tapis */
function formeTapis(type) {
    document.getElementById("tapis_carre").style.display = "none";
    document.getElementById("tapis_dressage").style.display = "none";

    if (type === "carre") {
        document.getElementById("tapis_carre").style.display = "block";
    } else {
        document.getElementById("tapis_dressage").style.display = "block";
    }
}

/* Changer la couleur du tapis */
function couleurTapis(couleur) {
    document.getElementById("tapis_carre").style.filter =
        `drop-shadow(0 0 0 ${couleur}) saturate(200%) brightness(120%)`;

    document.getElementById("tapis_dressage").style.filter =
        `drop-shadow(0 0 0 ${couleur}) saturate(200%) brightness(120%)`;
}

/* Input color */
function pickerCouleur() {
    const couleur = document.getElementById("picker").value;
    couleurTapis(couleur);
}
