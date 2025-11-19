/*
kevin mora
25 09 25
ejercisio salatrio tolal
*/
function salarioNeto(){  
let daysTrabajados = parseFloat(document.getElementById("daysTrabajados").value);
let valuedays = parseFloat(document.getElementById("valuedays").value);
let salaryMinimo = 1600000;
let subsidioTransporte = 114000;

let salary = daysTrabajados * valuedays;

let retencion = 0;
let subsidio = 0;

let salud = salary * 0.12;
let pension = salary * 0.16;
let arl = salary * 0.052;



let totalPagar = salary + subsidio - salud - pension - arl - retencion;


if (salary < 2 * salaryMinimo) {
    subsidio = subsidioTransporte;
}


if (salary > 4 * salaryMinimo) {
    retencion = salary * 0.04;
}



let mensaje1 = `salary base: ${salary}`;
let mensaje2 = `subsidio de transporte: ${subsidio}`;
let mensaje3 = `descuento de salud (12%): ${salud}`;
let mensaje4 = `descuento de pension (16%): ${pension}`;
let mensaje5 = `descuento del ARL: ${arl}`;
let mensaje6 = `retencion (4% si aplica): $ ${retencion}`;
let mensaje7 = `Toltaal a pagar: ${totalPagar}`;

document.getElementById("mensaje1").innerHTML = "" + mensaje1; 
document.getElementById("mensaje2").innerHTML = "" + mensaje2; 
document.getElementById("mensaje3").innerHTML = "" + mensaje3; 
document.getElementById("mensaje4").innerHTML = "" + mensaje4; 
document.getElementById("mensaje5").innerHTML = "" + mensaje5; 
document.getElementById("mensaje6").innerHTML = "" + mensaje6; 
document.getElementById("mensaje7").innerHTML = "" + mensaje7; 
}