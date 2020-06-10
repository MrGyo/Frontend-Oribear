//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== Récupération des fiches produits via l'api (id, color, name, description, price) ===//
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    // Dans la variables teddies on récupère tous les teddies issus de l'api
    let teddies = JSON.parse(reponse);
    // Pour chacun des teddies on va incrémenter les balises HTML définies dans une méthode
    teddies.forEach(function(teddy) {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    });
})

//=== Création d'une méthode pour ajouter les fiches produits sur la page index.html ===//
const createArticleHtml = (teddy) => {
    return  '<div class="col-12 mb-3">' +
                '<div class="card mb-4" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + newDescription(teddy.description) + '</p>' +
                        '<p class="card-text-2">Prix: <span style="color:#dc3545;">' + formatPrice(teddy.price) + '&euro;</span></p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary mt-3">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

//=== Fonction qui permet un scroll to top auto pour le bouton "bear-print" en bas de page sous le carrousel ===//
var mybutton = document.getElementById("bear-print");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}














