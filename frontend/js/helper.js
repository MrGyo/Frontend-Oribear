// Ajout d'une fonction qui retouche le format du prix
function formatPrice(price) {
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    //let newPriceColor = newPrice;
    //newPriceColor = newPrice.fontcolor("red");
    return newPrice.replace(".", ",");
}

/*function changeName(name) {
    name = name.replace("Norbert", "Serge");
    name = name.replace("Arnold", "Marcel");
    return name;
}*/

/*function newDescription (description) {
    if (description === "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.") {
        let newDescription = "Quand le JavaScript te fait craquer, quand tu sens que tu vas manger ton clavier... fais lui un gros calin et tout ira bien !";
        return newDescription;
    } else {
        return description;
    };
}*/

/*function createArticleHtml(teddy) {
    return  '<div class="col-12 mb-4">' +
                '<div class="col-12 mb-4">' +
                '<table class="table table-dark">' +
                '<thead>' +
                    '<tr>' +
                    '<th scope="col">Article</th>' +
                    '<th scope="col">Couleur</th>' +
                    '<th scope="col">Quantité</th>' +
                    '<th scope="col">Total</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody>' +
                    '<tr>' +
                    '<td>' + teddy.name + '</td>' +
                    '<td>' + colorString + '</td>' +
                    '<td>1</td>' +
                    '<td>' + formatPrice(teddy.price) + '&euro;</td>' +
                    '</tr>' +
                '</tbody>' +
                '</table>' +
            '<div class="row">' +
                '<div class="col-12 d-flex justify-content-center align-items-center flex-column mb-2">' +
                    '<a href="" class="btn btn-secondary mt-3">Vider mon panier<i class="fas fa-shopping-cart ml-2"></i></a>' +
                '</div>' +
            '</div>';
}*/









