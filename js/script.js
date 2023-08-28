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

const increaseByTenPercent = (array) => {
  return array.map((number) => number + 0.1 * number);
};

console.log(increaseByTenPercent([1, 2, 3, 4, 5.5]));

const firstZeroPosition = (string) => {
  return string.indexOf(0) + 1;
};
console.log(firstZeroPosition("dk0kn"));

const d = "607vv67n3244459";
const f = d.indexOf(0) + 1;
console.log(f);

function findLargestNumber() {
  const arr = [...arguments];
  let max = arr[0];
  console.log(max);
  console.log(arguments);
}

console.log(findLargestNumber(2, 45, 35, 21, 1, 95));
console.log(findLargestNumber(12, 5, 365, 61, 11, 35));

function getRandomNumbers(min, max, n) {
  const array = [];
  for (let num = 0; num < n; num += 1) {
    array.push(Math.round(Math.random() * (max - min) + min));
  }
  return array;
}

console.log(getRandomNumbers(1, 100, 10));

console.log((1 && 5 && 0) || ("oo" && null) || (0 && "false"));

function generateExpression(operands, operators, comparisons) {
  let expression = "";

  for (let i = 0; i < comparisons; i++) {
    expression += operands[i];

    if (i < comparisons - 1) {
      expression +=
        " " + operators[Math.floor(Math.random() * operators.length)] + " ";
    }
  }

  return expression;
}

const operands = [0, 34, "abc", 3, false, "welcome", null, "xyz"];
const operators = ["&&", "||"];
const comparisons = 7;

const generatedExpression = generateExpression(
  operands,
  operators,
  comparisons
);
console.log(generatedExpression);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const originalArray = [3, null, "abc", 0, "xyz", false, "welcome", 34];
const shuffledArray = [...originalArray]; // Створюємо копію масиву для перетасування
shuffleArray(shuffledArray);

console.log("Оригінальний масив:", originalArray);
console.log("Перетасований масив:", shuffledArray);

console.log(0 || (34 && "abc" && 3) || false || ("welcome" && null));

const x = (array) => {
  const y = array.map((el) => el * 2);
  return y;
};
console.log(x([3, 8, 8, 0, 5, 4, 33, 34]));

function removeElements(array, element) {
  return array.filter((el) => el !== element);
}
console.log(
  removeElements([3, null, "abc", 0, "xyz", false, "welcome", 34], 0)
);

function removeElement(array, element) {
  let index = array.length - 1;

  while (index >= 0) {
    if (array[index] === element) {
      array.splice(index, 1);
    }
    index -= 1;
  }
  return array;
}
console.log(
  removeElement([34, 34, "abc", 34, "xyz", false, "welcome", 34], 34)
);
