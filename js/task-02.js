const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector('#ingredients');

// console.log(ingredientsEl);

// ingredients.forEach(item => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.classList = 'item';
//   ingredientItem.textContent = item;
//   ingredientsEl.append(ingredientItem);
// });


const indigredientsElenents = ingredients.map(item => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList = 'item';
  ingredientItem.textContent = item;
  return ingredientItem;
})

ingredientsEl.append(...indigredientsElenents);
