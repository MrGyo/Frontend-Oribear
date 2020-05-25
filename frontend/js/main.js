var photosElt = document.getElementById("photos");
ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
    var photos = JSON.parse(reponse);
    photos.forEach(function(photo) {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(photo);
    });
});

function createArticleHtml(photo){
    return  '<div class="col-6 mb-4">' +
                '<div class="card">' +
                    '<img src="'+ photo.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + photo.name + '</h5>' +
                        '<p class="card-text">' + photo.description + '</p>' +
                        '<p class="card-text">' + formatPrice(photo.price) + '&euro;</p>' +
                        '<a href="#" class="btn btn-primary" onCLick="selectProduct()">Selectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

function formatPrice(price){
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    return newPrice.replace(".", ",");
}

/*function selectProduct(){
}*/

