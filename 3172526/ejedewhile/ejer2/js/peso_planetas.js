        let sumaPesos = 0;
        let contador = 0;
        let masa = prompt("Ingrese la masa del objeto (kg). Número negativo para salir:");

        while (masa >= 0) {
            let planeta = prompt(
                "Seleccione el planeta:\n" +
                "1. Tierra\n" +
                "2. Marte\n" +
                "3. Júpiter"
            );

            let gravedad = 0;

            if (planeta === "1") {
                gravedad = 9.81;
            } else if (planeta === "2") {
                gravedad = 3.71;
            } else if (planeta === "3") {
                gravedad = 24.79;
            } else {
                console.log(" Opción inválida.");
                masa = prompt("Ingrese la masa del objeto (kg). Número negativo para salir:")
            }

            let peso = masa * gravedad;
            console.log(" Peso calculado: " + peso+ " N");

            sumaPesos = sumaPesos + peso;
            contador = contador + 1;

            masa = prompt("Ingrese otra masa del objeto (kg). Número negativo para salir:");
        }

        console.log("======= RESULTADO FINAL =======");
        console.log("Total de calculos realizados: " + contador);
        console.log("Suma total de pesos: " + sumaPesos + " N");
        console.log("Programa finalizado.");