// ajout produit page html products

const button = document.getElementById("btn-add");
const article = document.querySelector(".section__products__article");
const parentDivArticle = document.getElementById("parent-article-div");
button.addEventListener("click", addingArticle)


let countArticle = 4;

function addingArticle() {
    if (countArticle === 0) {
        const cln = article.cloneNode(true);
        parentDivArticle.appendChild(cln);
        const lastCln = parentDivArticle.lastChild;
        lastCln.classList.remove('hidden-article');
        countArticle++
        return;
    }
   
    const cln = article.cloneNode(true);
    parentDivArticle.appendChild(cln);
    const lastCln = parentDivArticle.lastChild;
    lastCln.classList.remove('hidden-article');
    countArticle++;
    console.log(countArticle);
};

var buttonRemove = document.getElementById("btn-remove");
buttonRemove.addEventListener("click", removingArticle)


function removingArticle() {
    if (countArticle === 0) {
        return;
    }
    parentDivArticle.removeChild(parentDivArticle.lastElementChild);
    countArticle--;
    console.log(countArticle);
}


