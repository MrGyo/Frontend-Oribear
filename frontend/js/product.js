let params = GetParams(window.location.href);

ajaxGet('http://localhost:3000/api/teddies/' + params.id, function (reponse) {
    let product  = JSON.parse(reponse);
    let container = document.getElementById("product-container");
    container.innerHTML = createArticleHtml(product);
})

function createArticleHtml(teddy){

    let colorString = "";
        for(let color of teddy.colors) {
        colorString += '<option value="">' + color + '</option>'
        };
    
    return  '<div class="col-12 mb-4">' +
                '<div class="card" id="'+ teddy._id + '">' +
                    '<img src="'+ teddy.imageUrl +'" class="w-100">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">' + changeName(teddy.name) + '</h5>' +
                        '<p class="card-text-1">' + newDescription(teddy.description) + '</p>' +
                        '<p class="card-text-2">' + '<u>Prix</u>: ' + formatPrice(teddy.price) + '<span style="color:red;">&euro;</span></p>' +
                        '<div class="input-group mb-3">' + 
                            '<div class="input-group-prepend">' +
                                '<label class="input-group-text" for="inputGroupSelect01">' + 'Option' + '</label>' +
                            '</div>' +
                            '<select class="custom-select" id="inputGroupSelect01">' +
                                '<option selected>' + 'Choisissez une couleur' + '</option>'+
                                '<option value="">' + colorString + '</option>' +
                            '</select>' +
                        '</div>' +
                        '<a href="" class="btn btn-success mt-1">Ajouter au panier<i class="fas fa-shopping-cart ml-2"></i></a>' +
                    '</div>' + 
                '</div>' +
            '</div>'; 
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




