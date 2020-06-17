//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== Récupération des fiches produits via l'api (id, color, name, description, price) ===//
let url = 'http://localhost:3000/api/teddies';

async function retrieveContent(url){
    let result = await fetch(url).then(response => {
        return response.json()
    })
    return result;  
}

retrieveContent(url).then(teddies => {
    teddies.forEach(teddy => {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    })
});


//=== Création d'une méthode pour ajouter les fiches produits sur la page index.html ===//
const createArticleHtml = (teddy) => {
    return  '<div class="col-12 mb-3">' +
                '<div class="card mb-4" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2">Prix: <span style="color:#dc3545;">' + formatPrice(teddy.price) + '&euro;</span></p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary mt-3">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}














