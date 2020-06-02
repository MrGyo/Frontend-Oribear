// Constante qui permet l'initialisation du local storage
const LABEL_VAR_LOCAL_STORAGE = "contact_app_orinobear";

// Variable permettant d'appeler la méthode GetParams pour récupérer l'id dans l'adresse URL
let params = GetParams(window.location.href);

// Permet de d'utilser les infos récupérées de l'API
let product = null;

// Récupération du produit ciblé (grâce à l'ajout de l'id produit)
ajaxGet('http://localhost:3000/api/teddies/' + params.id, function (reponse) {
    product  = JSON.parse(reponse);
    let container = document.getElementById("product-container");
    container.innerHTML = createArticleHtml(product);
})

// Création d'une méthode pour implémenter la fiche produit ciblée sur la page product.html
const createArticleHtml = (teddy) => {
    // Ajout d'une option permettant à l'utilisateur de choisir la couleur du produit
    let colorString =  '<option selected value="">' + 'Choisissez une couleur' + '</option>';
        for(let color of teddy.colors) {
        colorString += '<option value="' + color + '">' + color + '</option>';
        };
    return  '<div class="col-12 mb-4">' +
                '<div class="card mb-5" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2">' + '<u>Prix</u>: ' + formatPrice(teddy.price) + '&euro;</p>' +
                        '<div class="input-group mb-3">' + 
                            '<div class="input-group-prepend">' +
                                '<label class="input-group-text" style="width:100px" for="inputGroupSelect01">Option</label>' +
                            '</div>' +
                            '<select class="custom-select" id="inputGroupSelect01">'+ colorString +'</select>' +
                        '</div>' +
                        '<div class="input-group mb-3">' + 
                            '<div class="input-group-prepend">' +
                                '<label class="input-group-text" style="width:100px" for="inputGroupSelect02">Quantité</label>' +
                            '</div>' +
                            '<select  class="custom-select" id="options">' + 
                                //'<option selected value="">' + 'Choisissez une quantité' + '</option>' +
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

// Ajout d'une fonction qui isole l'id dans l'adresse url
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

const saveToCart = () => {
    let quantitySelected = document.getElementById("options").value;
    let colorSelected = document.getElementById("inputGroupSelect01").value;

    if (colorSelected == "" || quantitySelected == "") {
        Swal.fire("Oops!", "Choisissez une couleur et une quantité :)", "error");
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Votre teddy est dans le panier !',
            showConfirmButton: false,
            timer: 3000,
        });
        product.quantitySelected = quantitySelected;
        product.colorSelected = colorSelected;
        let productToAdd = {'id': product._id, 'color': colorSelected, 'quantity' : quantitySelected};
        addToCart(productToAdd);
    }; 
}

function addToCart(productToAdd) {
    let cart = (localStorage.getItem(LABEL_VAR_LOCAL_STORAGE) == null) ? [] : JSON.parse(localStorage.getItem(LABEL_VAR_LOCAL_STORAGE));
    console.log(cart);

    let article = cart.find( element => element.id === productToAdd.id && element.color === productToAdd.color);
    if (article !== undefined) {
        article.quantity = parseInt(productToAdd.quantity) + parseInt(article.quantity);
    } else {
        cart.push(productToAdd)
    }

    localStorage.setItem(LABEL_VAR_LOCAL_STORAGE, JSON.stringify(cart));
}

