const modal = document.querySelector(".modal");
const btnsShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Visualización de elementos en consola:
console.log(modal, btnsShowModal, btnCloseModal, overlay);

// Funciones para mostrar y ocultar modales:
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Eventos de modales:
btnsShowModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
