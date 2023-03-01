const modal = document.querySelector(".modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

console.log(modal);
console.log(btnsShowModal);
console.log(btnCloseModal);
console.log(overlay);

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsShowModal.forEach((btn) => btn.addEventListener("click", openModal));
