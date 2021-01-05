"use strict";

const view = {
  gender: document.getElementById("gender"),
  feet: document.getElementById("feet"),
  inches: document.getElementById("inches"),
  weight: document.getElementById("weight"),
  bmiPage: document.querySelector(".Bmipage"),
};

// Store the height and weight values
const HWValues = {
  feetValue: view.feet.value,
  inchesValue: view.inches.value,
  weightValue: view.weight.value,
};

view.gender.addEventListener("change", (e) => {
  displayGender(e);
});

const displayGender = (e) => {
  view.gender = e.target.value;
  console.log(view.gender);
  if (view.gender === "Male") {
    document.body.classList.add("maleGradient");
    document.body.classList.remove("femaleGradient");
  } else if (view.gender === "Female") {
    document.body.classList.add("femaleGradient");
    document.body.classList.remove("maleGradient");
  } else {
    view.bmiPage.style.backgroundColor = "white";
    document.body.classList.remove("maleGradient");
    document.body.classList.remove("femaleGradient");
  }
};
