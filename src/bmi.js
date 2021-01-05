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
    document.body.classList.add("maleGradient");
    document.body.classList.remove("femaleGradient");
  } else if (view.gender === "Female") {
    document.body.classList.add("femaleGradient");
    document.body.classList.remove("maleGradient");
  } else {
    view.bmiPage.style.backgroundColor = "white";
  }
});
