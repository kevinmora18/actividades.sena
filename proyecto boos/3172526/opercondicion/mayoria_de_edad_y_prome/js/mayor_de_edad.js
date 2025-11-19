/*
kevin mora 
23 09 2025
ejercisio 2
*/
function mayorDeEdad() {
let ageOne = parseFloat(documentElementById("ageOne").value, 10);
let ageTwo = parseFloat(documentElementById("ageTwo").value, 10);
let ageThree = parseFloat(documentElementById("ageThree").value, 10);


average = (ageOne + ageTwo + ageThree)/3

let mensaje = "";
let mensaje1 = "";
let mensaje2 = "";
let mensaje3 = "";

if(ageOne >= 18){
mensaje1 = `es mayor de edad  ${ageOne}`;}
else{
mensaje1 = `es menor de edad  ${ageOne}`;}

if(ageTwo >= 18){
mensaje2 = `es mayor de edad  ${ageTwo}`;}
else{
mensaje2 = `es menor de edad  ${ageTwo}`;}

if(ageThree >= 18){
mensaje3 = `es mayor de edad  ${ageThree}`;}
else{
mensaje3 = `es menor de edad  ${ageThree}`;}

if(average >=18){
mensaje = `el promedio de edad es mayor de edad  ${average}`;}
else{
mensaje = `el promedio de edad es menor de edad  ${average}`;}


document.getElementById("resul").innerHTML = "" + mensaje;
document.getElementById("resul1").innerHTML = "age1 " + mensaje1;
document.getElementById("resul2").innerHTML = "age2 " + mensaje2;
document.getElementById("resul3").innerHTML = "age3 " + mensaje3;
}