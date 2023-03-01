// Declaración de variables:
const modal = document.querySelector(".modal");
const btnsShowModal = document.querySelectorAll("#botones");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

// Visualización de elementos en consola:
// console.log(modal, btnsShowModal, btnCloseModal, overlay);

// Funciones para mostrar y ocultar modales (quitado o añadiendo la clase hidden):
const openModal = function (e) {
  console.log(e, e.target);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Eventos de modales aplicados a las variables:
btnsShowModal.forEach((btn) => btn.addEventListener("click", openModal));
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// Cerrar modales mediante la tecla Escape:
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
  e.stopPropagation();
});
