// console.log('Workout. DOM and Events')
// !Task 1
const actions = document.querySelectorAll(".js-action button");
// console.log(actions[1].dataset.action)
// !Task 2
const magicBtn = document.querySelector(".btn-task-two");

magicBtn.addEventListener("click", () => {
  const inputEl = document.querySelector(".js-task-two");
  console.log(inputEl.value);
  inputEl.value = "Вставочка";
});
// !Task 3
const magicButtonThree = document.querySelector(".btn-task-three");
magicButtonThree.addEventListener("click", () => {
  const navEl = document.querySelector(".task-three-site-nav");
  navEl.classList.toggle("addition");
  console.log(navEl);
});
const currentPageUrl = "/portfolio";
const taskThreeLinkEl = document.querySelector(
  `.task-three-site-nav__link[href="${currentPageUrl}"]`
);
// console.log(taskThreeLinkEl)
taskThreeLinkEl.classList.add("task-three-site-nav__link--current");

// !Task 4
const taskFourNavEl = document.querySelector(".task-four-site-nav");
// console.log(taskFourNavEl)
const taskFourFirstElement = taskFourNavEl.firstElementChild;
// console.log(taskFourFirstElement)
// console.log(taskFourNavEl.children)

// !Task 5
const taskFiveAbzats = document.querySelector(".task-five");

const taskFiveTitleEl = document.createElement("h1");
taskFiveTitleEl.classList.add("task-tittle");
taskFiveTitleEl.style.color = "teal";
taskFiveTitleEl.style.fontSize = "32px";
taskFiveTitleEl.textContent = "Такий собі заголовок";
// console.log(taskFiveTitleEl)

taskFiveAbzats.appendChild(taskFiveTitleEl);

// !Task 6
const taskSixNavItemEl = document.createElement("li");
taskSixNavItemEl.classList.add("task-six-nav__item");
const taskSixNavItemLink = document.createElement("a");
taskSixNavItemLink.classList.add("task-six-nav__link");
taskSixNavItemLink.textContent = "Особистий кабінет";
taskSixNavItemLink.href = "./profile";

taskSixNavItemEl.append(taskSixNavItemLink);

const taskSixNavEl = document.querySelector(".task-six-site-nav");

// taskSixNavEl.appendChild(taskSixNavItemEl)
taskSixNavEl.insertBefore(taskSixNavItemEl, taskSixNavEl.lastElementChild);

// !Task 7

const tSevenHeroEl = document.querySelector(".tseven-hero");

const tSevenTittle = document.createElement("h2");
tSevenTittle.textContent = "Колібрі";
tSevenTittle.style.color = "red";
const tSevenImg = document.createElement("img");
tSevenImg.src =
  "https://images.creativefabrica.com/products/thumbnails/2023/09/09/y40nhSuY5/2V9qG4stihxOcmCKK5TeYikshNV.jpeg";
tSevenImg.alt = "glacier";
tSevenImg.width = 320;

tSevenHeroEl.append(tSevenTittle, tSevenImg);

// !Task 8  - створення колекцій

const colorPickerOptions = [
  { label: "red", color: "#FF0000", bg: "yellow" },
  { label: "lime", color: "#00FF00", bg: "maroon" },
  { label: "blue", color: "#2196F3", bg: "pink" },
  { label: "maroon", color: "#800000", bg: "gold" },
  { label: "pink", color: "#FFC0CB", bg: "grey" },
  { label: "grey", color: "#607D8B", bg: "red" },
  { label: "indigo", color: "#3F51B5", bg: "lime" },
  { label: "green", color: "#008000", bg: "orange" },
  { label: "salmon", color: "#FA8072", bg: "indigo" },
];

const colorPickerContainerEl = document.querySelector(".js-color-picker");

//  ---------- map ------------------

//   const elements = colorPickerOptions.map((option) => {
//     const buttonEl = document.createElement("button");
//     buttonEl.type = "button";
//     buttonEl.classList.add("color-picker__option");
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     buttonEl.style.color = option.bg;

//     return buttonEl;
//   });

//  colorPickerContainerEl.append(...elements);

// ---------- for ------------------

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i]
//     const buttonEl = document.createElement('button')
//     buttonEl.type = 'button'
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label
//     buttonEl.style.backgroundColor = option.color

//     elements.push(buttonEl)

// }
//   console.dir(elements);

const makeColorPickerOptions = (options) => {
  return options.map((option) => {
    const buttonEl = document.createElement("button");
    buttonEl.type = "button";
    buttonEl.classList.add("color-picker__option");
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;
    buttonEl.style.color = option.bg;

    return buttonEl;
  });
};

const tEightElements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...tEightElements);

// !Task 9 Сервоприводи
// !Task 10
