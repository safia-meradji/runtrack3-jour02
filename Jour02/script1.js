var isVisible = false;

function showhide() {
    var content = document.getElementById("content");

    if (isVisible) {
        content.innerHTML = "";
        isVisible = false;
    } else {
        var article = document.createElement("article");
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        content.appendChild(article);
        isVisible = true;
    }
}
