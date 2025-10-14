
let masa = parseFloat(prompt("Ingrese la masa del objeto en kilogramos (kg):"));
let aceleracion = parseFloat(prompt("Ingrese la aceleracion en metros por segundo al cuadrado (m/s²):"));

let fuerza = masa * aceleracion;

console.log("Fuerza calculada: " + fuerza);


if (fuerza >= 100) {
    console.log("La fuerza es alta");
} else {
    console.log("La fuerza es baja");
}