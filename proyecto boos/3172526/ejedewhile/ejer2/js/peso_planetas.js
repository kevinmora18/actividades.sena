/* 
   Título: Cálculo del Peso en Diferentes Planetas
   Autor: kevin mora
   Fecha: 1 de Noviembre 2025
*/

function weightCalc(mass, gravity) {
    return mass * gravity;
}

function calcPlanetWeight() {
    let totalWeight = 0;
    let count = 0;
    let i = 0;

    const containerMass = document.getElementById("massContainer");
    const containerPlanet = document.getElementById("planetContainer");
    const alertBox = document.getElementById("alert");

    let massInputs = document.querySelectorAll("input[id^='mass']");
    let planetSelects = document.querySelectorAll("select[id^='planet']");

    while (i < massInputs.length && i < planetSelects.length) {
        let mass = parseFloat(massInputs[i].value);
        let planet = planetSelects[i].value;

        if (isNaN(mass)) {
            i++;
            continue;
        }

        if (mass < 0) {
            break;
        }

        let gravity = 0;
        if (planet === "tierra") gravity = 9.81;
        else if (planet === "marte") gravity = 3.71;
        else if (planet === "jupiter") gravity = 24.79;
        else {
            i++;
            continue;
        }

        let weight = weightCalc(mass, gravity);
        totalWeight += weight;
        count++;
        i++;
    }


    if (
        i === massInputs.length &&
        parseFloat(massInputs[i - 1].value) >= 0 &&
        planetSelects[i - 1].value !== ""
    ) {

        let newMass = document.createElement("input");
        newMass.type = "number";
        newMass.className = "form-control mt-2";
        newMass.placeholder = "Ingrese masa (kg)";
        newMass.id = "mass" + i;
        containerMass.appendChild(newMass);

        let newPlanet = document.createElement("select");
        newPlanet.className = "form-control mt-2";
        newPlanet.id = "planet" + i;
        newPlanet.innerHTML = `
            <option value="">Seleccione...</option>
            <option value="tierra"> Tierra (9.81 m/s²)</option>
            <option value="marte"> Marte (3.71 m/s²)</option>
            <option value="jupiter"> Júpiter (24.79 m/s²)</option>
        `;
        containerPlanet.appendChild(newPlanet);
    }

    if (i < massInputs.length && parseFloat(massInputs[i].value) < 0) {
        if (count > 0) {
            alertBox.textContent =
                "Peso total acumulado: " + totalWeight.toFixed(2) + " N | Cálculos: " + count;
        } else {
            alertBox.textContent = "No se realizaron cálculos válidos.";
        }
    }
}