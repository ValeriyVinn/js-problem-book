// !  version 1 =====================

// const input = document.getElementById("name-input");
// const span = document.getElementById("name-output");

// input.addEventListener("input", () => {
//   span.textContent = input.value.trim() || "Anonimous";
// });

// !  version 2 =====================

const input = document.getElementById("name-input");
const span = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  span.textContent = event.currentTarget.value;
  if (span.textContent === "") {
    span.textContent = "Anonymous";
  }
})
