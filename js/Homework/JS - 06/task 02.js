const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientContainer = document.querySelector("ul");

const createUl = ingredients.map((ingridient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingridient;

  console.log(liEl);
  return liEl;
});

ingridientContainer.append(...createUl);

console.log(createUl);
