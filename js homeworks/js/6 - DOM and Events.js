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

const imagesMarkup = images
  .map(
    ({ url, alt }) =>
      `<li><img src="${url}" alt="${alt}" width=300 height=200></li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("afterbegin", imagesMarkup);

// const mU = images.reduce((acc, images) => acc.concat(`<li><img src="${images.url}" alt="${images.alt}" width=300 height=200></li>`),[]).join('')
// galleryRef.insertAdjacentHTML('afterbegin', mU)

// ! Task 4 ---------------

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById("value");

let value = 0;

decrementEl.addEventListener("click", decrease);
incrementEl.addEventListener("click", increase);

function decrease(event) {
  value -= 1;
  valueEl.textContent = value;
}

function increase(event) {
  value += 1;
  valueEl.textContent = value;
}

// ! Task 5 ---------------

const inputEl = document.getElementById("name-input");
const spanEl = document.getElementById("name-output");

// inputEl.addEventListener("input", (e) => {
//   spanEl.textContent = e.currentTarget.value.trim() || "Anonymous";
// });

inputEl.addEventListener("input", (e) => {
  spanEl.textContent = e.currentTarget.value.trim();
  if (spanEl.textContent === "") {
    spanEl.textContent = "Anonymous";
  }
});

// ! Task 6 ---------------
const inputElem = document.getElementById("validation-input");

inputElem.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const total = event.currentTarget.value.length;

  if (Number(inputElem.dataset.length) !== total) {
    inputElem.classList.add("invalid");
    inputElem.classList.remove("valid");

    return;
  }
  inputElem.classList.add("valid");
  inputElem.classList.remove("invalid");
}

// 2 рішення

// inputElem.addEventListener("blur", (evt) => {
//   inputElem.classList.toggle("valid", evt.target.value.length === Number(inputElem.dataset.length));
//   inputElem.classList.toggle("invalid", evt.target.value.length !== Number(inputElem.dataset.length));
// });

// ! Task 7 ---------------

const inputRangeEl = document.getElementById("font-size-control");
const spanAbracadabra = document.getElementById("text");

spanAbracadabra.style.fontSize = inputRangeEl.value + "px";

inputRangeEl.addEventListener("input", toChangeSpan);

function toChangeSpan() {
  spanAbracadabra.style.fontSize = `${inputRangeEl.value}px`;
}

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

const buttonChangeColor = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");

buttonChangeColor.addEventListener("click", changeBGC);

function changeBGC() {
  const randomizator = getRandomHexColor();
  spanChangeColor.textContent = randomizator;
  buttonChangeColor.style.backgroundColor = randomizator;
}

// ! Task 10 ---------------

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

buttonCreate.addEventListener("click", () => {
  let numberBoxs = Number(inputNumber.value);
  if (numberBoxs > inputNumber.getAttribute("max")) {
    numberBoxs = inputNumber.getAttribute("max");
    inputNumber.value = inputNumber.getAttribute("max");
  }
  createBoxes(numberBoxs);
});

buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let sizeDivBox = 30;
  const divBoxElem = [];
  for (let i = 0; i < amount; i += 1) {
    let divColor = getRandomHexColor();
    divBoxElem.push(
      `<div style ="background-color:${divColor}; width:${sizeDivBox}px; height:${sizeDivBox}px;"></div>`
    );
    sizeDivBox += 10;
  }
  divBoxes.insertAdjacentHTML("beforeend", divBoxElem.join(""));
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}




