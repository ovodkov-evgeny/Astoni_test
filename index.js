const popup = document.querySelector(".success-popup");
const form = document.querySelector(".form");
const closeBtn = document.querySelector(".success-popup__btn");

function openPopupHandler(evt) {
  evt.preventDefault();
  popup.classList.remove("visually-hidden");
}

function closePopupHandler(evt) {
  evt.preventDefault();
  popup.classList.add("visually-hidden");
}

form.addEventListener("submit", function (evt) {
  evt.target.reset();
  openPopupHandler(evt);
});

closeBtn.addEventListener("click", closePopupHandler);
