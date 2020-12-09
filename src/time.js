"use strict";
// Get all values and put it into a object
const view = {
  button: document.querySelector(".convertbtn"),
  form: document.querySelector("form"),
  from: document.getElementById("cfrom"),
  to: document.getElementById("cto"),
  result: document.querySelector(".results"),
  input: document.querySelector("input"),
};

// Input and Result Values
const values = {
  inputValue: view.input.value,
  resultValue: view.result.value,
};
// Form
const state = {
  selectedFrom: "",
  selectedTo: "",
};

view.from.addEventListener("change", (e) => {
  state.selectedFrom = e.target.value;
});

view.to.addEventListener("change", (e) => {
  state.selectedTo = e.target.value;
});

view.input.addEventListener("change", (e) => {
  values.inputValue = e.target.value;
});

// Adding a event listener to the convert button to perform if else statements and using function conversion and conversionTimes to convert the values
view.button.addEventListener("click", function convert(f, t, v) {
  f = state.selectedFrom;
  t = state.selectedTo;
  v = values.inputValue;
  const multiplier = timeTable.get(JSON.stringify([f, t]));
  const sum = v * multiplier;
  view.result.classList.remove("hidden");
  view.result.textContent = `${v} ${f} = ${sum} ${t} `;
});

/*  Using a hash map instead of if else statements...  */
const timeTable = new Map();
// First do Seconds to ...
timeTable.set(JSON.stringify(["seconds", "minutes"]), 1 / 60);
timeTable.set(JSON.stringify(["seconds", "hours"]), 1 / 3600);
timeTable.set(JSON.stringify(["seconds", "days"]), 1 / 86400);
timeTable.set(JSON.stringify(["seconds", "weeks"]), 1 / 604800);
timeTable.set(JSON.stringify(["seconds", "months"]), 1 / 2.628e6);
timeTable.set(JSON.stringify(["seconds", "years"]), 1 / 3.154e7);
// Minutes to...
timeTable.set(JSON.stringify(["minutes", "seconds"]), 1 * 60);
timeTable.set(JSON.stringify(["minutes", "hours"]), 1 / 60);
timeTable.set(JSON.stringify(["minutes", "days"]), 1 / 1440);
timeTable.set(JSON.stringify(["minutes", "weeks"]), 1 / 10080);
timeTable.set(JSON.stringify(["minutes", "months"]), 1 / 43800);
timeTable.set(JSON.stringify(["minutes", "years"]), 1 / 525600);
// Hours to...
