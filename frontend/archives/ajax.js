function ajaxPost(url, data, callback) {
    var req = new XMLHttpRequest();
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.open("POST", url);
    req.setRequestHeader('Content-Type', 'application/json')    
    req.send(JSON.stringify(data));
}

