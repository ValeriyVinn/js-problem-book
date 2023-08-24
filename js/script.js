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

const summOfDigits = (number) => {
  const array = Array.from(String(number), Number);
  const summ = array.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return summ;
};
console.log(summOfDigits(123));

const fillArrayWithEvens = (from, to) => {
  const array = [];
  for (let number = from; number <= to; number += 1) {
    if (!(number % 2)) {
      array.push(number);
    }
  }
  return array;
};

console.log(fillArrayWithEvens(1, 10));

const toOneDecimalPlace = (array) => {
  return array.map((number) => Number(number.toFixed(1)));
};

console.log(toOneDecimalPlace([1.456, 2.125, 3.32, 4.1, 5.34]))

const x = 12345;
const z = String(x)
console.log(z)

// console.log( y.unshift(String(x)) )

const charactersFromTheEnd = (number) => {
  while (number > 0) {
  let lastDigit = number % 10 
  console.log(lastDigit)
  number = Math.floor(number / 10)
  }
}

charactersFromTheEnd(987654321)


// for (let number = 0; number > 0; number -= 1) {
//   const element = array[index];
  
// }
 
// const r = [1,2,4,5,6]
// const p = r.reverse().join('')
// console.log(p)

// 

// const tenPercentIncrease = (array) => {

// }


