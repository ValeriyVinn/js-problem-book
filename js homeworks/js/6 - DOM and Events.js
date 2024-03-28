// ?------- 6 homework -- write here -------
// ! Task 1 ---------------

// const liEl = document.querySelectorAll('.item')

// console.log("Number of categories", liEl.length)
// console.log("")
// liEl.forEach((el => {
//   console.log("Categories: ", el.firstElementChild.textContent)
//   console.log("Number of subcategories", el.lastElementChild.children.length)
//   console.log("")
// }))

// ! Task 2 ---------
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.getElementById("ingredients");

const markup = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("itemchick");
  return li;
});

ingredientsEl.append(...markup);

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

const galleryRef = document.querySelector(".gallery3");

const imagesMarkup = images.map(({url, alt}) => ( `<li><img src="${url}" alt="${alt}" width=300 height=200></li>`)

).join('')

galleryRef.insertAdjacentHTML("afterbegin", imagesMarkup)

// const mU = images.reduce((acc, images) => acc.concat(`<li><img src="${images.url}" alt="${images.alt}" width=300 height=200></li>`),[]).join('')
// galleryRef.insertAdjacentHTML('afterbegin', mU)

// ! Task 4 ---------------

// const decrementEl = document.querySelector('[data-action="decrement"]')
// const incrementEl = document.querySelector('[data-action="increment"]')
// const valueEl = document.getElementById('value')

// let value = 0

// decrementEl.addEventListener('click', decrease)
// incrementEl.addEventListener('click', increase)

// function decrease (event) {
// value -= 1
// valueEl.textContent = value
// }

// function increase (event) {
// value += 1
// valueEl.textContent = value
// }

// ! Task 5 ---------------

const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

// console.log(inputEl);
// console.log(spanEl);

inputEl.addEventListener("input", (e) => {
  console.log(e.currentTarget.value);
  spanEl.textContent = e.currentTarget.value.trim() || "Anonymous";
});

// ! Task 6 ---------------

// ! Task 7 ---------------

// ! Task 8 ---------------

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail === "") {
    alert("Email`s field should not be empty");
  } else if (password === "") {
    alert("Password`s field should not be empty");
  } else {
    alert("This form has been successfully submited");
    console.log(formData);
  }
  loginForm.reset();
});

// const loginForm = document.querySelector(".login-form");
// console.log(loginForm )

// loginForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
//   console.log(formElements);
// });

// ! Task 9 ---------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ! Task 10 ---------------
