function showhide(){
    let compteurarticle=document.getElementsByTagName('article')
    if(compteurarticle.length==0){
        var article=document.createElement('article')
        article.innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article)
        return
    }
    if(compteurarticle.length==1){
        var article=document.getElementsByTagName("article")[0]
        article.remove()
        return

    }
}