/*

   Ejercicio: fuerza de reaccon
   Fecha: 23 de sep 2025
   Autor:kevin mora 
*/
let mass=prompt("ingrece una mass")
let acceleration=prompt("ingrece un acceleration:")
let force
let forceTotal=0
let count=0

while(mass > 0 && acceleration > 0){

force = mass * acceleration
forceTotal = force + forceTotal 
count = count + 1 

mass=prompt("ingrese una mass",)
acceleration=prompt("ingrese la acceleration",)

console.log('la fuerza es igual:' +force)
console.log('la fuerza total es::' +forceTotal)
console.log('el count es de:' +count)
}