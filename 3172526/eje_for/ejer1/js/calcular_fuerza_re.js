/*

   Ejercicio: areas 
   Fecha: 23 de sep 2025
   Autor:kevin mora 
*/
let number=prompt("ingresa la cantidad de calculos a realizar")
let mass=prompt("ingrese la masa")
let aceleracion=prompt("ingrese la aceleracion")
let fuer_resultante
let count=0


for(count=1;count<=number;count++){
fuer_resultante = aceleracion * mass
mass=prompt("ingrese la masa")
aceleracion=prompt("ingrese la aceleracion")

console.log(fuer_resultante)
console.log(count)
}

