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

console.log(mergePairsOfElements([1, 2, 3, 4, 5, 6]));

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

// console.log(firstEvenFromEnd(1234567))

