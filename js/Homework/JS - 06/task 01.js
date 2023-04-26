const listItem = document.querySelectorAll(".item");

console.log("Number of categories:", listItem.length);

listItem.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
