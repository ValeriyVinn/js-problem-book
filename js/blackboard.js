// ! Color picker, Репета 6 - 11 1:32 - создание коллекций

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];
// !
const colorPickerContainerEl = document.querySelector(".js-color-picker");

const elements = colorPickerOptions.map((option) => {
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.classList.add("color-picker__option");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i]
//     const buttonEl = document.createElement('button')
//     buttonEl.type = 'button'
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label
//     buttonEl.style.backgroundColor = option.color

//     elements.push(buttonEl)

// }
console.dir(elements);

colorPickerContainerEl.append(...elements);

// !

const getVerbsInColumn = function (string) {
  const array = string.split(", ");
  console.log(array)
  const result = array.map((el) => {
    console.log(el);
  });
};

// console.log(getVerbsInColumn("abandon, abate, abbreviate, abide, absorb, accelerate, accept, accompany, accomplish"))


// ?------- 6 homework -- write here -------

// const liEl = document.querySelectorAll('.item')
// console.log('Quantity of category:', liEl.length)
// console.log('')
// liEl.forEach((el) => {
//   console.log('Name of category:', el.firstElementChild.textContent)
//   console.log('Quantity of subcategory:',el.lastElementChild.children.length)
//   console.log('')
// })



// ! Task 2 ---------
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


// const createList = ingredients.map((el) => {
//   const listEl = document.createElement('li')
//   const tittleEl = document.createElement('h3')

//   listEl.classList.add('itemchik')
//   tittleEl.textContent = el
//   listEl.append(tittleEl)

//   return listEl
// })

// const container = document.getElementById('ingredients').append(...createList)



// ! Task 2 ----------



// ! Task 3 -------------
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// img.classList.add('img-properties')
// ! Task 3 ---------------



// ?------- 7 homework -- write here -------


// ?------- 8 homework -- write here -------

// ?------- 9 homework -- write here -------

// ?------- 10 homework -- write here -------

// ?------- 11 homework -- write here -------

