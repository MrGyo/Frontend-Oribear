refreshBadge() 

let products = localStorage.getItem(LABEL_VAR_LOCAL_STORAGE);

if (products != null){
    products = JSON.parse(products);
}
else {
    products = [];
}

var totalToPay = 0

products.forEach(function(product) {
        let container = document.getElementById("cart-content");
        let totalPricePerProduct = formatPrice(product.quantity * product.price);
        product.totalPricePerProduct = totalPricePerProduct;
        container.innerHTML += createArticleHtml(product);

        totalToPay += parseInt(totalPricePerProduct);
        let containerTotal = document.getElementById("total-value");
        containerTotal.innerHTML = formatPriceBis(totalToPay.toFixed(2)) + '<span>&euro;</span>';
    });
    console.log(totalToPay);

function createArticleHtml(product) {

    return  '<tr>' +
            '<td>' + product.name + '</td>' +
            '<td>' + product.color + '</td>' +
            '<td>' + product.quantity + '</td>' +
            '<td class="price"><span style="color:#dc3545;">' + product.totalPricePerProduct + '&euro;</span></td>' +
            '</tr>';
        }

function clearCart() {
    let cartToClear = localStorage.clear(LABEL_VAR_LOCAL_STORAGE);
    console.log(cartToClear);
}


