var element = document.querySelector(".formulario-login");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validaciones();
});