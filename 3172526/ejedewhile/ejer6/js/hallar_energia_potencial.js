/*

   Ejercicio: areas 
   Fecha: 23 de sep 2025
   Autor:kevin mora 
*/
let epg
let altura=prompt("ingrese una altura") 
let masa=prompt("ingresee la masa del objecto")
let aceleracion_gravedad = 9.81
let epgTotal = 0
let count = 0

while(altura > 0){

epg = altura * masa * aceleracion_gravedad
epgTotal = epgTotal + epg
count = count + 1

altura=prompt("ingrese una altura") 
masa=prompt("ingresee la masa del objecto")

console.log('la energia potencial de el objeto es de:' +epg);
console.log('el total de la energia potencial es de:' +epgTotal);
console.log('el contador es de:' +count);

}