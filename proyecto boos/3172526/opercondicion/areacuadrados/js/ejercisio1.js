/*
ejrcisio 1
Kevin mora
20 de 09 2025
*/
//declaración de variables
// Función para calcular y mostrar el área mayor de tres cuadrados
function average() {
    // Leer valores de los inputs
    let noteOne = parseInt(document.getElementById("noteOne").value, 10);
    let noteTwo = parseInt(document.getElementById("noteTwo").value, 10);
    let noteThree = parseInt(document.getElementById("noteThree").value, 10);

    // Validar entradas: si no son números, poner 0

    // Calcular áreas
    let areaOne = noteOne * noteOne;
    let areaTwo = noteTwo * noteTwo;
    let areaThree = noteThree * noteThree;

    // Verificar si todas las áreas son iguales
    if (areaOne === areaTwo && areaOne === areaThree) {
        document.getElementById("result").innerHTML = `Todas las áreas son iguales: ${areaOne}`;
        return;
    }

    // Identificar cuál área es mayor
   
    let mensaje = "";
    if (areaOne === areaTwo && areaOne === areaThree) {
        mensaje = `area is equal: ${areaOne}`;
    } else if (areaOne === areaTwo && areaOne > areaThree) {
        mensaje = `areaOne and areaTwo ${areaTwo} ${areaOne}`;
    }
     else if (areaOne === areaTwo && areaTwo > areaThree) {
        mensaje = `El área mayor es la tercera: ${areaOne} ${areaThree}`;
    }
    else if (areaTwo === areaThree && areaTwo > areaOne) {
        mensaje = `El área mayor es la segunda y tercera: ${areaTwo} ${areaThree}`;
    }
    else if (areaOne > areaTwo && areaOne > areaThree) {
        mensaje = `El área mayor es la primera: ${areaOne}`;
    }
    else if (areaTwo > areaOne && areaTwo > areaThree) {
        mensaje = `El área mayor es la segunda: ${areaTwo}`;
    }
    else {
        mensaje = `El área mayor es la tercera: ${areaThree}`;
    }



    // Mostrar el resultado
    document.getElementById("result").innerHTML = mensaje;
}