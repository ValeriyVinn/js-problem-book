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

const checkOrEven = (number) => {
  console.log(number % 2 === 0 ? 'number is even' : 'number is odd');
}


checkOrEven(541)

