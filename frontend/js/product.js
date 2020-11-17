//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== Variable permettant de récupérer l'id dans l'adresse URL de la page produit ===//
const params = new URLSearchParams(window.location.search);

//=== Variable qui permet d'utilser les infos récupérées de l'API : fiche du produit sélectionné ===//
let product = null;

//=== Récupération du produit ciblé (grâce à l'ajout de l'id produit) ===//
let url = 'http://localhost:3000/api/teddies/' + params.get("id");

async function retrieveContent(url){
    let result = await fetch(url).then(response => {
        console.log(response)
        return response.json()
    })
    console.log(result)
    return result;  
}

retrieveContent(url).then(teddy => {
        let container = document.getElementById("product-container");
        container.innerHTML = createArticleHtml(teddy);
        product = teddy;
        console.log(product);
});

//=== Création d'une méthode pour implémenter la fiche produit ciblée sur la page product.html ===//
const createArticleHtml = (teddy) => {
    // Ajout d'une option permettant à l'utilisateur de choisir la couleur du produit
    let colorString =  '<option selected value="">' + 'Choisissez une couleur' + '</option>';
        for(let color of teddy.colors) {
        colorString += '<option value="' + color + '">' + color + '</option>';
        };

    return  '<div class="col-lg-8 offset-lg-2 mb-4">' +
                '<div class="card mb-5" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body" id="product-details">' +
                        '<h5 class="card-title" id="name">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2" id="product_price">Prix: <span style="color:#dd3e89;">' + formatPriceProduct(teddy.price) + '&euro;</span></p>' +
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
                        '<div class="d-flex flex-column justify-content-sm-between flex-sm-row">' +
                            '<a href="../index.html" class="btn btn-secondary mt-1"><i class="fas fa-undo-alt mr-2"></i>Retour à l\'accueil</a>' +
                            '<a href="#" class="btn btn-success mt-1" onclick="saveToCart()"><i class="fas fa-shopping-cart mr-2"></i>Ajouter au panier</a>' +
                        '</div>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

//=== Ajout d'une fonction qui permet, au clic, de sauvegarder l'article dans le panier via le local storage ===//
const saveToCart = () => {
    // Création de deux variables permettant de récupérer la valeur concernant les choix "couleur" et "quantité" de l'utilisateur
    let colorSelected = document.getElementById("inputGroupSelect01").value;
    let quantitySelected = document.getElementById("options").value;
    // Utilisation de la méthode sur les options choisies et la création d'un objet regroupant les infos à sauvegarder
    productSelected(colorSelected, quantitySelected);
}

//=== Ajout d'une fonction qui permet  préparer la sauvegarde à faire dans le localstorage ===//
const productSelected = (colorSelected, quantitySelected) => {
    // Appel des méthodes pour le contrôle des choix de l'utilsateur
    if (colorSelected == "") {
        alertUserChoice() 
    } else {
        confirmChoice()
        // Création d'un objet regroupant l'ensemble des informations pour le setitem au local storage via la méthode addToCart
        let productToAdd = {id: product._id, name: product.name, color: colorSelected, quantity : quantitySelected, price : product.price};
        // Utilisation de la méthode addToCart pour sauvegarder les produits sélectionner
        addToCart(productToAdd);
        // Recours à la méthode updateBadge pour mettre à jour le nombre de produits ajoutés
        updateBadge();
        // Recours à la méthode refreshBadge pour un refresh du badge sur le site au moment du clic "sélectionner"
        refreshBadge();
    }; 
}

//=== Ajout d'une fonction addToCart qui permet de faire un setitem du produit au localstorage ===//
const addToCart = (productToAdd) => {
    // On charge le contenu du local storage
    let cart = loadLocalStorage(LABEL_VAR_LOCAL_STORAGE);
    // Déclaration d'une variable article qui permet de vérifier si un même article est déjà ajouté et d'assurer l'addition des quantités
    let article = cart.find( element => element.id === productToAdd.id && element.color === productToAdd.color);
    if (article !== undefined) {
        article.quantity = parseInt(productToAdd.quantity) + parseInt(article.quantity);
    } else {
        cart.push(productToAdd)
    }
    // Une fois la condition ci-dessus vérifiée un setitem permet d'envoyer le nouveau produit cliqué au local storage
    saveLocalStorage(LABEL_VAR_LOCAL_STORAGE, cart)
}







