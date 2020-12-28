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
  console.log(state.selectedFrom);
});

view.to.addEventListener("change", (e) => {
  state.selectedTo = e.target.value;
  console.log(state.selectedTo);
});
// To update the value thats put in the
view.input.addEventListener("change", (e) => {
  values.inputValue = e.target.value;
  console.log(values.inputValue);
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
  console.log(sum);
  view.result.classList.remove("hidden");
  view.result.textContent = `${v} ${f} = ${sum} ${t} `;
}

const areaTable = new Map([
  // 1 * 1
  [JSON.stringify(["acres", "acres"]), 1 * 1],
  [JSON.stringify(["Square Centimeters", "Square Centimeters"]), 1 * 1],
]);
// Acres to
areaTable.set(JSON.stringify(["acres", "Square Centimeters"]), 1 * 4.047e7);
areaTable.set(JSON.stringify(["acres", "Square Decameters"]), 1 * 40.469);
areaTable.set(JSON.stringify(["acres", "Square Decimeters"]), 1 * 404686);
areaTable.set(JSON.stringify(["acres", "Square Feet"]), 1 * 43560);
areaTable.set(JSON.stringify(["acres", "Square Hectometers"]), 1 * 2.471);
areaTable.set(JSON.stringify(["acres", "Square Inches"]), 1 * 6.273e6);
areaTable.set(JSON.stringify(["acres", "Square Kilometers"]), 1 / 247);
areaTable.set(JSON.stringify(["acres", "Square Meters"]), 1 * 4047);
areaTable.set(JSON.stringify(["acres", "Square Miles"]), 1 / 640);
areaTable.set(JSON.stringify(["acres", "Square Milimeters"]), 1 * 4.047e9);
areaTable.set(JSON.stringify(["acres", "Square Yards"]), 1 / 4840);

// Square Centimeters to...

areaTable.set(JSON.stringify(["Square Centimeters", "acres"]), 1 / 4.047e7);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Decameters"]),
  1 * 40.469
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Decimeters"]),
  1 * 404686
);
areaTable.set(JSON.stringify(["Square Centimeters", "Square Feet"]), 1 * 43560);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Hectometers"]),
  1 * 2.471
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Inches"]),
  1 * 6.273e6
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Kilometers"]),
  1 / 247
);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Meters"]),
  1 * 4047
);
areaTable.set(JSON.stringify(["Square Centimeters", "Square Miles"]), 1 / 640);
areaTable.set(
  JSON.stringify(["Square Centimeters", "Square Milimeters"]),
  1 * 4.047e9
);
areaTable.set(JSON.stringify(["Square Centimeters", "Square Yards"]), 1 / 4840);
