// easter

const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    document.body.style.backgroundImage = "url(https://i.imgur.com/EaaHUWF.jpg)";
});


var randomAdvantage = document.getElementById("section__why__random-advantage");
randomAdvantage.addEventListener("click", randomA);

// function list of advantages

function randomA () {
    var randomNumber = rand(1, 10);
    switch (randomNumber) {
        case 1:
            randomAdvantage.innerHTML = "Honneur";
        break;
        case 2:
            randomAdvantage.innerHTML = "Capiteux";
        break;
        case 3:
            randomAdvantage.innerHTML = "Goutu";
        break;
        case 4:
            randomAdvantage.innerHTML = "Délicieux";
        break;
        case 5:
            randomAdvantage.innerHTML = "Incomparable";
        break;
        case 6:
            randomAdvantage.innerHTML = "Gustatif";
        break;
        case 7:
            randomAdvantage.innerHTML = "Aromatique";
        break;
        case 8:
            randomAdvantage.innerHTML = "Fugace";
        break;
        case 9:
            randomAdvantage.innerHTML = "Agréable";
        break;
        case 10:
            randomAdvantage.innerHTML = "Poivré";
        break;
    }
}

// rand function

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


