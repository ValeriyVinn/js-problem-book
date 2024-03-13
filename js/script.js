const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// ============= Click Dropdown Button on Markup =================


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 



// ============= Scroll btn =================

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  // console.log(pos)
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  // console.log(calcHeight)
  let scrollValue = Math.round((pos * 100) / calcHeight);
  // console.log(scrollValue)
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(cornflowerblue ${scrollValue}%, aliceblue ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// ============= Scroll btn =================

// !-------------  Working zone ------------------

function mergePairsOfElements(array) {
  for (let index = 0; index < array.length; index += 1) {
    const arrayOutput = [];
    if (index % 2 === 0) {
      arrayOutput.push(String(array[index]) + String(array[index + 1]));
    }
    return arrayOutput;
  }
}

// console.log(mergePairsOfElements([1, 2, 3, 4, 5, 6]));

function printElementsInReverseOrder(array) {
  const reverseArray = array.reverse();

  for (const number of reverseArray) {
    console.log(number);
  }
}

// printElementsInReverseOrder([1, 2, 3, 4, 5, 6])

function firstEvenFromEnd(number) {
  const reverseNumber = String(number).split("").reverse();

  for (const number of reverseNumber) {
    if (Number(number) % 2 === 0) {
      return number;
    }
  }
}


const separateTripletsWithSpacesFromEnd = function(string) {
  let result = '';

  for (let index = string.length; index > 0; index -= 3) {
    result = ' ' + string.slice(Math.max(0, index - 3), index) + result;
  }

  result = result.trim();

  return result;
};

// console.log(separateTripletsWithSpacesFromEnd('12345366'));



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


