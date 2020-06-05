//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== Initialisation d'une variable pour avoir recours au contenu du local storage ===//
let products = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);

//=== Si le contenu n'est pas vide, parse des données, sinon on initialise un tableau vide ===//
if (products != null){
    products = JSON.parse(products);
}
else {
    products = [];
}

//=== Par défaut le montant à payer par l'utilisateur est initialisé à 0 ===//
var totalToPay = 0

//=== Création d'une boucle pour ajouter chaque produit dans le tableau récapitulatif ===//
products.forEach(function(product) {
        let container = document.getElementById("cart-content");

        // Initialisation d'une variable pour procéder à la multiplication entre la quantité et le prix par produit (calcul pour chacune des lignes du tableau)
        let totalPricePerProduct = formatPrice(product.quantity * product.price);
        product.totalPricePerProduct = totalPricePerProduct;

        container.innerHTML += createArticleHtml(product);

        // totalToPay, initialisé en amont à 0, additionne les montants par ligne de produit
        totalToPay += parseInt(totalPricePerProduct);
        let containerTotal = document.getElementById("total-value");
        containerTotal.innerHTML = formatPriceBis(totalToPay.toFixed(2)) + '<span>&euro;</span>';
    });

//=== Création d'une méthode pour implémenter le tableau récapitulatif sur la page shoppingcart.html ===//
function createArticleHtml(product) {
    return  '<tr>' +
            '<td>' + changeName(product.name) + '</td>' +
            '<td>' + product.color + '</td>' +
            '<td>' + product.quantity + '</td>' +
            '<td class="price"><span style="color:#dc3545;">' + product.totalPricePerProduct + '&euro;</span></td>' +
            '</tr>';
        }

//=== fonction permettant de vider tout le panier de l'utilisateur ===//
function clearCart() {
    let cartToClear = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
    if (cartToClear != null) {
        localStorage.clear(LABEL_VAR_LOCAL_STORAGE); 
    };
}

