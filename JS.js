document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.encuesta-form');
  const toastError = document.getElementById('toast');
  const toastExito = document.getElementById('toastExito');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Siempre se bloquea primero

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const pais = document.getElementById('pais');
    const password = document.getElementById('password');
    const edad = form.querySelector('select');
    const recomendar = form.querySelector('input[name="recomendar"]:checked');
    const aceptar = form.querySelector('input[type="checkbox"]:checked');

    const camposLlenos =
      nombre.value.trim() &&
      email.value.trim() &&
      pais.value.trim() &&
      password.value.trim() &&
      edad.value &&
      recomendar &&
      aceptar;

    if (!camposLlenos) {
      mostrarToast(toastError);
    } else {
      mostrarToast(toastExito);

      // Simula envío (puedes reemplazar por un fetch o reset)
      setTimeout(() => {
        form.reset(); // Limpia el formulario
      }, 500);
    }
  });

  function mostrarToast(toastElement) {
    toastElement.classList.add("show");
    setTimeout(() => {
      toastElement.classList.remove("show");
    }, 3000);
  }
});