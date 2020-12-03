"use strict";
// Get all values and put it into a object
const view = {
  button: document.querySelector(".convertbtn"),
  form: document.querySelector("form"),
  conversionType1: document.getElementById("cfrom"),
  conversionType2: document.getElementById("cto"),
  result: document.querySelector(".results"),
  input: document.querySelector("input"),
};

// Put all form option values and put it into an object

view.conversionType1.addEventListener("change", (e) => {
  view.result.textContent = `You chose ${e.target.value}`;
});

const secondsTo = {
    SecToMin = view.input / 60, 
    SecToHour = view.input /3600

}