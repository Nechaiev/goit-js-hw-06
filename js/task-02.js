const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const liArray = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

list.append(...liArray)


// const list = document.querySelector('#ingredients')
// const liArray = []

// ingredients.forEach(ingredient => {
//   const item = document.createElement('li')
//   item.className = 'item'
//   item.textContent = ingredient
//   liArray.push(item)
// })

// list.append(...liArray)

