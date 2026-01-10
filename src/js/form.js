console.log('>> Ready form:)');

const inputs = document.querySelectorAll(".campo");
const parrafo = document.getElementById("form_container-result");

inputs.forEach(input => {
input.addEventListener('input', manejarInput);
});

function manejarInput(event) {
  const input = event.currentTarget;
  const campoResultado = document.getElementById(input.dataset.id);
  campoResultado.textContent = input.value;
  
}

