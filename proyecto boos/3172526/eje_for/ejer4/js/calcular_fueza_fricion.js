/*
   Título: Cálculo de la Fuerza de Fricción
   Autor: Kevin Mora
   Fecha: 2 de noviembre de 2025
*/

function generarCampos() {
    const numValores = parseInt(document.getElementById("numValores").value);
    const contenedor = document.getElementById("entradas");
    contenedor.innerHTML = "";

    if (isNaN(numValores) || numValores <= 0) {
        contenedor.innerHTML = "<p>Por favor, ingresa una cantidad válida de masas.</p>";
        return;
    }

    for (let i = 1; i <= numValores; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.className = "form-control mt-2";
        input.placeholder = `Masa ${i} (kg)`;
        input.id = `masa${i}`;
        contenedor.appendChild(input);
    }
}

function calcularFriccion() {
    const numValores = parseInt(document.getElementById("numValores").value);
    const mu = parseFloat(document.getElementById("coeficiente").value);
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; 

    if (isNaN(numValores) || numValores <= 0) {
        resultado.innerHTML = "<p>Primero genera los campos de masa.</p>";
        return;
    }

    if (isNaN(mu) || mu <= 0) {
        resultado.innerHTML = "<p>Por favor, ingresa un coeficiente de fricción válido.</p>";
        return;
    }

    let salida = "<h5>Resultados:</h5>";
    const g = 9.8;

    for (let i = 1; i <= numValores; i++) {
        const masa = parseFloat(document.getElementById(`masa${i}`).value);

        if (isNaN(masa) || masa <= 0) {
            salida += `<p>Masa ${i}: valor no válido.</p>`;
            continue;
        }

        const normal = masa * g;
        const friccion = mu * normal;
        salida += `<p>Masa ${i}: N = ${normal.toFixed(2)} N | F_fricción = ${friccion.toFixed(2)} N</p>`;
    }

    resultado.innerHTML = salida;
}
