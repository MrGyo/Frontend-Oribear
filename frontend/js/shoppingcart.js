//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== PARTIE DEDIEE A LA CONSTRUCTION DU TABLEAU RECAPITUALITF ===//
//=== Initialisation d'une variable pour avoir recours au contenu du local storage ===//
let products = loadLocalStorage(LABEL_VAR_LOCAL_STORAGE);

//=== Par défaut le montant à payer par l'utilisateur est initialisé à 0 ===//
let totalToPay = 0

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
            '<td class="price"><span style="color:#dd3e89;">' + product.totalPricePerProduct + '&euro;</span></td>' +
            '</tr>';
        }

//=== PARTIE DEDIEE A LA VALIDATION DE LA COMMANDE ===//
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    // Contrôle du panier si vide cf. helper.js
    if (!checkCart())
      return;
  
    // Contrôle du formulaire avant envoi cf. confirm.js
    if (!checkForm())
      return;

    // Initialisation d'un tableau permettant de récupérer les id des teddies dans le local storage
    let products = [];
    let cart = loadLocalStorage(LABEL_VAR_LOCAL_STORAGE);
    console.log(cart);
    for (let i = 0; i < cart.length; i++) {
      products.push((cart[i].id))
    }
    console.log(products);

    // Initialisation d'une variable devant comporter les infos contacts attendus par l'api ainsi qu'un array comportant les id des teddies
    

    // Envoi de l'order à l'api et redirection vers la page de confirmation
    /*ajaxPost(
      "http://localhost:3000/api/teddies/order",
      order,
      function(reponse) {
        let finalOrder = {firstname: JSON.parse(reponse).contact.firstName, id: JSON.parse(reponse).orderId, price: totalToPay};
        console.log(finalOrder)
        saveLocalStorage(LABEL_VAR_LOCAL_STORAGE_ORDER, finalOrder);
        window.location.href = 'confirmation.html?';
      },
      true
    );*/
    let url = 'http://localhost:3000/api/teddies/order';
    let order = {
      contact : {
      firstName:  document.getElementById('firstname').value,
      lastName: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      city: document.getElementById('city').value
      },
      products: products
    };

    retrieveContent(url, order).then(response => {
      let finalOrder = {firstname: response.contact.firstName, id: response.orderId, price: totalToPay};
      console.log(finalOrder)
      saveLocalStorage(LABEL_VAR_LOCAL_STORAGE_ORDER, finalOrder);
      window.location.href = 'confirmation.html?';
    });
  });


  async function retrieveContent(url, order) {
    console.log(order);
    
    let result = await fetch(url, {
      method: "POST",
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(order)
    }).then(response => {
        return response.json()
    })
    return result;  
  }


    


        
  
  
