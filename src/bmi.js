"use strict";

const view = {
  gender: document.getElementById("gender"),
  malePng: document.querySelector(".malepng"),
  femalePng: document.querySelector(".femalepng"),
  feet: document.getElementById("feet"),
  inches: document.getElementById("inches"),
  bmiPage: document.querySelector(".Bmipage"),
};

view.gender.addEventListener("change", (e) => {
  view.gender = e.target.value;
  console.log(view.gender);
  if (view.gender === "Male") {
    view.bmiPage.style.backgroundColor = " rgba(0, 255, 234, 0.911)";
  } else if (view.gender === "Female") {
    view.bmiPage.style.backgroundColor = "pink";
  } else {
    view.bmiPage.style.backgroundColor = "white";
  }
});
