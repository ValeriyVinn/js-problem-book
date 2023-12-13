// * Репета  ----------

// ! Color picker, Репета 6 - 11 1:32 - создание коллекций

const colorPickerOptions = [
  { label: "red", color: "#FF0000" },
  { label: "lime", color: "#00FF00" },
  { label: "blue", color: "#2196F3" },
  { label: "maroon", color: "#800000" },
  { label: "pink", color: "#FFC0CB" },
  { label: "grey", color: "#607D8B" },
  { label: "indigo", color: "#3F51B5" },
  { label: "green", color: "#008000" },
  { label: "salmon", color: "#FA8072" },
];
// !
const colorPickerContainerEl = document.querySelector(".js-color-picker");

const elements = colorPickerOptions.map((option) => {
  const buttonEl = document.createElement("button");
  buttonEl.type = "button";
  buttonEl.classList.add("color-picker__option");
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  return buttonEl;
});

// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i]
//     const buttonEl = document.createElement('button')
//     buttonEl.type = 'button'
//     buttonEl.classList.add('color-picker__option')
//     buttonEl.textContent = option.label
//     buttonEl.style.backgroundColor = option.color

//     elements.push(buttonEl)

// }
console.dir(elements);

colorPickerContainerEl.append(...elements);

// * Рисіч  ----------

// * Сімак  ----------



// ! Модалка -----------

// const overlay = document.getElementById("simakModalOverlay");
// const modal = document.getElementById("simakModal");
// const modalOpenBtn = document.getElementById("simakModalOpenBtn");
// const modalCloseBtn = document.getElementById("simakModalCloseBtn");

// console.log(overlay);
// console.log(modal);
// console.log(modalOpenBtn);
// console.log(modalCloseBtn);

const refs = {
  overlay: document.getElementById("simakModalOverlay"),
  modal: document.getElementById("simakModal"),
  modalOpenBtn: document.getElementById("simakModalOpenBtn"),
  modalCloseBtn: document.getElementById("simakModalCloseBtn"),
};
const classes = {
  openModal: "open-modal",
};

refs.modalOpenBtn.addEventListener("click", handleModal);
refs.modalCloseBtn.addEventListener("click", handleModal);
refs.overlay.addEventListener("click", handleModal);
document.addEventListener("keydown", handleModalOnEscape);

function handleModal() {
  document.body.classList.toggle(classes.openModal);
}
function handleModalOnEscape({ code }) {
  if (code === "Escape") {
    document.body.classList.remove(classes.openModal);
  }
}

// !  -----------