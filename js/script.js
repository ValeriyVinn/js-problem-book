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

const sumOfTheSquares = (array) => {
  let positive = [].reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      positive.push(currentValue)
    }
    return accumulator + currentValue;
  }, []);
  return positive
  
  // return positive.reduce((acc, curVal) => {
  //   acc + curVal
  // });
};
console.log(sumOfTheSquares([4, -9, -25, 16]));



const positive = (array) => {
  const newArray = array.filter(value => value > 0).reduce((acc, curVal) => {
    return acc + curVal;
  }, 0);
  return newArray;
}


console.log(positive([4, -9, -25, -16, 6]));

// const sumOfThePositive = (arr) => {
//   const sum = arr.reduce((acc + curVal) => {
// return sum;
//   },0 );
// };

// const sumOfThePositive = (arr) => {
//   const sum = arr.reduce((acc, curVal) => {
//     return acc + curVal;
//   }, 0);
//   return sum;
// };

// console.log(sumOfThePositive(newArray))


const printNumber = (from, to) => {
  for (let number = from; number <= to; number+=4) {
      console.log(number)    
  }
}
printNumber(1, 17)

// const strng = 'qwerty';
// const arrey = strng.split('');
// console.log(arrey)

const arrayOfLetters = (array) => {
  console.log(array.split('')) 
}
arrayOfLetters('atdhdghdghdhd')