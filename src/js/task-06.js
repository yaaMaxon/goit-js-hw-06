// Напиши скрипт, який під час втрати фокусу на 
// інпуті (подія blur), перевіряє його вміст щодо 
// правильної кількості введених символів.
// * Яка кількість символів повинна бути в інпуті, 
// зазначається в його атрибуті data-length.
// * Якщо введена правильна кількість символів, 
// то border інпуту стає зеленим, якщо неправильна 
// кількість - червоним.
// Для додавання стилів використовуй CSS-класи 
// valid і invalid, які ми вже додали у вихідні файли завдання.

const input = document.getElementById('validation-input');

input.addEventListener('blur', onInput);

function onInput(e) {
const length = e.target.value.length;

if(length === Number(input.dataset.length)){
    input.classList.add('valid');
    input.classList.remove('invalid');
    
} else {
    input.classList.add('invalid');
    input.classList.remove('valid');
    
}
}
