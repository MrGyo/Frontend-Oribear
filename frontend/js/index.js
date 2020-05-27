//var photosElt = document.getElementById("photos");

const productManager = new ProductManager();


ajaxGet("http://localhost:3000/api/cameras", function (reponse) {
    let photos = JSON.parse(reponse);
    photos.forEach(function(photo) {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(photo);
    });

    productManager.importCameras(photos);
})

function createArticleHtml(photo){
    return  '<div class="col-12 mb-4">' +
                '<div class="card" id="'+ photo._id + '">' +
                    '<img src="'+ photo.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + photo.name + '</h5>' +
                        '<p class="card-text-1">' + photo.description + '</p>' +
                        '<p class="card-text-2">' + 'Prix : ' + formatPrice(photo.price) + '&euro;</p>' +
                        '<a href="product.html?id='+ photo._id + '" class="btn btn-secondary">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}
// onCLick="selectProduct(\''+ photo._id +'\')

function formatPrice(price) {
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    return newPrice.replace(".", ",");
}


