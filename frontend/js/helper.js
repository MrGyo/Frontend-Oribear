//=== GESTION DU LOCAL STORAGE ===//

// Déclaration de 3 constantes dédiées au local storage
const LABEL_VAR_LOCAL_STORAGE = "app_oribear";
const LABEL_VAR_LOCAL_STORAGE_BADGE = "badge_oribear";
const LABEL_VAR_LOCAL_STORAGE_ORDER = "order_oribear";

// Sauvegarde dans le local storage l'id donnée
function saveLocalStorage(id, value){
    localStorage.setItem(id, JSON.stringify(value));
}

// Va chercher la valeur du localStorage id
function loadLocalStorage(id){
    return (localStorage.getItem(id) == null) ? [] : JSON.parse(localStorage.getItem(id));
}


//=== FONCTION POUR LE FORMAT DU PRIX ===//

// fonction pour le format du prix de la page produit
function formatPrice(price) {
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    return newPrice.replace(".", ",");
}
// fonction pour le format du prix de la page panier
function formatPriceBis(price) {
    return price.replace(".", ",");
}

//=== FONCTION POUR LE PANIER ===//

// Méthode qui permet de vérifier si la panier comporte au moins un article
function checkCart() {
    let checkCart = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
    if (checkCart == null) {
        Swal.fire("Oops", "Votre panier est vide ! :)", "error");
        return false;
    } else {
        return true;
    }
}

// Méthode qui permet de vider tout le panier de l'utilisateur ---//
function clearCart() {
    let cartToClear = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
    if (cartToClear != null) {
        localStorage.clear(LABEL_VAR_LOCAL_STORAGE); 
    };
}

//=== FONCTION POUR LE REFRESH DU BADGE ===//

// Méthode qui permet de faire un refresh du badge après ajout d'un produit
function refreshBadge() {
    // Initialisation d'une variable qui renvoie aux données badge disponible dans le local storage badge soit un nombre
    let refreshBadge = loadLocalStorage(LABEL_VAR_LOCAL_STORAGE_BADGE);
    // Initialisation d'une variable qui renvoie à l'id badge du DOM sur les 3 pages du site
    let badge = document.getElementById("badge");
    // Ajout de ce nombre au document HTML
    badge.innerHTML = refreshBadge;
}














