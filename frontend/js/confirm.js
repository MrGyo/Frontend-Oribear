//=== Initialisation d'une variable pour avoir recours au contenu du local storage ===//
let order = loadLocalStorage(LABEL_VAR_LOCAL_STORAGE_ORDER);

let message = document.getElementById("thanks").innerHTML += '<div>Merci ' + order.firstname + ' d\'avoir choisi Oribear</div>';
let orderId = document.getElementById("order_id").innerHTML += '<div><span style="color:#dd3e89;">' + order.id + '</span></div>';
let price = document.getElementById("price").innerHTML += '<div><span style="color:#dd3e89;">' + order.price + '&euro;</span></div>';

//=== Suppression des éléments contenus dans le panier ===//
clearCart()

//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 