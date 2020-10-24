// ajout produit page html products

var button = document.getElementById("btn");
button.addEventListener("click", addingArticle)

function addingArticle() {
    var addArticle = document.querySelector(".section__products__article");
    var parentDivArticle = document.getElementById("parent-article-div");
    var cln = addArticle.cloneNode(true);
    parentDivArticle.appendChild(cln);
};

var buttonRemove = document.getElementById("btn-remove");
buttonRemove.addEventListener("click", removingArticle)


function removingArticle() {
    var select = document.getElementById("parent-article-div");
    select.removeChild(select.lastElementChild);
}


