//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== Variable permettant d'appeler la méthode GetParams pour récupérer l'id dans l'adresse URL de la page produit ===//
let params = GetParams(window.location.href);

//=== Variable qui permet de d'utilser les infos récupérées de l'API ===//
let product = null;

//=== Récupération du produit ciblé (grâce à l'ajout de l'id produit) ===//
ajaxGet('http://localhost:3000/api/teddies/' + params.id, function (reponse) {
    product  = JSON.parse(reponse);
    let container = document.getElementById("product-container");
    container.innerHTML = createArticleHtml(product);
})

//=== Création d'une méthode pour implémenter la fiche produit ciblée sur la page product.html ===//
const createArticleHtml = (teddy) => {
    // Ajout d'une option permettant à l'utilisateur de choisir la couleur du produit
    let colorString =  '<option selected value="">' + 'Choisissez une couleur' + '</option>';
        for(let color of teddy.colors) {
        colorString += '<option value="' + color + '">' + color + '</option>';
        };

    return  '<div class="col-12 mb-4">' +
                '<div class="card mb-5" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body" id="product-details">' +
                        '<h5 class="card-title" id="name">' + changeName(teddy.name) + '</h5>' +
                        '<p class="card-text-1">' + newDescription(teddy.description) + '</p>' +
                        '<p class="card-text-2" id="price">Prix: <span style="color:#dc3545;">' + formatPrice(teddy.price) + '&euro;</span></p>' +
                        '<div class="input-group mb-3">' + 
                            '<div class="input-group-prepend">' +
                                '<label class="input-group-text" style="width:100px" for="inputGroupSelect01">Couleur</label>' +
                            '</div>' +
                            '<select class="custom-select" id="inputGroupSelect01">'+ colorString +'</select>' +
                        '</div>' +
                        '<div class="input-group mb-3">' + 
                            '<div class="input-group-prepend">' +
                                '<label class="input-group-text" style="width:100px" for="inputGroupSelect02">Quantité</label>' +
                            '</div>' +
                            '<select  class="custom-select" id="options">' + 
                                '<option class="quantity" value="1">1</option>' +
                                '<option class="quantity" value="2">2</option>' +
                                '<option class="quantity" value="3">3</option>' +
                                '<option class="quantity" value="4">4</option>' +
                                '<option class="quantity" value="5">5</option>' +
                            '</select>' +
                        '</div>' +
                        '<div class="d-flex justify-content-between">' +
                        '<a href="#" class="btn btn-success mt-1" onclick="saveToCart()">Ajouter au panier<i class="fas fa-shopping-cart ml-2"></i></a>' +
                        '<a href="../index.html" class="btn btn-secondary mt-1">Retour à l\'accueil<i class="fas fa-undo-alt ml-2"></i></a>' +
                        '</div>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

//=== Ajout d'une fonction qui isole l'id dans l'adresse url ===//
function GetParams(url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

//=== Ajout d'une fonction qui permet, au clic, de sauvegarder l'article dans le panier via le local storage ===//
const saveToCart = () => {
    // Création de deux variables permettant de récupérer la valeur concernant les choix "couleur" et "quantité" de l'utilisateur
    let colorSelected = document.getElementById("inputGroupSelect01").value;
    let quantitySelected = document.getElementById("options").value;

    // Création de "sweetalerts" rappelant à l'utilisateur l'obigation de choisir une couleur et une quantité (par défaut la quantité = 1)
    if (colorSelected == "" || quantitySelected == "") {
        Swal.fire("Oops!", "Choisissez une couleur et une quantité :)", "error");
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Votre teddy est dans le panier !',
            showConfirmButton: false,
            timer: 2500,
        });

        /*product.quantitySelected = quantitySelected;
        product.colorSelected = colorSelected;*/

        // Création d'un objet regroupant l'ensemble des informations pour le setitem au local storage via la méthode addToCart
        let productToAdd = {'id': product._id, 'name': product.name, 'color': colorSelected, 'quantity' : quantitySelected, 'price' : product.price};

        // Utilisation de la méthode addToCart pour sauvegarder les produits sélectionner
        addToCart(productToAdd);

        // Recours à la méthode updateBadge pour mettre à jour le nombre de produits ajoutés
        updateBadge();

        // Recours à la méthode refreshBadge pour un refresh du badge sur le site au moment du clic "sélectionner" (cf. méthode dans helper.js ligne 33)
        refreshBadge();
    }; 
}

//=== Ajout d'une fonction addToCart qui permet de faire un setitem du produit au localstorage ===//
function addToCart(productToAdd) {
    // Initialisation du panier, on vérifie si certaines infos figurent déjà au localstorage, si oui parse des données
    let cart = (localStorage.getItem(LABEL_VAR_LOCAL_STORAGE) == null) ? [] : JSON.parse(localStorage.getItem(LABEL_VAR_LOCAL_STORAGE));

    // Déclaration d'une variable article qui permet de vérifier si un même article est déjà ajouté et d'assurer l'addition des quantités
    let article = cart.find( element => element.id === productToAdd.id && element.color === productToAdd.color);
    if (article !== undefined) {
        article.quantity = parseInt(productToAdd.quantity) + parseInt(article.quantity);
    } else {
        cart.push(productToAdd)
    }
    // Une fois la condition ci-dessus vérifiée un setitem permet d'envoyer le nouveau produit cliqué au local storage
    localStorage.setItem(LABEL_VAR_LOCAL_STORAGE, JSON.stringify(cart));
}

//=== Ajout d'une fonction updateBadeg qui permet de faire un setitem de la quantité dédiée au localstorage du badge ===//
function updateBadge() {
    // Initialisation du panier sur la base de ce qui se trouve au local storage
    let cart = (localStorage.getItem(LABEL_VAR_LOCAL_STORAGE) == null) ? [] : JSON.parse(localStorage.getItem(LABEL_VAR_LOCAL_STORAGE));
    let quantities = 0;
    // Pour chaque produit identique présent au panier la quantité s'additionne à celle comptabilisée au moment de l'ajout
    for (let product of cart) {
        quantities += parseInt(product.quantity)
    }
    // Une fois la boucle réalisée un setitem permet l'ajout de la quantité des produits au panier au niveau du badge
    localStorage.setItem(LABEL_VAR_LOCAL_STORAGE_BADGE, quantities);
}



