// ! Color picker, Репета 6 - 11 1:32 - создание коллекций

const colorPickerOptions = [
  { label: "red", color: "#FF0000" },
  { label: "lime", color: "#00FF00" },
  { label: "blue", color: "#2196F3" },
  { label: "maroon", color: "#800000" },
  { label: "pink", color: "#FFC0CB" },
  { label: "grey", color: "#607D8B" },
  { label: "indigo", color: "#3F51B5" },
  { label: "green", color: "#008000" },
  { label: "salmon", color: "#FA8072" },
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


// ! Task 4 ---------------



// ! Task 5 ---------------


// ! Task 6 ---------------




// ! Task 7 ---------------

const input = document.getElementById("font-size-control")
const span = document.getElementById("text")

span.style.fontSize = input.value + 'px'

input.addEventListener("input", () => {
  span.style.fontSize = `${input.value}px`
})

// ! Task 8 ---------------
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector('.change-color')
console.log(btnEl)
const spanEl = document.querySelector('.color')
console.log(spanEl.textContent)

btnEl.addEventListener('click', () => {

 document.body.style.backgroundColor = getRandomHexColor()
 spanEl.textContent = getRandomHexColor()
})
// ! Task 9 ---------------



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
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
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
