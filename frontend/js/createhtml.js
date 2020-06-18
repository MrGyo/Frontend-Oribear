//=== Création d'une méthode pour ajouter les fiches produits sur la page index.html ===//
const createArticleIndexHtml = (teddy) => {
    return  '<div class="col-12 mb-3">' +
                '<div class="card mb-4" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2">Prix: <span style="color:#dd3e89;">' + formatPrice(teddy.price) + '&euro;</span></p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary btn-select mt-3">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

//=== Création d'une méthode pour implémenter la fiche produit ciblée sur la page product.html ===//
const createArticleProductHtml = (teddy) => {
    // Ajout d'une option permettant à l'utilisateur de choisir la couleur du produit
    let colorString =  '<option selected value="">' + 'Choisissez une couleur' + '</option>';
        for(let color of teddy.colors) {
        colorString += '<option value="' + color + '">' + color + '</option>';
        };

    return  '<div class="col-12 mb-4">' +
                '<div class="card mb-5" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body" id="product-details">' +
                        '<h5 class="card-title" id="name">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2" id="price">Prix: <span style="color:#dd3e89;">' + formatPrice(teddy.price) + '&euro;</span></p>' +
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
                        '<a href="../index.html" class="btn btn-secondary mt-1"><i class="fas fa-undo-alt mr-2"></i>Retour à l\'accueil</a>' +
                        '<a href="#" class="btn btn-success mt-1" onclick="saveToCart()"><i class="fas fa-shopping-cart mr-2"></i>Ajouter au panier</a>' +
                        '</div>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

//=== Création d'une méthode pour implémenter le tableau récapitulatif sur la page shoppingcart.html ===//
function createArticleCartHtml(product) {
    return  '<tr>' +
            '<td>' + product.name + '</td>' +
            '<td>' + product.color + '</td>' +
            '<td>' + product.quantity + '</td>' +
            '<td class="price"><span style="color:#dd3e89;">' + product.totalPricePerProduct + '&euro;</span></td>' +
            '</tr>';
        }