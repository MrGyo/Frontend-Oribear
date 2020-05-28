function formatPrice(price) {
    let newPrice = price / 100;
    newPrice = newPrice.toFixed(2);
    //let newPriceColor = newPrice;
    //newPriceColor = newPrice.fontcolor("red");
    return newPrice.replace(".", ",");
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


/*var mybutton = document.getElementById("bear-print");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/

