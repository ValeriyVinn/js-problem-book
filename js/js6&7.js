// ?------- 6 homework -- write here -------
// ! Task 1 ---------------

// ! Task 2 ---------
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

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

// const toGetContainer = document.querySelector('.gallery3')
// console.log(toGetContainer)

// const markUp = images.map(({url, alt}) => {

// const objectItem = `<li><img src=${url} alt=${alt} width=300 height=200></>`

// return objectItem
// }).join('')

// toGetContainer.insertAdjacentHTML('afterbegin', markUp)

// ! Task 4 ---------------

const span = document.querySelector("#value");
console.log(typeof span.textContent);
let value = 0;
console.log(typeof value);
const increment = document
  .querySelector('[data-action="increment"]')
  .addEventListener("click", () => {
    value += 1;
    span.textContent = value;
  });

const decrement = document
  .querySelector('[data-action="decrement"]')
  .addEventListener("click", () => {
    value -= 1;
    span.textContent = String(value);
  });

// ! Task 5 ---------------

// ! Task 6 ---------------

// ! Task 7 ---------------

// ! Task 8 ---------------

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
    alert("Email`s field should not be empty");
  } else if (password === "") {
    alert("Password`s field should not be empty");
  } else {
    alert("This form has been successfully submited");
    console.log(formData);
  }
  loginForm.reset();
}

// console.log(loginForm)

// ! Task 9 ---------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ! Task 10 ---------------

// ?------- 7 homework -- write here -------

// ?------- 8 homework -- write here -------

// ?------- 9 homework -- write here -------

// ?------- 10 homework -- write here -------

// ?------- 11 homework -- write here -------

//  Контрольна 7  -----------------
//  Завдання 1 --------------------

// import { galleryItems } from "./gallery-items-hw-seven";

const galleryItems = [
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
    description: "Hokkaido Flower",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
  },
  {
    preview:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original:
      "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
  },
];

const galleryReference = document.querySelector(".gallery");

function createGallery(items) {
  items.map((item) => {
    const markup = `<div class="gallery__item">
                        <a class="gallery__link" href="${item.original}">
                          <img
                            class="gallery__image"
                            src="${item.preview}"
                            data-source="${item.original}"
                            alt="${item.description}"
                          />
                        </a>
                      </div>`;

    galleryReference.insertAdjacentHTML("beforeend", markup);
  });
}
createGallery(galleryItems);

galleryReference.addEventListener("click", selectImage);

function selectImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImage = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img width="1280" height="854" src="${largeImage}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
  instance.show();
}

//  Завдання 2 --------------------
// import { galleryItems } from "./gallery-items.js";

const galleryReference2 = document.querySelector(".gallery-two");

function createGallery2(items) {
  items.map((item) => {
    const markup = `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`;

    galleryReference2.insertAdjacentHTML("beforeend", markup);
  });
}

createGallery2(galleryItems);

const lightbox = new SimpleLightbox(".gallery__item", {
  captionDelay: 250,
  captionsData: "alt",
});
