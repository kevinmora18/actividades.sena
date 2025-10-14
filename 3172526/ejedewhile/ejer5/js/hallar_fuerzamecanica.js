/*

   Ejercicio: areas 
   Fecha: 23 de sep 2025
   Autor:kevin mora 
*/
let trabajoMecanico
let fuerzaAplicada =prompt("ingrese la fuerza que aplico",)
let distanciaRecorrida =prompt("ingrese la distancia recorrida",)
let count =0
let trabMecatotal =0
let numeroCero =0;


while(distanciaRecorrida == numeroCero){

trabajoMecanico = fuerzaAplicada * distanciaRecorrida;
trabMecatotal = trabajoMecanico + trabMecatotal;
count = count +1;


distanciaRecorrida=prompt("ingrese la distancia recorrida",)
fuerzaAplicada=prompt("ingrese la fuerza que aplico",)



console.log('trabajoMecanico:'+trabajoMecanico);
console.log('count:'+count);
console.log('trabMecatotal:'+trabMecatotal);
}