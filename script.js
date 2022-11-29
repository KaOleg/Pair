const pairNumber = 8;
function flipCard(event) {
    if (event.target.tagName == "IMG") {
        let card = event.target.parentElement;
        card.classList.add("flip");
        if (firstCard == null) {
            firstCard = card;
            firstCard.removeEventListener("click", flipCard);
            return;
        } else {
            secondCard = card;
            secondCard.removeEventListener("click", flipCard);
        }
        if (firstCard.dataset.pair == secondCard.dataset.pair) {
            resetBoard();
        } else {
            unflipCards();
        }
        console.log(card.dataset.pair);
    }
}
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1000);
}
function resetBoard() {
    firstCard.addEventListener("click", flipCard);
    secondCard.addEventListener("click", flipCard);
    firstCard = null;
    secondCard = null;
}
let firstCard = null;
let secondCard = null;
const widthPerc = 100 / ((pairNumber * 2 + 2) / 3);
let game = document.querySelector(".game");
for (let i = 1; i < pairNumber + 1; i++) {
    for (let g = 0; g < 2; g++) {
        let card = document.createElement("div");
        card.classList.add("card");
        let front = document.createElement("img");
        front.classList.add("frontface");
        front.setAttribute("src", "images/" + i + ".svg");
        let back = document.createElement("img");
        back.classList.add("backface");
        back.setAttribute("src", "images/back.svg");
        card.style.width = "calc(" + widthPerc + "% - 10px)";
        card.style.order = getRandomNumber(0, 16);
        card.setAttribute("data-pair", i);
        card.appendChild(front);
        card.appendChild(back);
        game.appendChild(card);
    }
}
let cards = document.querySelectorAll(".card");
// console.log(cards)
cards.forEach((card) => {
    card.addEventListener("click", flipCard);
});
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let newGame = document.querySelector("newGameBtn")




// При клике на newGameBtn (используй addEventListener) надо у каждой карточки (forEach), убрать класс flip, а также перемешать их снова (через order) и сбросить руку человека.
// .forEach( () => {}   ) - это функция высшего порядка, которая получает в себя другую функцию. Она есть у всех массивоподобных элементов.
// Стрелочная функция - это та же самая функция, но записана по другому: function() { }  ---> () => {}
// data-аттрибуты - это дополнительные аттрибуты для html-тэгов. В них мы можем что-то дополнительно записать
