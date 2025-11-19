
function calcularFuerza() {
let mass = parseFloat(document.getElementById("mass").value, 10);
let acceleration = parseFloat(document.getElementById("acceleration").value, 10);

let force = mass * acceleration;

// Determinar si la fuerza es alta o baja       
let mensaje = "";   


if (force >= 100) {
    mensaje = `la fuerza es alta: ${force}`;
} else {
    mensaje = `la fuerza es baja: ${force}`;
}

document.getElementById("resul").innerHTML = "fuerza es " + mensaje;
}