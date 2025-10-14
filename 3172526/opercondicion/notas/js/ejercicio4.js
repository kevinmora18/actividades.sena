/*
ejrcisio 4
Kevin mora
20 de 09 2025
*/

let nota1 = 4.2;
let nota2 = 3.8;
let nota3 = 2.9;
let porcentaje1 = nota1 * 0.20;
let porcentaje2 = nota2 * 0.35;
let porcentaje3 = nota3 * 0.45;

let notaFinal = porcentaje1 + porcentaje2 + porcentaje3;


console.log("Nota 1 (20%): " + porcentaje1);
console.log("Nota 2 (35%): " + porcentaje2);
console.log("Nota 3 (45%): " + porcentaje3);
console.log("Nota Final: " + notaFinal);

if (notaFinal > 4.5) {
    console.log("Clasificación: Nota Superior");
} else if (notaFinal >= 3.5 && notaFinal <= 4.5) {
    console.log("Clasificación: Nota Buena");
} else if (notaFinal >= 3 && notaFinal < 3.5) {
    console.log("Clasificación: Nota Media");
} else {
    console.log("Clasificación: Nota Mala");
}
