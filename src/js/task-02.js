// Напиши скрипт, який для кожного елемента масиву ingredients:

// * Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// * Додасть назву інгредієнта як його текстовий вміст.
// * Додасть елементу клас item.
// * Після чого, вставить усі <li> за одну операцію у 
// список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const li = document.createElement('li');
  li.className = 'item';
  li.textContent = ingredient;
  list.append(li);

  console.dir(li);
}



console.dir(list);