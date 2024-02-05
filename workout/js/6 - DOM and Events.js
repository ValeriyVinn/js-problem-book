// !Task 1

const tOneMagicBtn = document.querySelector(".js-magic-btn");

const navEl = document.querySelector(".site-nav");
console.log("navEl", navEl);
console.dir(navEl);

const navLinksEl = document.querySelectorAll(".site-nav__link");
console.log("navLinksEl", navLinksEl);
console.dir(navLinksEl);

// const navElAll = navEl.querySelectorAll('.site-nav__link');
// console.log('navElAll', navElAll);
// console.dir(navElAll);
/*
 * Document.querySelector* и Element.querySelector*
 */
console.log("Document", document);
console.dir(document);

tOneMagicBtn.addEventListener("click", () => {
  navLinksEl[0].textContent = "Наши партнери";
  navLinksEl[1].textContent = "Спільні проекти";
  navLinksEl[2].textContent = "Взяти участь";
});

// !Task 2
/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

const tTwoAmagicBtn = document.querySelector(".tTwoAactions");
const imageEl = document.querySelector(".hero__image");
// console.log('imageEl', imageEl);
const heroTitleEl = document.querySelector(".hero__title");
// console.log('heroTitleEl', heroTitleEl);

const tTwoActions = document.querySelectorAll(".js-actions button");
// console.log('actions', actions)
// console.log(actions[2].dataset.action);

tTwoAmagicBtn.addEventListener("click", () => {
  imageEl.src =
    "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480";

  imageEl.alt = "Это новый котик";
  heroTitleEl.textContent = "Я солоденька цукерочка!";
});

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибуты
 */
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions);
// console.log(actions[2].dataset.action);

const tTwoAactions = document.querySelectorAll(".js-action button");
// console.log(tTwoAactions[1].dataset.action);

// Я та мої друзі

// Цей код є фрагментом JavaScript і використовує API Document Object Model (DOM) для взаємодії з HTML-розміткою. Давайте розглянемо його по кроках:
// 1. `const controls = document.querySelector(".controls");`: Знаходить елемент HTML з класом "controls" і зберігає його в змінну `controls`.
// 2. `controls.addEventListener("click", (e) => {`: Додає обробник подій до елемента з класом "controls". Обробник викликається при кліку на елемент.
// 3. `if (e.target === e.currentTarget) { return; }`: Перевіряє, чи клікнуто саме на елемент "controls", а не на його дочірній елемент. Якщо так, то обробник просто завершує виконання, інакше він продовжує.
// 4. `const prevActivePane = document.querySelector(".pane.is-active");`: Знаходить елемент з класом "pane" і "is-active", який є активним на даний момент, і зберігає його в змінну `prevActivePane`.
// 5. `if (prevActivePane) { prevActivePane.classList.remove("is-active"); }`: Якщо знайдено попередній активний елемент, то відмічає його як неактивний, видаляючи клас "is-active".
// 6. `const paneId = e.target.dataset.id;`: Отримує значення атрибута "data-id" елемента, на який було натискано, і зберігає його в змінну `paneId`.
// 7. `const nextActivePane = document.querySelector("#" + paneId);`: Знаходить елемент з ідентифікатором, отриманим з атрибута "data-id", і зберігає його в змінну `nextActivePane`.
// 8. `nextActivePane.classList.add("is-active");`: Додає клас "is-active" до нового активного елемента, зробивши його видимим чи відзначеним.
// Отже, цей код призначений для обробки кліків на елементах з класом "controls". Він визначає активний елемент, видаляє його активний стан, а потім визначає новий активний елемент і встановлює йому активний стан.



const controls = document.querySelector(".controls");

controls.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    return;
  }

  const prevActivePane = document.querySelector(".pane.is-active");
  if (prevActivePane) {
    prevActivePane.classList.remove("is-active");
  }

  const paneId = e.target.dataset.id;
  const nextActivePane = document.querySelector(`#${paneId}`);
  nextActivePane.classList.add("is-active");
});

// !Task 2-1
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
  { label: "lime", color: "#00FF00", bg: "green" },
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

