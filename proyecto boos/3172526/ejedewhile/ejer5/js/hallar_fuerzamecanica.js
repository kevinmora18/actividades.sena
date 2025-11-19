/*
   Título: Cálculo del Trabajo Mecánico
   Autor: kevin mora
   Fecha: 1 de Noviembre 2025
*/

function workCalc(force, distance) {
    return force * distance; // W = F × d
}

function calcWork() {
    let totalWork = 0;
    let count = 0;
    let i = 0;

    const containerF = document.getElementById("forceContainer");
    const containerD = document.getElementById("distanceContainer");
    const alertBox = document.getElementById("alert");

    let forceInputs = document.querySelectorAll("input[id^='force']");
    let distanceInputs = document.querySelectorAll("input[id^='distance']");

    while (i <= forceInputs.length && i <= distanceInputs.length) {
        let force = parseFloat(forceInputs[i].value);
        let distance = parseFloat(distanceInputs[i].value);

        if (isNaN(force) || isNaN(distance)) {
            i++;
            continue;
        }

        if (distance < 0) {
            break;
        }

        let work = workCalc(force, distance);
        totalWork += work;
        count++;

        alertBox.textContent =
            " Trabajo actual: " + work.toFixed(2) + " J | Total acumulado: " +
            totalWork.toFixed(2) + " J | Cálculos: " + count;

        i++;
    }
    

    if (
        i === forceInputs.length &&
        parseFloat(distanceInputs[i - 1].value) >= 0 &&
        !isNaN(parseFloat(forceInputs[i - 1].value))
    ) {

        let newForce = document.createElement("input");
        newForce.type = "number";
        newForce.className = "form-control mt-2";
        newForce.placeholder = "Ingrese nueva fuerza (N)";
        newForce.id = "force" + i;
        containerF.appendChild(newForce);

        let newDistance = document.createElement("input");
        newDistance.type = "number";
        newDistance.className = "form-control mt-2";
        newDistance.placeholder = "Ingrese nueva distancia (m)";
        newDistance.id = "distance" + i;
        containerD.appendChild(newDistance);
    }


    if (i <= distanceInputs.length && parseFloat(distanceInputs[i].value) <= 0) {
        if (count > 0) {
            alertBox.textContent =
                " Cálculo finalizado. Trabajo total: " + totalWork.toFixed(2) + 
                " J | Cálculos realizados: " + count;
        } else {
            alertBox.textContent = "No se realizaron cálculos válidos.";
        }
    }
}