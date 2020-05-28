const productManager = new ProductManager();

ajaxGet("http://localhost:3000/api/teddies", function (reponse) {
    let teddies = JSON.parse(reponse);
    teddies.forEach(function(teddy) {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    });
    productManager.importTeddies(teddies);
})

function createArticleHtml(teddy){
    return  '<div class="col-12 mb-4">' +
                '<div class="card" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + changeName(teddy.name) + '</h5>' +
                        '<p class="card-text-1">' + newDescription(teddy.description) + '</p>' +
                        '<p class="card-text-2">' + '<u>Prix</u>: ' + formatPrice(teddy.price) + '<span style="color:red;">&euro;</span></p>' +
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary mt-3">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

/* la fonction ajaxGet permet de récupérer toutes les données de l'api sous son format JSON,
Une fois "parsé", on fait une boucle pour traiter l'ensemble des données de l'api,
Toutes ces données, sans distinction, sont appelées "teddies", et pour chacune d'entre elle (teddy), on souhaiterait ajouter du HTML,
Pour ajouter toute la diversité des données que comportent l'api, on va créer une méthode soit une manière de structurer les données,
Cette méthode indique donc les différentes div qu'on souhaite créer en prenant soin d'utiliser les différentes infos que l'on peut trouver dans l'api,
Pour générer par exemple la div comportant le nom de l'ours en peluche on choisit un paramètre (peu importe son appellation : bear, nounours, bob, avion...),
le principal est que ce paramètre soit rattaché à la réalité d'une des données existantes pour que cela fonctionne (ex : _id),
Une fois cette méthode créer, on l'utilise à la fin de la fonction ajaxGet pour générer le HTML;*/





