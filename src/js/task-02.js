const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = ingredients.map(
  element => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    listItem.classList.add("item");
    return listItem;
  }
);

document.querySelector("#ingredients").append(...ingredientsList);