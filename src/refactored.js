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

/*  Using a hash map instead of if else statements...  */
const timeTable = new Map();
// First do Seconds to ...
timeTable.set(JSON.stringify(["seconds", "minutes"]), 1 / 60);
timeTable.set(JSON.stringify(["seconds", "hours"]), 1 / 3600);
timeTable.set(JSON.stringify(["seconds", "days"]), 1 / 86400);
timeTable.set(JSON.stringify(["seconds", "weeks"]), 1 / 604800);
timeTable.set(JSON.stringify(["seconds", "months"]), 1 / 2.628e6);
timeTable.set(JSON.stringify(["seconds", "months"]), 1 / 2.628e6);

const convert = (f, t, v) => {
  const multiplier = timeTable.get(JSON.stringify([f, t]));
  return v * multiplier;
};
// Input and Result Values
const values = {
  inputValue: view.input.value,
  resultValue: view.result.value,
};
// Form
const state = {
  selectedFrom: timeTable.get(JSON.stringify([f])),
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
view.button.addEventListener("click", function () {
  /*                    SECONDS TO (...)                    */
  /*                    ................                    */
});

function conversion(from, to, v) {
  let sum = values.inputValue / v;
  view.result.classList.remove("hidden");
  view.result.textContent = `${values.inputValue} ${from} = ${sum} ${to} `;
}

function conversionTimes(from, to, v) {
  let sum = values.inputValue * v;
  view.result.classList.remove("hidden");
  view.result.textContent = `${values.inputValue} ${from} = ${sum} ${to} `;
}
