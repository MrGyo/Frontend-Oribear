let params = GetParams(window.location.href);
console.log(params);

ajaxGet('http://localhost:3000/api/teddies/' + params.id, function (reponse) {
    let table  = JSON.parse(reponse);
    let container = document.getElementById("card-container");
    container.innerHTML = createArticleHtml(table);
})

function createArticleHtml(teddy){

    let colorString = "";
        for(let color of teddy.colors) {
        colorString = '<option value="">' + color + '</option>'
        };
    
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
                    '<td>' + changeName(teddy.name) + '</td>' +
                    '<td>' + colorString + '</td>' +
                    '<td>1</td>' +
                    '<td>' + formatPrice(teddy.price) + '&euro;</td>' +
                    '</tr>' +
                '</tbody>' +
                '</table>' +
            '<div class="row">' +
                '<div class="col-12 d-flex justify-content-center align-items-center flex-column mb-2">' +
                    '<a href="../index.html" class="btn btn-danger mt-3">Encore plus de calins ?</a>' +
                    '<a href="" class="btn btn-secondary mt-3">Vider mon panier<i class="fas fa-shopping-cart ml-2"></i></a>' +
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