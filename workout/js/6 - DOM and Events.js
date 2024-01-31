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

 const products = [{
  name: 'Сервоприводы',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2000,
  available: true,
  onSale: true,
},
{
  name: 'Генератор поля',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 3000,
  available: false,
  onSale: false,
},
{
  name: 'Нулевой элемент',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 1500,
  available: true,
  onSale: false,
},
{
  name: 'Титаниум',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2500,
  available: false,
  onSale: false,
},
];



const productsContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');
  nameEl.style.color = 'darkgreen'

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');
  descrEl.style.color = 'green'
  descrEl.style.fontWeight = 700

  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');
  priceEl.style.color = 'darkgreen'
  priceEl.style.fontWeight = 700

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

// console.log(makeProductCard(products))

const elements = products.map(makeProductCard);

// console.log(elements);
productsContainerEl.append(...elements);

// !Task 10
const titleEl = document.querySelector('.tten-title');
// console.log(titleEl.textContent)
// console.log(titleEl.innerHTML)
// titleEl.innerHTML = '<a href="">Это ссылка)</a>';
// titleEl.innerHTML = '';


titleEl.insertAdjacentHTML(
  'beforeend',
  '<a href="" class="title__link">Це посилання)</a>',
);


// !Task 11
const transactionHistory = [
  {
    id: '758d5283-358e-4fbb-b222-a17fd04e8916',
    amount: '179.07',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Bogan - DuBuque',
    name: 'Auto Loan Account 7313',
    type: 'deposit',
    account: '19808943',
  },
  {
    id: 'f0463ec4-7104-4adb-a41c-b1c7549055f8',
    amount: '930.87',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Legros, Weimann and Treutel',
    name: 'Auto Loan Account 0721',
    type: 'invoice',
    account: '38277848',
  },
  {
    id: '6c0e5a78-ad9f-46af-8299-44b77f5099d5',
    amount: '704.53',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Beatty, Wisozk and Koch',
    name: 'Savings Account 1894',
    type: 'withdrawal',
    account: '76727204',
  },
  {
    id: '16bd2a9d-7b0e-418f-a75c-7076e8ab6175',
    amount: '656.81',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Hane - Bode',
    name: 'Personal Loan Account 2316',
    type: 'withdrawal',
    account: '27462350',
  },
  {
    id: 'd328680d-4aa5-40ee-912b-9b5149b602e6',
    amount: '280.21',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Schulist - Waelchi',
    name: 'Savings Account 9032',
    type: 'payment',
    account: '99923313',
  },
  {
    id: 'e51fb348-8523-4e39-915f-39687ca4eebf',
    amount: '303.06',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Swaniawski - Hayes',
    name: 'Checking Account 0573',
    type: 'invoice',
    account: '75028346',
  },
  {
    id: 'cd727197-5ffb-45a7-9bf5-9d08092a1cce',
    amount: '462.59',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Berge - Reinger',
    name: 'Personal Loan Account 8173',
    type: 'invoice',
    account: '93437240',
  },
  {
    id: '247e150a-71ba-4df7-9836-5bb400e012bb',
    amount: '242.49',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Stroman Inc',
    name: 'Savings Account 1383',
    type: 'withdrawal',
    account: '18476423',
  },
  {
    id: '6224c740-ff23-429d-854a-c7b310f7653b',
    amount: '770.94',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Johns - Pagac',
    name: 'Auto Loan Account 1392',
    type: 'invoice',
    account: '07680863',
  },
  {
    id: '79ccb1dd-6544-47cc-9a40-ea453985a748',
    amount: '788.40',
    date: '2012-02-01T22:00:00.000Z',
    business: 'Ullrich, Shields and Koelpin',
    name: 'Personal Loan Account 8318',
    type: 'invoice',
    account: '07081761',
  },
];


const makeTransactionTableRowMarkup = transaction => {
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
const tableEl = document.querySelector('.js-transaction-table');
const transactionTableRowsMarkup = transactionHistory
  .map(makeTransactionTableRowMarkup)
  .join('');

tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);

// console.log(transactionTableRowsMarkup);