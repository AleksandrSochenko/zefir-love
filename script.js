"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Хех еще бы бооууужжж. Приглашаю тебя на свидание май бьютифал флаве 💕";
  titleElement.insertAdjacentHTML("beforeend", "<br> День: 14 фебруари ❣️");
  titleElement.insertAdjacentHTML("beforeend", "<br> Время: время любви 💕");
  titleElement.insertAdjacentHTML("beforeend", "<br> Дресс-код: ты прекрасна во всем 💏");
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 3;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "НЕЕЕЕТТТ",
    "Умг пук тт-ты уверен?",
    "НОУ",
    "Ну все нарофлилась и хватит",
    "Ну теперь точно жми ДА!!!",
    "ДА, но красная.",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}
