// ajout produit page html products

var button = document.getElementById("btn");

button.addEventListener("click", function(event) {
    var addArticle = document.querySelector(".section__products__article");
    var parentDivArticle = document.getElementById("parent-article-div");
    var cln = addArticle.cloneNode(true);
    parentDivArticle.appendChild(cln);
    }
); 

