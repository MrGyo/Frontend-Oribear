//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== PARTIE DEDIEE A LA CONSTRUCTION DU TABLEAU RECAPITUALITF ===//

//=== Initialisation d'une variable pour avoir recours au contenu du local storage ===//
let products = loadLocalStorage(LABEL_VAR_LOCAL_STORAGE);

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
            '<td>' + product.name + '</td>' +
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

//=== PARTIE DEDIEE A LA CONSTRUCTION DU FORMULAIRE ===//

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    //Contrôle du formulaire avant envoi cf. confirm.js
    if (!checkForm())
      return;

    // Initialisation d'un tableau permettant de récupérer les id des teddies dans le local storage
    let products = [];
    let cart = JSON.parse(localStorage.getItem(LABEL_VAR_LOCAL_STORAGE));
    console.log(cart);
    for (let i = 0; i < cart.length; i++) {
      products.push((cart[i].id))
    }
    console.log(products);

    // Initialisation d'une variable devant comporter les infos contacts attendus par l'api ainsi qu'un array comportant les id des teddies
    var order = {
      contact : {
      firstName:  document.getElementById('firstname').value,
      lastName: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value
      },
      products: products
    };

    // Envoi de l'order à l'api et redirection vers la page de confirmation
    ajaxPost(
      "http://localhost:3000/api/teddies/order",
      order,
      function(reponse) {
        console.log(reponse);
        console.log(JSON.parse(reponse).orderId);
        let finalOrder = {id: JSON.parse(reponse).orderId, price: totalToPay};
        console.log(finalOrder)
        saveLocalStorage(LABEL_VAR_LOCAL_STORAGE_ORDER, finalOrder);
        //--TODO créer fichier confirm.js pour load() et payer un resto à Jerem et lui faire un gros bisou
      },
      true
    );
  });

