/*
   Título: Cálculo de la Fuerza Paralela en un Plano Inclinado
   Autor: Kevin Mora
   Fecha: 2 de noviembre de 2025
*/

function calcularFuerzaParalela() {
    const masa = parseFloat(document.getElementById("masa").value);
    const anguloInicio = parseFloat(document.getElementById("anguloInicio").value);
    const anguloFin = parseFloat(document.getElementById("anguloFin").value);
    const paso = parseFloat(document.getElementById("paso").value);
    const resultados = document.getElementById("resultados");

    resultados.innerHTML = "";

    if (isNaN(masa) || masa <= 0 || isNaN(anguloInicio) || isNaN(anguloFin) || isNaN(paso) || paso <= 0) {
        resultados.innerHTML = "<p>Por favor, ingresa valores válidos.</p>";
        return;
    }

    const g = 9.8; // gravedad terrestre
    let salida = "<h5>Resultados:</h5>";

    // Calcular F_paralela = m * g * sin(θ)
    for (let angulo = anguloInicio; angulo <= anguloFin; angulo += paso) {
        const radianes = angulo * (Math.PI / 180); // convertir a radianes
        const fuerza = masa * g * Math.sin(radianes);
        salida += `<p>Ángulo ${angulo}° → F_paralela = ${fuerza.toFixed(2)} N</p>`;
    }

    resultados.innerHTML = salida;
}
