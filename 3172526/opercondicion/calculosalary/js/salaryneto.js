/*
kevin mora
25 09 25
ejercisio salatrio tolal
*/
let daysTrabajados=prompt("ingrese los dias que trabajo")
let valuedays=prompt("ingrese el pago de un dia")   
let salary=daysTrabajados*valuedays
let salaryMinimo=1500000
let subsidioTransporte = 114000;
let salud = salary * 0.12;
let pension = salary * 0.16;
let arl = salary * 0.052;
let retencion = 0;
let subsidio = 0;


if (salary < 2 * salaryMinimo) {
    subsidio = subsidioTransporte;
}


if (salary > 4 * salaryMinimo) {
    retencion = salary * 0.04;
}


let totalPagar = salary + subsidio - salud - pension - arl - retencion;

console.log("salary base: $" + salary);
console.log("Subsidio de transporte: $" + subsidio);
console.log("Descuento de salud (12%): $" + salud);
console.log("Descuento de pension (16%): $" + pension);
console.log("Descuento de ARL (5.2%): $" + arl);
console.log("Retencion (4% si aplica): $" + retencion);
console.log("Total a pagar: $" + totalPagar);
