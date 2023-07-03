// Obtener el formulario y sus elementos
const form = document.querySelector("form");
const tipoInput = document.querySelector("#tipo");
const descripcionInput = document.querySelector("#descripcion");
const evidenciaInput = document.querySelector("#evidencia");

// Escuchar el evento de envío del formulario
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  const tipo = tipoInput.value;
  const descripcion = descripcionInput.value;
  const evidencia = evidenciaInput.files[0];

  // Crear un objeto con la denuncia
  const denuncia = {
    tipo: tipo,
    descripcion: descripcion,
    evidencia: evidencia.name,
  };

  // Guardar la denuncia en LocalStorage
  localStorage.setItem("denuncia", JSON.stringify(denuncia));

  // Limpiar los campos del formulario
  tipoInput.value = "";
  descripcionInput.value = "";
  evidenciaInput.value = "";

  // Mostrar mensaje de éxito o redireccionar a una página de confirmación
  alert("Denuncia enviada con éxito");
});