const products = [
  {
    name: "Сервоприводы",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2000,
    available: true,
    onSale: true,
  },
  {
    name: "Генератор поля",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 3000,
    available: false,
    onSale: false,
  },
  {
    name: "Нулевой элемент",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 1500,
    available: true,
    onSale: false,
  },
  {
    name: "Титаниум",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",
    price: 2500,
    available: false,
    onSale: false,
  },
];

const productsContainerEl = document.querySelector(".js-products");

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement("article");
  productEl.classList.add("product");

  const nameEl = document.createElement("h2");
  nameEl.textContent = name;
  nameEl.classList.add("product__name");
  nameEl.style.color = "darkgreen";

  const descrEl = document.createElement("p");
  descrEl.textContent = description;
  descrEl.classList.add("product__descr");
  descrEl.style.color = "green";
  descrEl.style.fontWeight = 700;

  const priceEl = document.createElement("p");
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add("product__price");
  priceEl.style.color = "darkgreen";
  priceEl.style.fontWeight = 700;

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// console.log(makeProductCard(products))

const elements = products.map(makeProductCard);

// console.log(elements);
productsContainerEl.append(...elements);

// !Task 10
const titleEl = document.querySelector(".tten-title");
// console.log(titleEl.textContent)
// console.log(titleEl.innerHTML)
// titleEl.innerHTML = '<a href="">Это ссылка)</a>';
// titleEl.innerHTML = '';

titleEl.insertAdjacentHTML(
  "beforeend",
  '<a href="" class="title__link">Це посилання)</a>'
);

// !Task 11
const transactionHistory = [
  {
    id: "758d5283-358e-4fbb-b222-a17fd04e8916",
    amount: "179.07",
    date: "2012-02-01T22:00:00.000Z",
    business: "Bogan - DuBuque",
    name: "Auto Loan Account 7313",
    type: "deposit",
    account: "19808943",
  },
  {
    id: "f0463ec4-7104-4adb-a41c-b1c7549055f8",
    amount: "930.87",
    date: "2012-02-01T22:00:00.000Z",
    business: "Legros, Weimann and Treutel",
    name: "Auto Loan Account 0721",
    type: "invoice",
    account: "38277848",
  },
  {
    id: "6c0e5a78-ad9f-46af-8299-44b77f5099d5",
    amount: "704.53",
    date: "2012-02-01T22:00:00.000Z",
    business: "Beatty, Wisozk and Koch",
    name: "Savings Account 1894",
    type: "withdrawal",
    account: "76727204",
  },
  {
    id: "16bd2a9d-7b0e-418f-a75c-7076e8ab6175",
    amount: "656.81",
    date: "2012-02-01T22:00:00.000Z",
    business: "Hane - Bode",
    name: "Personal Loan Account 2316",
    type: "withdrawal",
    account: "27462350",
  },
  {
    id: "d328680d-4aa5-40ee-912b-9b5149b602e6",
    amount: "280.21",
    date: "2012-02-01T22:00:00.000Z",
    business: "Schulist - Waelchi",
    name: "Savings Account 9032",
    type: "payment",
    account: "99923313",
  },
  {
    id: "e51fb348-8523-4e39-915f-39687ca4eebf",
    amount: "303.06",
    date: "2012-02-01T22:00:00.000Z",
    business: "Swaniawski - Hayes",
    name: "Checking Account 0573",
    type: "invoice",
    account: "75028346",
  },
  {
    id: "cd727197-5ffb-45a7-9bf5-9d08092a1cce",
    amount: "462.59",
    date: "2012-02-01T22:00:00.000Z",
    business: "Berge - Reinger",
    name: "Personal Loan Account 8173",
    type: "invoice",
    account: "93437240",
  },
  {
    id: "247e150a-71ba-4df7-9836-5bb400e012bb",
    amount: "242.49",
    date: "2012-02-01T22:00:00.000Z",
    business: "Stroman Inc",
    name: "Savings Account 1383",
    type: "withdrawal",
    account: "18476423",
  },
  {
    id: "6224c740-ff23-429d-854a-c7b310f7653b",
    amount: "770.94",
    date: "2012-02-01T22:00:00.000Z",
    business: "Johns - Pagac",
    name: "Auto Loan Account 1392",
    type: "invoice",
    account: "07680863",
  },
  {
    id: "79ccb1dd-6544-47cc-9a40-ea453985a748",
    amount: "788.40",
    date: "2012-02-01T22:00:00.000Z",
    business: "Ullrich, Shields and Koelpin",
    name: "Personal Loan Account 8318",
    type: "invoice",
    account: "07081761",
  },
];

