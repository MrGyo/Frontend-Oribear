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









