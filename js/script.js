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
}
console.log(firstZeroPosition('dk0kn'))

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

const startWith = (array, start) => {
  const result = [];
  for (const str of array) {
    if (str.startsWith(start)) {
      result.push(str);
    }
  }
  return result;
};

console.log(startWith(["http://sfgsfgfsg.html", "fhjfhj", "eyhty"], 'http://'));
