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

const vowels = "aeuio";

const str = vowels.split("").reverse().join("");
console.log(str);

const consonant = ["a", "e", "u", "i", "o"];

const lastConsonant = (word) => {
  console.log(
    consonant.includes(word[word.length - 1])
      ? word[word.length - 2]
      : word[word.length - 1]
  );
  // console.log(consonant.includes(word[word.length-1]))
};

lastConsonant("etryyeyet");

//   ------- <br> -------

// const arrayOfDig = (number) => {
//   const array = String(number).split("").map((value) => Number(value));
//   console.log(array);
// };

// arrayOfDig(1234567);

const arrayOfDig = (number) => {
  const array = Array.from(String(number), Number);
  console.log(array);
};

arrayOfDig(1234567);




// const arrayOfDigits = (number) => {
//   const array = [];
//   while (number > 0) {
//     const lastDigit = number % 10; 
//     array.unshift(lastDigit); 
//     number = Math.floor(number / 10);
//   }
//   console.log(array);
// };
// arrayOfDigits(9876)

// let n = 2348;
// let remainder = Math.floor(n/10)
// console.log(remainder)

const reverseNumber = (number) => {
  console.log(Number(String(number).split('').reverse().join('')))
}

// const reverseNumber = (number) => {
//   const x = []
//   const num = number.toString()
//   for (const digit of num) {
//     x.push(digit)
//   } 
//   console.log(x)
// }


reverseNumber(1234567)

const strn = '123';

// let arr1 = [1, 2, 3]; 
// let arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2))

const mergeArray = (arr1, arr2) => {
  console.log(arr1.concat(arr2))
}
concatArray([1,2,3], [0,9,2,3,8])