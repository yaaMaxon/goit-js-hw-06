// Напиши скрипт, який змінює кольори фону елемента <body> 
// через інлайн-стиль по кліку на button.change-color і 
// виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй 
// функцію getRandomHexColor.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector('.change-color');
const color = document.querySelector('.color');

btn.addEventListener('click', bodyColor);

function bodyColor() {
let colors = getRandomHexColor();

document.body.style.backgroundColor = colors;
color.textContent = colors;

}

