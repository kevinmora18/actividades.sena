/*
   Título: Tercera Ley de Newton (Acción y Reacción)
   Autor: kevin mora
   Fecha: 1 de Noviembre 2025
*/

function reactionForce(force) {
    return -force;
}

function calcNewtonLaw() {
    let totalAppliedForce = 0;
    let count = 0;
    let i = 0;

    const container = document.getElementById("forceContainer");
    const alertBox = document.getElementById("alert");

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

        let reaction = reactionForce(force);

        totalAppliedForce += force;
        count++;

        alertBox.textContent = 
            "Fuerza aplicada: " + force.toFixed(2) + " N | Fuerza de reacción: " + reaction.toFixed(2) + " N";

        i++;
    }


    if (i === forceInputs.length && parseFloat(forceInputs[i - 1].value) !== 0 && !isNaN(parseFloat(forceInputs[i - 1].value))) {
        let newInput = document.createElement("input");
        newInput.type = "number";
        newInput.className = "form-control mt-2";
        newInput.placeholder = "Ingrese fuerza (N)";
        newInput.id = "force" + i;
        container.appendChild(newInput);
    }

  
    if (i < forceInputs.length && parseFloat(forceInputs[i].value) === 0) {
        if (count > 0) {
            alertBox.textContent = 
                " Total de fuerzas aplicadas: " + totalAppliedForce.toFixed(2) + " N | Cálculos: " + count;
        } else {
            alertBox.textContent = "No se realizaron cálculos válidos.";
        }
    }
}