// --- Constante qui permet l'initialisation du local storage ---//
const LABEL_VAR_LOCAL_STORAGE = "app_oribear";
const LABEL_VAR_LOCAL_STORAGE_BADGE = "badge_oribear";

// --- Fonctions qui permet de retoucher le format du prix ---//
function formatPrice(price) {
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    return newPrice.replace(".", ",");
}
function formatPriceBis(price) {
    return price.replace(".", ",");
}

// --- Fonction qui permet de modifier certains noms ---//
function changeName(name) {
    name = name.replace("Norbert", "Serge");
    name = name.replace("Arnold", "Marcel");
    return name;
}

// --- Fonction qui permet de changer la description du produit ---//
function newDescription(description) {
    if (description === "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.") {
        let newDescription = "Quand le JavaScript te fait craquer, quand tu sens que tu vas manger ton clavier... fais lui un gros calin et tout ira bien !";
        return newDescription;
    } else {
        return description;
    };
}

// --- Fonction qui assure le rafraîchissement de l'icône du panier qui comptabilise le nombre d'articles ajoutés ---//
function refreshBadge() {
    // Initialisation d'une variable qui renvoie aux données badge disponible dans le local storage badge soit un nombre
    let refreshBadge = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE_BADGE);
    // Initialisation d'une variable qui renvoie à l'id badge du DOM sur les 3 pages du site
    let badge = document.getElementById("badge");
    // Ajout de ce nombre au document HTML
    badge.innerHTML = refreshBadge;
}









