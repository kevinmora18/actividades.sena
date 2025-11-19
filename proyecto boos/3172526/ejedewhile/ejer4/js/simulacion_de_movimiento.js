/*
   Título: Simulación de Movimiento con la Primera Ley de Newton
   Autor: kevin mora
   Fecha: 1 de Noviembre 2025
*/

function accelerationCalc(force, mass) {
    return force / mass; 
}

function simulateMotion() {
    let i = 0;
    const t = 1; 
    let v = 0;   
    let totalDistance = 0;
    let secondsMoving = 0;

    const alertBox = document.getElementById("alert");
    const container = document.getElementById("forceContainer");

    const mass = parseFloat(document.getElementById("mass").value);
    if (isNaN(mass) || mass <= 0) {
        alertBox.textContent = "Por favor, ingrese una masa válida mayor que 0.";
        return;
    }

    let forceInputs = document.querySelectorAll("input[id^='force']");

    while (i < forceInputs.length) {
        let force = parseFloat(forceInputs[i].value);

        if (isNaN(force)) {
            i++;
            continue;
        }

        if (force === 0) {
            break;
        }


        let a = accelerationCalc(force, mass);


        v = v + a * t;
        totalDistance += v * t;
        secondsMoving += t;

        alertBox.textContent =
            "Tiempo: " + secondsMoving + " s | " +
            "Velocidad: " + v.toFixed(2) + " m/s | " +
            "Distancia total: " + totalDistance.toFixed(2) + " m";

        i++;
    }

    if (i === forceInputs.length && parseFloat(forceInputs[i - 1].value) !== 0 && !isNaN(parseFloat(forceInputs[i - 1].value))) {
        let newInput = document.createElement("input");
        newInput.type = "number";
        newInput.className = "form-control mt-2";
        newInput.placeholder = "Ingrese nueva fuerza (N)";
        newInput.id = "force" + i;
        container.appendChild(newInput);
    }


    if (i < forceInputs.length && parseFloat(forceInputs[i].value) === 0) {
        if (secondsMoving > 0) {
            alertBox.textContent =
                " Movimiento detenido. Tiempo total: " + secondsMoving + " s | " +
                "Distancia total recorrida: " + totalDistance.toFixed(2) + " m";
        } else {
            alertBox.textContent = "El objeto permaneció en reposo (sin movimiento).";
        }
    }
}