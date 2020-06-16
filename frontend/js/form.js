//--- Contrôle des données du formulaire --//

function checkForm(){
    
    let lastNameControl = document.getElementById("lastname").value;
    let regexLastName =  /^[A-Za-zéèàêë-]+$/;
    if (!regexLastName.test(lastNameControl) || lastNameControl.length <= 1) {
        Swal.fire("Oops", "Saisissez un nom valide ! :)", "error");
        return false;
    }

    let firstNameControl = document.getElementById("firstname").value;
    let regexFirstName =  /^[A-Za-zéèàêë-]+$/;
    if (!regexFirstName.test(firstNameControl) || firstNameControl.length <= 1) {
        Swal.fire("Oops", "Saisissez un prénom valide ! :)", "error");
        return false;
    }

    let regexCourriel = /.+@.+\..+/;
    if (!regexCourriel.test(document.getElementById("email").value)) {
        Swal.fire("Oops", "Saisissez un email valide ! :)", "error");
        return false;
    }

    let addressControl = document.getElementById("address").value;
    if (addressControl == "") {
        Swal.fire("Oops", "Saisissez votre adresse ! :)", "error");
        return false;
    }

    let zipCodeControl = document.getElementById("zipcode").value;
    let regexZipCode = /^[0-9]*$/;
    if (!regexZipCode.test(zipCodeControl) || zipCodeControl.length < 5 || zipCodeControl.length > 5) {
        Swal.fire("Oops", "Saisissez un code postal valide ! :)", "error");
        return false;
    }

    let cityControl = document.getElementById("city").value;
    if (cityControl == "") {
        Swal.fire("Oops", "Saisissez votre ville ! :)", "error");
        return false;
    }
    
    return true;
    
}


