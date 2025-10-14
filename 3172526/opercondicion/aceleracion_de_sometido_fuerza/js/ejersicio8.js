  // === PARTE 1: Fuerza de fricción ===
        let masa = prompt("Ingrese la masa del objeto (kg):");
        let mu = prompt("Ingrese el coeficiente de friccion (μ):");
        let gravedad = prompt("Ingrese la aceleración gravitacional (m/s²):");
            let fuerzaNormal = masa * gravedad;
            let fuerzaFriccion = mu * fuerzaNormal;

            console.log("----- Fuerza de Fricci0n -----");
            console.log("Masa: " + masa + " kg");
            console.log("Coeficiente de fricci0n: " + mu);
            console.log("Gravedad: " + gravedad + " m/s²");
            console.log("Fuerza normal: " + fuerzaNormal+ " N");
            console.log("Fuerza de friccion: " + fuerzaFriccion + " N");

            if (fuerzaFriccion > 50) {
                console.log(" La fricción es ALTA.");
            } else {
                console.log(" La fricción es BAJA.");
            }
        
