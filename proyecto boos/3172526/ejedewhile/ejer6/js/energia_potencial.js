/*
   Título: Cálculo de la Energía Potencial Gravitatoria
   Autor: Julian
   Fecha: 1 de Noviembre 2025
*/

function epgCalc(mass, height) {
    const g = 9.81; 
    return mass * g * height; 
}

function calcEpg() {
    let totalEpg = 0;
    let count = 0;
    let i = 0;

    const containerM = document.getElementById("massContainer");
    const containerH = document.getElementById("heightContainer");
    const alertBox = document.getElementById("alert");

    let massInputs = document.querySelectorAll("input[id^='mass']");
    let heightInputs = document.querySelectorAll("input[id^='height']");

    while (i < massInputs.length && i < heightInputs.length) {
        let mass = parseFloat(massInputs[i].value);
        let height = parseFloat(heightInputs[i].value);

        if (isNaN(mass) || isNaN(height)) {
            i++;
            continue;
        }

        if (height < 0) {
            break;
        }

        let epg = epgCalc(mass, height);
        totalEpg += epg;
        count++;

        alertBox.textContent =
            " Energía actual: " + epg.toFixed(2) + " J | Total acumulado: " +
            totalEpg.toFixed(2) + " J | Cálculos: " + count;

        i++;
    }


    if (
        i === massInputs.length &&
        parseFloat(heightInputs[i - 1].value) >= 0 &&
        !isNaN(parseFloat(massInputs[i - 1].value))
    ) {
  
        let newMass = document.createElement("input");
        newMass.type = "number";
        newMass.className = "form-control mt-2";
        newMass.placeholder = "Ingrese nueva masa (kg)";
        newMass.id = "mass" + i;
        containerM.appendChild(newMass);


        let newHeight = document.createElement("input");
        newHeight.type = "number";
        newHeight.className = "form-control mt-2";
        newHeight.placeholder = "Ingrese nueva altura (m)";
        newHeight.id = "height" + i;
        containerH.appendChild(newHeight);
    }


    if (i < heightInputs.length && parseFloat(heightInputs[i].value) < 0) {
        if (count > 0) {
            alertBox.textContent =
                "Cálculo finalizado. Energía total acumulada: " + totalEpg.toFixed(2) +
                " J | Cálculos realizados: " + count;
        } else {
            alertBox.textContent = "No se realizaron cálculos válidos.";
        }
    }
}