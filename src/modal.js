// MODAL WINDOW
// First we need to store all the modal values
const modal = {
  closeModal: document.querySelector(".close-modal"),
  convert: document.querySelector(".convertbtn"),
  window: document.querySelector(".modalWindow"),
  blur: document.getElementById("blur"),
  overlay: document.querySelector(".overlay"),
  result: document.getElementById("bmiresult"),
  h1: document.querySelector(".h1-results"),
};

//Function to open Modal
modal.convert.addEventListener("click", () => {
  modal.window.classList.remove("hidden");
  modal.overlay.classList.remove("hidden");
});

//Function to close Modal
modal.closeModal.addEventListener("click", () => {
  closeModalF();
});

const closeModalF = () => {
  modal.window.classList.add("hidden");
  modal.overlay.classList.add("hidden");
};
