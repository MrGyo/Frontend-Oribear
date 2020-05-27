
let params = GetParams(window.location.href);
console.log(params.id);

ajaxGet('http://localhost:3000/api/teddies/' + params.id, function (reponse) {
    let product  = JSON.parse(reponse);
    console.log(product);
    let container = document.getElementById("product-container");
    container.innerHTML = createArticleHtml(product);
})

function createArticleHtml(teddy){
    return  '<div class="col-12 mb-4">' +
                '<div class="card" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + changeName(teddy.name) + '</h5>' +
                        '<p class="card-text-1">' + newDescription(teddy.description) + '</p>' +
                        '<p class="card-text-2">' + '<u>Prix</u>: ' + formatPrice(teddy.price) + '<span style="color:red;">&euro;</span></p>' +
                        '<a href="" class="btn btn-secondary">Ajouter au panier</a>' +
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

function GetParams (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
}

function newDescription (description) {
    if (description === "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.") {
        let newDescription = "Quand le JavaScript te fait craquer, quand tu sens que tu vas manger ton clavier, ton ourson est là pour te rassurer, alors fais lui un gros calin et tout ira bien !";
        return newDescription;
    } else {
        return description;
    };


}