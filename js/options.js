/* Изменение ширины option */
function toggleWidth(element) {
    var currentActive = document.querySelector('.option.fixed-width');
    if (currentActive && currentActive !== element) {
        currentActive.classList.remove('fixed-width');
        let currentImgs = document.querySelectorAll('.option__img');
        currentImgs.forEach(img => img.classList.add('option__img-reverse'));
    }
    element.classList.toggle('fixed-width');
}

/* Карточки */
function flipCard(card) {
    if (!card.classList.contains('is-flipped')) {
        card.classList.toggle('is-flipped');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const card1 = document.getElementById('card1');
    timeoutID = setTimeout(() => {
        flipCard(card1);
    }, 2500);
});

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');

let timeoutID;

option1.addEventListener('click', () => {
    clearTimeout(timeoutID);
    card1.classList.add('show');
    card1.classList.remove('is-flipped');
    card2.classList.remove('show');
    card2.classList.remove('is-flipped');
    timeoutID = setTimeout(() => {
      flipCard(card1);
  }, 1500);
});

option2.addEventListener('click', () => {
    clearTimeout(timeoutID);
    card1.classList.remove('show');
    card2.classList.remove('is-flipped');
    card2.classList.add('show');
    card1.classList.remove('is-flipped');
    timeoutID = setTimeout(() => {
        flipCard(card2);
    }, 1500);
});