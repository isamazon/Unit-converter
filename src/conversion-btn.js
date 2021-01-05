// First we need to store all the modal values
const modal = {
  closeModal: document.querySelector(".close-modal"),
  convert: document.getElementById("convertbtn"),
  window: document.getElementById("modal-full"),
};

//Function to open Modal
modal.convert.addEventListener("click", () => {
  modal.window.classList.remove("hidden-modal");
});

//Function to close Modal
modal.closeModal.addEventListener("click", () => {
  closeModalF();
});

const closeModalF = () => {
  modal.window.classList.add("hidden-modal");
};
