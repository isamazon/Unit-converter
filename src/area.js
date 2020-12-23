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
  const multiplier = areaTable.get(JSON.stringify([f, t]));
  const sum = v * multiplier;
  view.result.classList.remove("hidden");
  view.result.textContent = `${v} ${f} = ${sum} ${t} `;
}

const areaTable = new Map();
// Acres to
areaTable.set(JSON.stringify(["acres", "acres"]), 1 * 1);
areaTable.set(JSON.stringify(["acres", "Square Centimeters"]), 1 * 4.047e7);
areaTable.set(JSON.stringify(["acres", "squaredecameters"]), 1 * 40.469);
areaTable.set(JSON.stringify(["acres", "squaredecimeters"]), 1 * 404686);
areaTable.set(JSON.stringify(["acres", "squarefeet"]), 1 * 43560);
areaTable.set(JSON.stringify(["acres", "squarehectometers"]), 1 * 2.471);
areaTable.set(JSON.stringify(["acres", "squareinches"]), 1 * 6.273e6);
areaTable.set(JSON.stringify(["acres", "squarekilometers"]), 1 / 247);
areaTable.set(JSON.stringify(["acres", "squaremeters"]), 1 * 4047);
areaTable.set(JSON.stringify(["acres", "squaremiles"]), 1 / 640);
areaTable.set(JSON.stringify(["acres", "squaremilimeter"]), 1 * 4.047e9);
areaTable.set(JSON.stringify(["acres", "squareyards"]), 1 / 4840);
// Square Centimeters to...
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Centimeters"]),
  1 * 1
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Centimeters"]),
  1 * 4.047e7
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "squaredecameters"]),
  1 * 40.469
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "squaredecimeters"]),
  1 * 404686
);
areaTable.set(JSON.stringify(["Square Centimeters", "squarefeet"]), 1 * 43560);
areaTable.set(
  JSON.stringify(["Square Centimeters", "squarehectometers"]),
  1 * 2.471
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "squareinches"]),
  1 * 6.273e6
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "squarekilometers"]),
  1 / 247
);
areaTable.set(JSON.stringify(["Square Centimeters", "squaremeters"]), 1 * 4047);
areaTable.set(JSON.stringify(["Square Centimeters", "squaremiles"]), 1 / 640);
areaTable.set(
  JSON.stringify(["Square Centimeters", "squaremilimeter"]),
  1 * 4.047e9
);
areaTable.set(JSON.stringify(["Square Centimeters", "squareyards"]), 1 / 4840);
