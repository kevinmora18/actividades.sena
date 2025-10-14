

        let masa1 = prompt("Ingrese la masa del primer cuerpo (kg):");
        let masa2 = prompt("Ingrese la masa del segundo cuerpo (kg):");
        let gravedad = 9.81;

        let fuerza1 = masa1 * gravedad;
        let fuerza2 = masa2 * gravedad;

 
        console.log("Masa 1: " + masa1 + " kg -> Fuerza: " + fuerza1+ " N");
        console.log("Masa 2: " + masa2 + " kg -> Fuerza: " + fuerza2+ " N");

        // Comparar fuerzas
        if (fuerza1 > fuerza2) {
            console.log("El primer cuerpo ejerce mayor fuerza gravitacional.");
        } else if (fuerza2 > fuerza1) {
            console.log("El segundo cuerpo ejerce mayor fuerza gravitacional.");
        } else {
            console.log("Ambos cuerpos ejercen la misma fuerza gravitacional.");
        }