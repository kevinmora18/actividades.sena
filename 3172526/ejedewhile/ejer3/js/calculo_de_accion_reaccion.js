/*

   Ejercicio: fuerza de reaccon
   Fecha: 23 de sep 2025
   Autor:kevin mora 
*/
let fuerzaReaccion;
let fuerzaAplicada =prompt("ingrese la fuerza que aplico",)
let fuerzaReacciontotal =0;
let count =0;
let numeroCero =0;


while(true){



fuerzaReaccion = fuerzaAplicada * -1
count = count +1;
fuerzaReacciontotal = fuerzaReacciontotal + fuerzaReaccion




if (fuerzaReaccion === 0) {
break
}
fuerzaAplicada=prompt("ingrese la distancia recorrida",)


console.log('fuerzaReaccion:'+fuerzaReaccion)
console.log('count:'+count)
console.log('fuerzaReacciontotal:'+fuerzaReacciontotal)
}
