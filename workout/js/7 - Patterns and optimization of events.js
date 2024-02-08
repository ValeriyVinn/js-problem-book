// !Task 1

const tEighteenRefs = {
    parent: document.querySelector('.tone-parent'),
    child: document.querySelector('.tone-child'),
    innerChild: document.querySelector('.tone-inner-child'),
  };
  
  tEighteenRefs.parent.addEventListener('click', onParentClick);
  tEighteenRefs.child.addEventListener('click', onChildClick);
  tEighteenRefs.innerChild.addEventListener('click', onInnerChildClick);
  
  function onParentClick(evt) {
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
  }
  
  function onChildClick(evt) {
    console.log('onChildClick');
    console.log('onChildClick -> evt.target', evt.target);
    console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
  }
  
  function onInnerChildClick(evt) {
    console.log('onInnerChildClick');
    console.log('onInnerChildClick -> evt.target', evt.target);
    console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
  }
  
  // !Task 2
  
  const container = document.querySelector('.js-container');
  
  container.addEventListener('click', onClick);
  
  function onClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  
  console.log(evt.target.textContent);
  }
  
  /*
  * Код добавления кнопок
  */
  const addBtn = document.querySelector('.js-add-btn');
  let labelCounter = 6;
  
  addBtn.addEventListener('click', onAddBtnClick);
  
  function onAddBtnClick() {
  const btn = document.createElement('button');
  btn.textContent = `Кнопка ${labelCounter}`;
  btn.type = 'button';
  
  container.appendChild(btn);
  labelCounter += 1;
  }
  
  
  
  
  
  
  
  // !Task 3
  
  /*
  * Делегирование
  * - один из многих
  * - несколько из многих и Set
  */
  
  // const tagsContainer = document.querySelector('.js-tags');
  // let selectedTag = null;
  
  // tagsContainer.addEventListener('click', onTagsContainerClick);
  
  // function onTagsContainerClick(evt) {
  //   if (evt.target.nodeName !== 'BUTTON') {
  //     return;
  //   }
  
  //   const currentActiveBtn = document.querySelector('.tags__btn--active');
  
  //   if (currentActiveBtn) {
  //     currentActiveBtn.classList.remove('tags__btn--active');
  //   }
  
  //   const nextActiveBtn = evt.target;
  //   nextActiveBtn.classList.add('tags__btn--active');
  //   selectedTag = nextActiveBtn.dataset.value;
  
  //   console.log(selectedTag);
  // }
  
  const tagsContainer = document.querySelector('.js-tags');
  const selectedTags = new Set();
  
  tagsContainer.addEventListener('click', onTagsContainerClick);
  
  function onTagsContainerClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }
  
  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains('tags__btn--active');
  
  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }
  
  btn.classList.toggle('tags__btn--active');
  console.log(selectedTags);
  }
  
  
  // !Task 4
  
  
  
  
  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#e91e63', rgb: '233,30,99' },
    { hex: '#9c27b0', rgb: '156,39,176' },
    { hex: '#673ab7', rgb: '103,58,183' },
    { hex: '#3f51b5', rgb: '63,81,181' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#00bcd4', rgb: '0,188,212' },
    { hex: '#009688', rgb: '0,150,136' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
    { hex: '#ff9800', rgb: '255,152,0' },
    { hex: '#795548', rgb: '121,85,72' },
    { hex: '#607d8b', rgb: '96,125,139' },
  ];
  
  const paletteContainer = document.querySelector('.js-palette');
  const cardsMarkup = createColorCardsMarkup(colors);
  
  paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
  
  paletteContainer.addEventListener('click', onPaletteContainerClick);
  
  function createColorCardsMarkup(colors) {
    return colors
      .map(({ hex, rgb }) => {
        return `
      <div class="color-card">
       <div><div><div> <div
       class="color-swatch"
       data-hex="${hex}"
       data-rgb="${rgb}"
       style="background-color: ${hex}"
     ></div></div></div></div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
      `;
      })
      .join('');
  }
  
  function onPaletteContainerClick(evt) {
    const isColorSwatchEl = evt.target.classList.contains('color-swatch');
  
    if (!isColorSwatchEl) {
      return;
    }
  
    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');
  
    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
    setBodyBgColor(swatchEl.dataset.hex);
  }
  
  const tTwentyOneBackgraundColor = document.querySelector('.tTwentyOneBackgraundColor')
  
  
  function setBodyBgColor(color) {
    
    tTwentyOneBackgraundColor.style.backgroundColor = color;
  }
  
  function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');
  
    if (currentActiveCard) {
      currentActiveCard.classList.remove('is-active');
    }
  }
  
  function addActiveCardClass(card) {
    card.classList.add('is-active');
  }

  // !Task 5 Рисіч - Хрестики-Нолики

// const container = document.querySelector(".js-container");

// container.addEventListener("click", onClick);
// function onClick(evt) {
//   console.log(evt.currentTarget.dataset.color);
//   if (!evt.target.classList.contains("js-box")) {
//     return;
//   }
//   console.log(evt.target.dataset.color);
//   console.log(evt.currentTarget);
// }

// const container = document.querySelector(".js-content");
// const nameWinner = document.querySelector(".js-winner");
// let player = "X";
// let historyX = [];
// let historyO = [];
// const wins = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function createMarkup() {
//   let markup = "";
//   for (let i = 1; i < 10; i += 1) {
//     markup += `<div class="item js-item" data-id="${i}"></div>`;
//   }
//   container.innerHTML = markup;
// }
// createMarkup();

// container.addEventListener("click", onClick);

// function onClick(evt) {
//   const { target } = evt;
//   if (!target.classList.contains("js-item") || target.textContent) {
//     return;
//   }

//   const isEndGame = historyO.length + historyX.length === 9;
//   const id = Number(target.dataset.id);
//   let result = false;

//   if (player === "X") {
//     historyX.push(id);
//     result = isWinner(historyX);
//   } else {
//     historyO.push(id);
//     result = isWinner(historyO);
//   }

//   target.textContent = player;

//   if (result) {
//     nameWinner.textContent = `Winner ${player} 😎`;
//     resetGame();
//     return;
//   } else if (isEndGame) {
//     console.log(`Try again 😱`);
//     resetGame();
//     return;
//   }
//   player = player === "X" ? "O" : "X";
// }

// function isWinner(arr) {
//   return wins.some((item) => item.every((id) => arr.includes(id)));
// }

// function resetGame() {
//   createMarkup();
//   historyX = [];
//   historyO = [];
//   player = "X";
// }




  
  // !Task 6
  // !Task 7
  // !Task 8