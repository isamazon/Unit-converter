"use strict";
// Get all values and put it into a object
const view = {
  button: document.querySelector(".convertbtn"),
  form: document.querySelector("form"),
  from: document.getElementById("cfrom"),
  to: document.getElementById("cto"),
  result: document.querySelector(".resultsP"),
  input: document.querySelector("input"),
};

// Input and Result Values
const values = {
  inputValue: view.input.value,
  resultValue: view.result.value,
};

// Object to store the dropdown menu options as values
const state = {
  selectedFrom: "",
  selectedTo: "",
};

// Implemented the change eventlistener to update the selected drop down menus
view.from.addEventListener("change", (e) => {
  state.selectedFrom = e.target.value;
});

view.to.addEventListener("change", (e) => {
  state.selectedTo = e.target.value;
});
// To update the value thats put in the
view.input.addEventListener("change", (e) => {
  values.inputValue = e.target.value;
  //console.log(e.target.value);
});

// Adding a event listener to the convert button to perform if else statements and using function conversion and conversionTimes to convert the values
view.button.addEventListener("click", function () {
  convert();
});

// Add a keydown event listener to the convert btn
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    convert();
  }
});

function convert(f, t, v) {
  f = state.selectedFrom;
  t = state.selectedTo;
  v = values.inputValue;
  const multiplier = timeTable.get(JSON.stringify([f, t]));
  const sum = v * multiplier;
  view.result.classList.remove("hidden");
  view.result.textContent = `${v} ${f} = ${sum} ${t} `;
}
/*          MODAL WINDOW          */

const modal = {
  closeModal: document.querySelector(".close-modal"),
  convert: document.querySelector(".convertbtn"),
  window: document.querySelector(".modalWindow"),
  blur: document.getElementById("blur"),
  overlay: document.querySelector(".overlay"),
  result: document.getElementById("bmiresult"),
  h1: document.querySelector(".h1-results"),
};

//Function to open Modal
modal.convert.addEventListener("click", () => {
  openModal();
  convert();
});
function openModal() {
  modal.window.classList.remove("hidden");
  modal.overlay.classList.remove("hidden");
}
// Keydown event to open modal and convert
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    openModal();
    convert();
  }
});

//Function to close Modal
modal.closeModal.addEventListener("click", () => {
  closeModalF();
});

const closeModalF = () => {
  modal.window.classList.add("hidden");
  modal.overlay.classList.add("hidden");
};

/****************       Hash Map        ****************/
//
//
//
/*  Using a hash map instead of if else statements...  */
const timeTable = new Map([
  [JSON.stringify(["seconds", "minutes"]), 1 / 60],
  [JSON.stringify(["minutes", "hours"]), 1 / 60],
]);
// Seconds to ...
timeTable.set(JSON.stringify(["seconds", "hours"]), 1 / 3600);
timeTable.set(JSON.stringify(["seconds", "days"]), 1 / 86400);
timeTable.set(JSON.stringify(["seconds", "weeks"]), 1 / 604800);
timeTable.set(JSON.stringify(["seconds", "months"]), 1 / 2.628e6);
timeTable.set(JSON.stringify(["seconds", "years"]), 1 / 3.154e7);
// Minutes to...
timeTable.set(JSON.stringify(["minutes", "seconds"]), 1 * 60);
timeTable.set(JSON.stringify(["minutes", "days"]), 1 / 1440);
timeTable.set(JSON.stringify(["minutes", "weeks"]), 1 / 10080);
timeTable.set(JSON.stringify(["minutes", "months"]), 1 / 43800);
timeTable.set(JSON.stringify(["minutes", "years"]), 1 / 525600);
// Hours to...
timeTable.set(JSON.stringify(["hours", "seconds"]), 1 * 3600);
timeTable.set(JSON.stringify(["hours", "minutes"]), 1 * 60);
timeTable.set(JSON.stringify(["hours", "hours"]), 1 * 1);
timeTable.set(JSON.stringify(["hours", "days"]), 1 / 24);
timeTable.set(JSON.stringify(["hours", "weeks"]), 1 / 168);
timeTable.set(JSON.stringify(["hours", "months"]), 1 / 730);
timeTable.set(JSON.stringify(["hours", "years"]), 1 / 8760);
// Days to...
timeTable.set(JSON.stringify(["days", "seconds"]), 1 * 86400);
timeTable.set(JSON.stringify(["days", "minutes"]), 1 * 1440);
timeTable.set(JSON.stringify(["days", "hours"]), 1 * 24);
timeTable.set(JSON.stringify(["days", "days"]), 1 * 1);
timeTable.set(JSON.stringify(["days", "weeks"]), 1 / 168);
timeTable.set(JSON.stringify(["days", "months"]), 1 / 730);
timeTable.set(JSON.stringify(["days", "years"]), 1 / 8760);
// Weeks to...
timeTable.set(JSON.stringify(["weeks", "seconds"]), 1 * 604800);
timeTable.set(JSON.stringify(["weeks", "minutes"]), 1 * 10080);
timeTable.set(JSON.stringify(["weeks", "hours"]), 1 * 168);
timeTable.set(JSON.stringify(["weeks", "days"]), 1 / 7);
timeTable.set(JSON.stringify(["weeks", "weeks"]), 1 * 1);
timeTable.set(JSON.stringify(["weeks", "months"]), 1 / 4.345);
timeTable.set(JSON.stringify(["weeks", "years"]), 1 / 52.143);
// Months to...
timeTable.set(JSON.stringify(["months", "seconds"]), 1 * 2.628e6);
timeTable.set(JSON.stringify(["months", "minutes"]), 1 * 43800);
timeTable.set(JSON.stringify(["months", "hours"]), 1 * 730);
timeTable.set(JSON.stringify(["months", "days"]), 1 * 30.417);
timeTable.set(JSON.stringify(["months", "weeks"]), 1 * 4.345);
timeTable.set(JSON.stringify(["months", "months"]), 1 * 1);
timeTable.set(JSON.stringify(["months", "years"]), 1 / 12);
// Years to...
timeTable.set(JSON.stringify(["years", "seconds"]), 1 * 3.154e7);
timeTable.set(JSON.stringify(["years", "minutes"]), 1 * 525600);
timeTable.set(JSON.stringify(["years", "hours"]), 1 * 8760);
timeTable.set(JSON.stringify(["years", "days"]), 1 * 365);
timeTable.set(JSON.stringify(["years", "weeks"]), 1 * 52.143);
timeTable.set(JSON.stringify(["years", "months"]), 1 * 12);
timeTable.set(JSON.stringify(["years", "years"]), 1 * 1);
