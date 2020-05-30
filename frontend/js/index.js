//const LABEL_VAR_LOCAL_STORAGE = "contact_app_orinobear";

//let productManager = new ProductManager();

//var stringProducts = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);

ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    let teddies = JSON.parse(reponse);
    teddies.forEach(function(teddy) {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    });
    //productManager.importTeddies(teddies);
    //saveLocal();
})

function createArticleHtml(teddy) {
    return  '<div class="col-12 mb-3">' +
                '<div class="card mb-4" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + changeName(teddy.name) + '</h5>' +
                        '<p class="card-text-1">' + newDescription(teddy.description) + '</p>' +
                        '<p class="card-text-2">' + '<u>Prix</u>: ' + formatPrice(teddy.price) + '&euro;</p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary mt-3">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

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

/*function saveLocal () {
  let stringProducts = JSON.stringify(productManager.teddies);
  localStorage.setItem(LABEL_VAR_LOCAL_STORAGE, stringProducts);
}*/









