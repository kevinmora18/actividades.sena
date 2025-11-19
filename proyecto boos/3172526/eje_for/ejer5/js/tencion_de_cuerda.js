/*
   Título: Cálculo de la Tensión en una Cuerda
   Autor: Kevin Mora
   Fecha: 2 de noviembre de 2025
*/

function generarCampos() {
    const numObjetos = parseInt(document.getElementById("numObjetos").value);
    const contenedor = document.getElementById("entradas");
    contenedor.innerHTML = ""; // limpiar campos anteriores

    if (isNaN(numObjetos) || numObjetos <= 0) {
        contenedor.innerHTML = "<p>Por favor, ingresa una cantidad válida de objetos.</p>";
        return;
    }

    // Crear campos de entrada para las masas
    for (let i = 1; i <= numObjetos; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "form-control mt-2";
        input.placeholder = `Masa del objeto ${i} (kg)`;
        input.id = `masa${i}`;
        contenedor.appendChild(input);
    }
}

function calcularTension() {
    const numObjetos = parseInt(document.getElementById("numObjetos").value);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (isNaN(numObjetos) || numObjetos <= 0) {
        resultado.innerHTML = "<p>Primero genera los campos de masa.</p>";
        return;
    }

    const g = 9.8; // gravedad en la Tierra
    let salida = "<h5>Resultados:</h5>";

    for (let i = 1; i <= numObjetos; i++) {
        const masa = parseFloat(document.getElementById(`masa${i}`).value);

        if (isNaN(masa) || masa <= 0) {
            salida += `<p>Objeto ${i}: masa no válida.</p>`;
            continue;
        }

        const tension = masa * g;
        salida += `<p>Objeto ${i}: T = ${tension.toFixed(2)} N</p>`;
    }

    resultado.innerHTML = salida;
}
