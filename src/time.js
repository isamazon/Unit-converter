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

//console.log(secondsTo.SecToMin);

view.button.addEventListener("click", function () {
  if (state.selectedFrom === "seconds" && state.selectedTo === "minutes") {
    conversion(state.selectedFrom, state.selectedTo, 60);
  }
});

function conversion(from, to, conversionValue) {
  let sum = values.inputValue / conversionValue;
  view.result.classList.remove("hidden");
  view.result.textContent = `${values.inputValue} ${from} = ${sum} ${to} `;
}

function conversionTimes(from, to, conversionValue) {
  let sum = values.inputValue * conversionValue;
  view.result.classList.remove("hidden");
  view.result.textContent = `${values.inputValue} ${from} = ${sum} ${to} `;
}

// Planning out what i need to do to make this work...

// First i need to have the input value
