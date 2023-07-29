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

// const checkIfPositive = (number) => {
//   if(number > 0) {
//     console.log('number is positive')
//   } 
//   else if (number < 0) {
//     console.log('number is negative')
//   }
//   else {
//     console.log('number = 0')
//   }
// }

// const checkIfPositive = (number) => {
//   const message = number > 0 ? 'number is positive' : number < 0 ? 'number is negative' : 'number = 0';
//   console.log(message);
// }

const checkIfPositive = (number) => {
  switch (Math.sign(number)) {
    case 1:
      console.log('number is positive');
      break;
    case -1:
      console.log('number is negative');
      break;
    default:
      console.log('number = 0');
      break;
  }
}


checkIfPositive(0)

