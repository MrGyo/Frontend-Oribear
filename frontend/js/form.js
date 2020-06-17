//--- Contrôle des données du formulaire --//

function checkForm(){
    if  (!checkFieldIdentity("lastname", "Saisissez un nom valide ! :)" ) ) return false; 
    if  (!checkFieldIdentity("firstname", "Saisissez un prénom valide ! :)" ) ) return false; 
    if  (!checkFieldEmail("email", "Saisissez un email valide ! :)" ) ) return false; 
    if  (!checkFieldAddress("address", "Saisissez votre adresse ! :)" ) ) return false; 
    if  (!checkFieldAddress("city", "Saisissez votre ville ! :)" ) ) return false; 
    if  (!checkFieldZipCode("zipcode", "Saisissez un code postal valide ! :)" ) ) return false; 
    return true; 
}

function checkFieldIdentity(id, textErreur){
    let fieldToControl = document.getElementById(id).value;
    let regexFieldToControl =  /^[A-Za-zéèàêë-]+$/;
    if (!regexFieldToControl .test(fieldToControl) || fieldToControl.length <= 1) {
        Swal.fire("Oops", textErreur, "error");
        return false;
    }
    return true;
}

function checkFieldEmail(id, textErreur){
    let emailToControl = document.getElementById(id).value;
    let regexEmailToControl = /.+@.+\..+/;
    if (!regexEmailToControl.test(emailToControl)) {
        Swal.fire("Oops", textErreur, "error");
        return false;
    }
    return true;
}

function checkFieldAddress(id, textErreur){
    let addressToControl = document.getElementById(id).value;
    if (addressToControl == "") {
        Swal.fire("Oops", textErreur, "error");
        return false;
    }
    return true;
}

function checkFieldZipCode(id, textErreur){
    let zipCodeToControl = document.getElementById(id).value;
    let regexZipCodeToControl = /^[0-9]*$/;
    if (!regexZipCodeToControl.test(zipCodeToControl) || zipCodeToControl.length < 5 || zipCodeToControl.length > 5) {
        Swal.fire("Oops", textErreur, "error");
        return false;
    }
    return true;
}




