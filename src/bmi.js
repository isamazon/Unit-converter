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
// Create a function to display what gender we have selected visually
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
view.gender.addEventListener("change", (e) => {
  displayGender(e);
});

// Now we want to create the BMI formula and make it functional

// Add the feet value
view.feet.addEventListener("change", (e) => {
  HWValues.feetValue = e.target.value;
  console.log(HWValues.feetValue);
});
// inches value
view.inches.addEventListener("change", (e) => {
  HWValues.inchesValue = e.target.value;
  console.log(HWValues.inchesValue);
});
// Weight Value
view.weight.addEventListener("change", (e) => {
  HWValues.weightValue = e.target.value;
  console.log(HWValues.weightValue);
});

// MODAL WINDOW
// First we need to store all the modal values
const modal = {
  closeModal: document.querySelector(".close-modal"),
  convert: document.getElementById("convertbtn"),
  window: document.querySelector(".modalWindow"),
  blur: document.getElementById("blur"),
  overlay: document.querySelector(".overlay"),
  result: document.getElementById("bmiresult"),
  h1: document.querySelector(".h1-results"),
};

// Conversion formula
function bmiFormula(feet, inches, pounds) {
  feet = HWValues.feetValue;
  inches = HWValues.inchesValue;
  pounds = HWValues.weightValue;
  const fullHeight = feet * 12 + inches;
  const formula = (pounds / fullHeight ** fullHeight) * 703;
  modal.result.textContent = formula;
}

//Function to open Modal
modal.convert.addEventListener("click", () => {
  openModal();
  bmiFormula();
});
function openModal() {
  modal.window.classList.remove("hidden");
  modal.overlay.classList.remove("hidden");
}
// keydown event to open the modal btn and to convert

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    openModal();
    bmiFormula();
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
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModalF();
  }
});

// Function to show blur background

// Function to convert BMI
