const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
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


// const lastConsonant = (word) => {
//   if (word[word.length-1] === "a") {
//      console.log(word[word.length-2])
//   } else {console.log(word[word.length-1])}
// }

// lastConsonant("etryyeyao")

const vowels = "aeuio"

const str = vowels.split("").reverse().join("");
console.log(str)

const consonant = ['a','e','u','i','o'];

const lastConsonant = (word) => {
  console.log(consonant.includes(word[word.length-1]) ? word[word.length-2] : word[word.length-1])
  // console.log(consonant.includes(word[word.length-1]))
}



lastConsonant("etryyeyet")

// const firstDigit = (number) => {
//    console.log(number[0])
// }

// firstDigit(234524)

// const str = 'abcde'
// console.log(str.split(''))

// const number = 2345
// const string = number + "s" 

// console.log(string)
// console.log(Number(string[0]) + Number(string[string.length - 2]))

// const sumFirstAndLastDigit = (number) => {
//   const toString = number + "s" 
//   console.log(Number(toString[0]) + Number(toString[toString.length - 2]))
// }
// sumFirstAndLastDigit(45245261)


const firstDigit = (number) => {
  console.log(Number(String(number)[0]))
}

firstDigit(51234)

const lastDigit = (number) => {
  console.log(Number(String(number)[String(number).length-1]))
}


lastDigit(4563457)