const makeTransactionTableRowMarkup = (transaction) => {
  const { id, amount, date, business, type, name, account } = transaction;

  return `
  <tr>
    <td>${id}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td>${business}</td>
    <td>${type}</td>
    <td>${name}</td>
    <td>${account}</td>
  </tr>
  `;
};

// console.log(transactionHistory);
const tableEl = document.querySelector(".js-transaction-table");
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join("");

tableEl.insertAdjacentHTML("beforeend", transactionTableRowsMarkup);

// console.log(transactionTableRowsMarkup);

// !Task 12
const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

addListenerBtn.addEventListener("click", () => {
  console.log("Вішаю слухача");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

removeListenerBtn.addEventListener("click", () => {
  console.log("Знімаю слухача");
  targetBtn.removeEventListener("click", onTargetBtnClick);
  targetBtn.textContent = "Цільова кнопочка";
  targetBtn.style.color = "red";
});

function onTargetBtnClick() {
  console.log("I`m listening");
  targetBtn.textContent = "Слухаю Вас";
  targetBtn.style.color = "green";
}

// !Task 13

const form = document.querySelector(".js-register-form");
// console.log(form)

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });
}

// !Task 14
const tFourteenRefs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

tFourteenRefs.input.addEventListener("focus", onInputFocus);
tFourteenRefs.input.addEventListener("blur", onInputBlur);

tFourteenRefs.input.addEventListener("input", onInputChange);
tFourteenRefs.licenseCheckbox.addEventListener("change", onLicenseChange);

function onInputFocus() {
  console.log("Инпут получил фокус - событие focus");
}

function onInputBlur() {
  console.log("Инпут потерял фокус - событие blur");
}

function onInputChange(event) {
  tFourteenRefs.nameLabel.textContent = event.currentTarget.value;
  // console.log(event.currentTarget.value)
}

function onLicenseChange(event) {
  tFourteenRefs.btn.disabled = !event.currentTarget.checked;
  // console.log(event.currentTarget.checked)
}

// console.log(refs.btn.disabled)

// !Task 15
/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const tFifteenRefs = {
  output: document.querySelector(".js-output"),
  clearBtn: document.querySelector(".js-clear"),
};

window.addEventListener("keypress", onKeypress);
tFifteenRefs.clearBtn.addEventListener("click", onClearOutput);

function onKeypress(event) {
  // console.log('event: ', event);
  console.log("event.key: ", event.key);
  console.log("event.code: ", event.code);

  tFifteenRefs.output.textContent += event.key;
}

function onClearOutput() {
  tFifteenRefs.output.textContent = "";
}

// !Task 16
/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector(".js-box");

// boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mouseover', onMouseEnter);
// boxRef.addEventListener('mouseout', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add("box--active");
}

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove("box--active");
}

function onMouseMove(event) {
  console.log(event);
}

// !Task 17

/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector(".js-backdrop"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModalBtn.addEventListener("click", onCloseModal);
refs.backdrop.addEventListener("click", onBackdropClick);

function onOpenModal() {
  window.addEventListener("keydown", onEscKeyPress);
  document.body.classList.add("show-modal");
}

function onCloseModal() {
  window.removeEventListener("keydown", onEscKeyPress);
  document.body.classList.remove("show-modal");
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    // console.log('Кликнули именно в бекдроп!!!!');
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  // console.log(event.code)
  const ESC_KEY_CODE = "Escape";
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    onCloseModal();
  }
}
