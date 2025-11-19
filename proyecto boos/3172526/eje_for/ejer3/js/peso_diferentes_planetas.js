/*
   Título: Cálculo del Peso en un Planeta Elegido
   Autor: Kevin Mora
   Fecha: 2 de noviembre de 2025
*/

function calcularPesoPlaneta() {
    const masa = parseFloat(document.getElementById("masa").value);
    const planetaSeleccionado = document.getElementById("planeta").value;
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpiar antes de mostrar nuevos datos

    if (isNaN(masa) || masa <= 0) {
        resultado.innerHTML = "<p>Por favor, ingresa una masa válida.</p>";
        return;
    }

    if (planetaSeleccionado === "") {
        resultado.innerHTML = "<p>Por favor, selecciona un planeta.</p>";
        return;
    }

    let gravedad;
    let nombrePlaneta;

    switch (planetaSeleccionado) {
        case "tierra":
            gravedad = 9.8;
            nombrePlaneta = "Tierra";
            break;
        case "marte":
            gravedad = 3.7;
            nombrePlaneta = "Marte";
            break;
        case "jupiter":
            gravedad = 24.8;
            nombrePlaneta = "Júpiter";
            break;
        case "luna":
            gravedad = 1.6;
            nombrePlaneta = "Luna";
            break;
    }

    const peso = masa * gravedad;
    resultado.innerHTML = `<p>El peso del objeto en <strong>${nombrePlaneta}</strong> es <strong>${peso.toFixed(2)} N</strong>.</p>`;
}
