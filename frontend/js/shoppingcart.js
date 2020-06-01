// Constante qui permet l'initialisation du local storage
const LABEL_VAR_LOCAL_STORAGE = "contact_app_orinobear";

ajaxGet('http://localhost:3000/api/teddies/', function (reponse) {
    let table  = JSON.parse(reponse);
    let container = document.getElementById("card-container");
    container.innerHTML = createArticleHtml(table);
    });

function createArticleHtml(teddy) {

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
                    '<td>' + teddy.name + '</td>' +
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

const loadCart = () => {
    let productToGet = (localStorage.getItem(LABEL_VAR_LOCAL_STORAGE) == null) ? '' :  localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);
    //var newProduct = {'id': product._id, 'color': colorSelected};
    product.colorSelected = colorSelected;
    let productToSave = JSON.stringify(product);
    localStorage.setItem(LABEL_VAR_LOCAL_STORAGE, productToSave + productToGet);
    //console.log(productToSave);
    console.log(localStorage.getItem(LABEL_VAR_LOCAL_STORAGE));

}













