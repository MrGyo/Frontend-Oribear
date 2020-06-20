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

//=== FONCTION POUR LE CHOIX DU PRODUIT ===//

// Méthode qui permet de rappeler l'utilisateur qu'il doit choisir une couleur et une quantité
function alertUserChoice() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-secondary btn-ok',
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Oops!',
        text: 'Choisissez une couleur :)',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.value) {
          return;
        }
      })
} 

// Méthode qui confirme le choix de l'utilisateur et qui lui propose soit de retourner au menu soit de finaliser sa commande
function confirmChoice() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary btn-cart',
          cancelButton: 'btn btn-secondary btn-index'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Votre teddy est dans le panier',
        icon: 'success',
        showCancelButton: true,
        cancelButtonText: '<i class="fas fa-walking mr-2"></i>Un autre teddy ?',
        confirmButtonText: '<i class="fas fa-shopping-cart mr-2"></i>Passer ma commande',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
            window.location.href = 'shoppingcart.html';
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
            window.location.href = '../index.html';
        }
      })
}

//=== FONCTION POUR LE PANIER ===//

// Méthode qui permet de vérifier si la panier comporte au moins un article
function checkCart() {
    let checkCart = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
    if (checkCart == null) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-secondary btn-ok',
            },
            buttonsStyling: false
          })
          swalWithBootstrapButtons.fire({
            title: 'Oops!',
            text: 'Votre panier est vide :)',
            icon: 'error',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.value) {
              return;
            }
          })
    } else {
        return true;
    }
}

// Méthode qui permet de vider tout le panier de l'utilisateur ---//
function clearCartConfirm() {
  let checkCart = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
  if (checkCart == null) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-secondary btn-ok',
        },
        buttonsStyling: false
      })
      swalWithBootstrapButtons.fire({
        title: 'Oops!',
        text: 'Votre panier est vide :)',
        icon: 'error',
        confirmButtonText: 'OK',
      }).then((result) => {
        if (result.value) {
          return;
        }
      })
  } else {
      const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
              confirmButton: 'btn btn-secondary btn-confirm-cart',
              cancelButton: 'btn btn-primary btn-cancel-cart'
          },
          buttonsStyling: false
        })
      swalWithBootstrapButtons.fire({
          title: 'Prêt à abandonner votre teddy ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: '<i class="far fa-frown mr-2""></i>Vider le panier',
          cancelButtonText: '<i class="far fa-smile-beam mr-2""></i>Annuler', 
          reverseButtons: false
        }).then((result) => {
          if (result.value) {
              swalWithBootstrapButtons.fire({
                  title: 'Snif!',
                  text: 'Votre teddy est orphelin :(',
                  icon: 'info',
                  showConfirmButton: false,
              })
              clearCart();
              setTimeout(function(){ window.location.href = '../index.html'; }, 2000);
          } else if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
              return;
          }
      })
  }
}

function clearCart(){
    let cartToClear = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
    if (cartToClear != null) {
        localStorage.clear(LABEL_VAR_LOCAL_STORAGE);
    } 

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













