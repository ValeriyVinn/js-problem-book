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

function sumOfNegatives(array) {
  return array.reduce((acc, el) => (el < 0 ? acc + el : acc), 0);
}
console.log(sumOfNegatives([3, -8, 8, 0, -5, 4, 33, 34]));

function removeNegative(array) {
  let index = array.length - 1;
  while (index >= 0) {
    if (array[index] < 0) {
      array.splice(index, 1);
    }
    index -= 1;
  }
  return array;
}

console.log(removeNegative([1, -2, 3, -4, 5, -6, 7, -8]));

function deletePenultimate(string) {
  const arrayToCut = string.split("");
  arrayToCut.splice([arrayToCut.length - 2], 1);
  const newString = arrayToCut.join("");
  return newString;
}
console.log(deletePenultimate("1234567890"));

function lastLetterFirstLetter(firstWord, secondWord) {
  return firstWord[firstWord.length - 1] === secondWord[0];
}
console.log(lastLetterFirstLetter("12323g", "ghghdb"));

let stri = "2025-12-31";
stri = stri.split("-");
const newArr = [];
// stri = stri.replace('-', ',')
// for (const iterator of object) {

// }
newArr.push("year");
newArr.push(stri[0]);
newArr.push("month");
newArr.push(stri[1]);
newArr.push("day");
newArr.push(stri[2]);
stri.unshift("year");
console.log(stri);
console.log(newArr);
const na = newArr;

const year = "year";
const month = "month";
const day = "day";
// const strng = {`'${year}':'2025','${month}':'12','${day}':'31'`}
// console.log(strng)
// let object = JSON.parse(strng)

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
for (const key in book) {
  // Ключ
  console.log(key);
  // Значення властивості з таким ключем
  console.log(book[key]);
}

// function arraysOfKeysAndValues(object) {
//   const arrayOfKeys = Object.keys(object)
//   const arrayOfValues = Object.values(object)
//   console.log(arrayOfKeys, arrayOfValues)
// }

// return `Array of keys: ${arrayOfKeys}, array of  values ${arrayOfValues}`
// const arrays = [arrayOfKeys, arrayOfValues]
// return arrays

const arrayOfKeys = [];
const arrayOfValues = [];
function arraysOfKeysAndValues(object) {
  for (const key in object) {
    arrayOfKeys.push(key);
    arrayOfValues.push(object[key]);
  }
}

arraysOfKeysAndValues(book);

console.log(arrayOfKeys);
console.log(arrayOfValues);

// task-number 2

function sumFirstAndSecond(number, sum) {
  let currentNumber = 10;
  while (currentNumber < number) {
    currentNumber = String(currentNumber);
    if (Number(currentNumber[0]) + Number(currentNumber[1]) === sum) {
      console.log(currentNumber);
    }
    currentNumber = Number(currentNumber);
    currentNumber += 1;
  }
}
sumFirstAndSecond(30, 5);

function capitalizeOddLetters(string) {
  let result = "";
  for (const currentLetter of string) {
  }
}

//   const firstHalf = array.slice(0, array.length/2)
// console.log(firstHalf)
// const secondHalf = array.slice(array.length/2)
// console.log(secondHalf)

function divideSumOfFirstHalfBySumOfSecondHalf(array) {
  let first = 0;
  let second = 0;
  for (let index = 0; index < array.length; index++) {
    if (index < array.length / 2) {
      first += array[index];
    } else {
      second += array[index];
    }
  }
  return first / second;
}

console.log(divideSumOfFirstHalfBySumOfSecondHalf([1, 2, 3, 4, 5, 6]));

const redFruits = ["apple", "strawberry", "cherry", "cranberries"];
const fruit = "berry";
const hasFruit = redFruits.includes(fruit);

if (hasFruit) {
  console.log(`${fruit} is a red fruit!`);
} else {
  console.log(`${fruit} is not a red fruit!`);
}

function changeLetterCase(string) {
  const inputLetters = string.split("");
  const outputLetters = [];

  inputLetters.map((word) => {
    word === word.toUpperCase()
      ? outputLetters.push(word.toLowerCase())
      : outputLetters.push(word.toUpperCase());
  });

  return outputLetters.join("");
}

console.log(changeLetterCase("AbCdE"));

// function capitalizeEachSecond (string) {
//   const inputWords = string.split(' ')
//   const outputWords = [];
//   for (let index = 0; index < inputWords.length; index += 1) {
//     outputWords.push(inputWords[index].toUpperCase())

//   }
//   return outputWords.join(' ')
// }

// console.log(capitalizeEachSecond('aaa bbb ccc eee fff'))

let anyString = "Mozilla";
let anyArray = anyString.split("");
let anyString4 = anyString.substring(anyString.length - 4);
console.log(anyString4);
console.log(anyString);
console.log(anyArray);

const arrr = [123, 456, 789];
const arrr1 = arrr.map((item) => {
  String(item);
  return typeof item;
});
console.log(arrr.reverse());
console.log(arrr1);

function divideSumEvenBySumOdd(array) {
  let even = 0;
  let odd = 0;

  for (let index = 0; index < array.length; index += 1) {
    index % 2 === 0 ? (even += array[index]) : (odd += array[index]);
  }

  return even / odd;
}

console.log(divideSumEvenBySumOdd([1, 2, 3, 4, 5, 6]));

const doMath = function (a, b, callback) {
  const result = callback(a, b);

  console.log(result);
};

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

doMath(2, 3, add);
doMath(10, 7, sub);
