const span = document.querySelectorAll("span");
const button = document.querySelector(".humberger_button");

button.addEventListener("click", () => {
  span.classList.toggle(".active");
})