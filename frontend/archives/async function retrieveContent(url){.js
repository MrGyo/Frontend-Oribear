async function retrieveContent(url){
    let result = await fetch(url).then(response => {
        return response.json()
    }).catch(error => { return [] })
    return result;
}

retrieveContent(url).then(teddies => {
    teddies.forEach(teddy => {
        let container = document.getElementById("articles-container");
        container.innerHTML += createArticleHtml(teddy);
    });
    if (teddies.length===0) {
      throw 'erreur pas de teddy';
    }
}).catch(error => { console.log(error); });