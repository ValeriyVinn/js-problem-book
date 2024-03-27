const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabiscuit",
];

const refs = {
  startBtn: document.querySelector(".js-start-race"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-results-table > tbody"),
};

let raceCounter = 0;
refs.startBtn.addEventListener("click", onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);

  updateWinnerField("");
  updateProgressField("Заїзд почався");
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsePromises) {
  Promise.race(horsePromises).then(({ horse, time }) => {
    updateWinnerField(`Переміг ${horse}, фінішувавши за ${time} часу`);
    updateResultsTable({ horse, time, raceCounter });
  });
}
function waitForAll(horsePromises) {
  Promise.all(horsePromises).then(() => {
    updateProgressField(`Перегони завершилися`);
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}
function updateResultsTable({ horse, time, raceCounter }) {
  const tr = `<tr><td class="th">${raceCounter}</td><td class="th">${horse}</td><td class="th">${time}</td></tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}

// console.log("Заїзд почався");

// console.log(promises);

function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}


function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// !---------------------------------
