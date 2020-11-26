//=== Méthode permettant un refresh du nombre de produits au panier dans le header ===//
refreshBadge() 

//=== Récupération des fiches produits via l'api (id, color, name, description, price) ===//
let url = 'http://localhost:3000/api/teddies';

async function retrieveContent(url){
    let result = await fetch(url).then(response => {
        //=== On obtient bien un réponse de l'api avec un statut 200 ===//
        console.log(response)
        return response.json()
    })
    //=== On retourne le résultat en provenance de l'api : un array composé de 5 objets (fiches produits) ===//
    console.log(result);
    return result;   
}

//=== Mise en place d'une boucle permettant d'afficher les fiches produits "Teddies" en utilisant la méthode createArticleHtml ===//
retrieveContent(url).then(teddies => {
    teddies.forEach(teddy => {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    });
    // Ajout d'une méthode qui permet de liker un produit
    addHtmlLikes();
});

//=== Création d'une méthode pour ajouter les fiches produits sur la page index.html ===//
const createArticleHtml = (teddy) => {
    return  '<div class="col-lg-8 offset-lg-2 mb-3">' +
                '<div class="card mb-4" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + teddy.name + '</h5>' +
                        '<p class="card-text-1">' + teddy.description + '</p>' +
                        '<p class="card-text-2">Prix: <span style="color:#dd3e89;">' + formatPriceProduct(teddy.price) + '&euro;</span></p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary btn-select mt-3">Sélectionner</a>' +
                        '<div class="like mt-4" title="Ajouter aux favoris"></div>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}


























