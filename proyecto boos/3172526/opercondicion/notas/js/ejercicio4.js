/*
ejrcisio 4
Kevin mora
20 de 09 2025
*/

function calNotas() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);



 porcentaje1 = nota1 * 0.20;
 porcentaje2 = nota2 * 0.35;
 porcentaje3 = nota3 * 0.45;

let notaFinal = (porcentaje1 + porcentaje2 + porcentaje3)/3;

mensaje = "";
mensajeN1 = "";
mensajeN2 = "";
mensajeN3 = ""; 
mensajeValor = "";

mensajeN1 = `Nota 1 (20%): ${porcentaje1}`;
mensajeN2 = `Nota 2 (35%): ${porcentaje2}`;
mensajeN3 = `Nota 3 (45%): ${porcentaje3}`;
mensaje = `Nota Final: ${notaFinal}`;

if (notaFinal > 4.5) {
    mensajeValor = `Nota Superior`;
} else if (notaFinal >= 3.5 && notaFinal <= 4.5) {
    mensajeValor = `Nota Buena`;
} else if (notaFinal >= 3 && notaFinal < 3.5) {
    mensajeValor = `Nota Media`;
} else {
    mensajeValor = `Nota Mala `;
}
document.getElementById("resul1").innerHTML = "resultado: " + mensajeN1;
document.getElementById("resul2").innerHTML = "resultado: " + mensajeN2;
document.getElementById("resul3").innerHTML = "resultado: " + mensajeN3;
document.getElementById("resul").innerHTML = "resultado: " + mensaje;
document.getElementById("resulValor").innerHTML = "resultado: " + mensajeValor;
}
