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
  const result = array.map((el) => {
    console.log(el);
  });
};

// console.log(getVerbsInColumn("abandon, abate, abbreviate, abide, absorb, accelerate, accept, accompany, accomplish"))

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingridientContainer = document.querySelector("#ingredients");

const createUl = ingredients.map((ingridient) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingridient;

  console.log(liEl);
  return liEl;
});

ingridientContainer.append(...createUl);

console.log(createUl);

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

const gallery = document.querySelector(".gallery");

const galleryMarkup = images.reduce(
  (acc, { alt, url }) =>
    (acc += `<li><img src="${url}" alt="${alt}" width = "300" height = "auto"></li>`),
  []
);

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

let counterValue = 0;

const btnDecrement = document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue -= 1;
    targetValue.textContent = counterValue;
    // console.log(counterValue);
  });

const btnIncrement = document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue += 1;
    targetValue.textContent = counterValue;
    // console.log(counterValue);
  });

const targetValue = document.querySelector("#value");

const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", () => {
  span.textContent = input.value.trim() || "Anonimous";
});

const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);
function onInputBlur(event) {
  const total = event.currentTarget.value.length;
  if (Number(inputEl.dataset.length) !== total) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    return;
  }
  inputEl.classList.add("valid");
  inputEl.classList.remove("invalid");
}

const i = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

textToChange.style.fontSize = i.value + "px";

i.addEventListener("input", (event) => {
  textToChange.style.fontSize = `${i.value}px`;
});

const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };

  if (mail === "") {
    alert("Email fields should not be empty");
  } else if (password === "") {
    alert("Password fields should not be empty");
  } else {
    alert("This form has been successfully submitted!");
    console.log(formData);
  }
  loginForm.reset();
}

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const button = document.querySelector(".change-color");
// const sp = document.querySelector(".color");

// button.addEventListener("click", changeBGC);

// function changeBGC() {
//   const randomizator = getRandomHexColor();
//   sp.textContent = `${randomizator}`;
//   document.body.style.backgroundColor = randomizator;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.background = getRandomHexColor();
    document.querySelector("#boxes").appendChild(div);
  }
}

function destroyBoxes() {
  let boxes = document.querySelector("#boxes");
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

const controls = document.querySelector("#controls");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const inp = controls.querySelector(".inp");

createButton.addEventListener("click", () => {
  createBoxes(inp.value);
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
