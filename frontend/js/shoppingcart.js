// Constante qui permet l'initialisation du local storage

const LABEL_VAR_LOCAL_STORAGE = "contact_app_orinobear";

let productToBuy = (localStorage.getItem(LABEL_VAR_LOCAL_STORAGE) == null) ? '' : localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
console.log(productToBuy);
let products = JSON.parse(productToBuy);
console.log(products);
products.forEach(function(product) {
    let container = document.getElementById("card-container");
        container.innerHTML += createArticleHtml(product);
    });

function createArticleHtml(product) {
    return  '<div class="col-12 mb-4">' +
                '<div class="col-12 mb-4">' +
                '<table class="table table-dark">' +
                '<thead>' +
                    '<tr>' +
                    '<th scope="col">id</th>' +
                    '<th scope="col">Couleur</th>' +
                    '<th scope="col">Quantité</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                // uniquement bouclé ceci
                    '<tr>' +
                    '<td>' + product.id + '</td>' +
                    '<td>' + product.color + '</td>' +
                    '<td>' + product.quantity + '</td>' +
                    '</tr>' +
                // Fin
                '</tbody>' +
                '</table>' +
            /*'<div class="row">' +
                '<div class="col-12 d-flex justify-content-center align-items-center flex-column mb-2">' +
                    '<a href="" class="btn btn-secondary mt-3">Vider mon panier<i class="fas fa-shopping-cart ml-2"></i></a>' +
                '</div>' +*/
            '</div>';
}















