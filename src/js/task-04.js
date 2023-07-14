// * Створи змінну counterValue, в якій буде зберігатися 
// поточне значення лічильника та ініціалізуй її значенням 0.
// * Додай слухачів кліків до кнопок, всередині яких збільшуй 
// або зменшуй значення лічильника.
// * Оновлюй інтерфейс новим значенням змінної counterValue.

const value = document.getElementById('value');
const minusValue = document.querySelector('[data-action="decrement"]');
const addValue = document.querySelector('[data-action="increment"]');
let counterValue = 0;

addValue.addEventListener('click', addBtn);
minusValue.addEventListener('click', minusBtn);

function addBtn() {
    counterValue += 1;
    value.textContent = `${counterValue}`;
}

function minusBtn() {
   counterValue -= 1;
   value.textContent = `${counterValue}`;
}

console.dir(value);
console.dir(counterValue);