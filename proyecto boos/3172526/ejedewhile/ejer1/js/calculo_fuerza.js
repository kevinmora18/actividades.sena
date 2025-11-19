/* Titulo: Force - Function
Autor: kevin mora 
Fecha: 10 de Octubre 2025*/

function forceCalc(mass, acceleration) {
    return mass * acceleration;
}

function readMassAcceleration() {
    let mass = parseFloat(document.getElementById("mass").value);
    let acceleration = parseFloat(document.getElementById("acceleration").value);

    let totalForce = 0;
    let count = 0;

    const container = document.getElementById("newMass");
    const container1 = document.getElementById("newAcceleration");
    const alertBox = document.getElementById("alert");

    let massInputs = document.querySelectorAll("input[id^='mass']");
    let accelerationInputs = document.querySelectorAll("input[id^='acceleration']");
    let i=0;

    while (i < massInputs.length && i < accelerationInputs.length) {
        mass = parseFloat(massInputs[i].value);
        acceleration = parseFloat(accelerationInputs[i].value);

        if (isNaN(mass) && isNaN(acceleration)) {
            i++;
            continue
        } 

        if (mass < 0 && acceleration < 0) {
            break;
        } 

        totalForce += forceCalc(mass, acceleration);
        count++;
        i++;
    }

    if (i === massInputs.length && !isNaN(parseFloat(massInputs[i - 1].value)) && parseFloat(massInputs[i - 1].value) >= 0 && i === accelerationInputs.length && !isNaN(parseFloat(accelerationInputs[i - 1].value)) && parseFloat(accelerationInputs[i - 1].value) >= 0) {
        let newInput = document.createElement("input");
        newInput.type = "number";
        newInput.className = "form-control mt-2";
        newInput.placeholder = "New mass";
        newInput.id = "mass" + i;
        container.appendChild(newInput);
        let newInput1 = document.createElement("input");
        newInput1.type = "number";
        newInput1.className = "form-control mt-2";
        newInput1.placeholder = "New acceleration";
        newInput1.id = "acceleration" + i;
        container1.appendChild(newInput1);
    }

    if (i < massInputs.length && parseFloat(massInputs[i].value) < 0 && i < accelerationInputs.length && parseFloat(accelerationInputs[i].value) < 0) {
        if (count > 0) {
            alertBox.textContent = "Total force: " + totalForce.toFixed(2)+ " | Calcs: " + count;
        } 
    }
}