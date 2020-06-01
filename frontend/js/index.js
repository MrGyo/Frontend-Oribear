// Récupération des produits via l'api etcréation du HTML grâce à la méthode dédiée
ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    let teddies = JSON.parse(reponse);
    teddies.forEach(function(teddy) {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    });
})

// Création d'une méthode pour implémenter les fiches produits sur la page index.html
const createArticleHtml = (teddy) => {
    return  '<div class="col-12 mb-3">' +
                '<div class="card mb-4" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2">' + '<u>Prix</u>: ' + formatPrice(teddy.price) + '&euro;</p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary mt-3">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

// Ajout d'une fonction pour un scroll to top auto pour le bouton "bear-print"
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












