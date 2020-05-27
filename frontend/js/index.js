//var photosElt = document.getElementById("photos"); ??? qu'est-ce que ça fout là

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
                        '<a href="html/product.html?id='+ teddy._id + '" class="btn btn-secondary">Sélectionner</a>' +
                    '</div>' + 
                '</div>' +
            '</div>';
}

function formatPrice(price) {
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    let newPriceColor = newPrice;
    newPriceColor = newPrice.fontcolor("red");
    return newPriceColor.replace(".", ",");
}

function changeName(name) {
    name = name.replace("Norbert", "Serge");
    name = name.replace("Arnold", "Marcel");
    return name;
}

function newDescription (description) {
    if (description === "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.") {
        let newDescription = "Quand le JavaScript te fait craquer, quand tu sens que tu vas manger ton clavier, ton ourson est là pour te rassurer, alors fais lui un gros calin et tout ira bien !";
        return newDescription;
    } else {
        return description;
    };
}

