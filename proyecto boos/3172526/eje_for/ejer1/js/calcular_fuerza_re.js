/* 
   Ejercicio 1: Cálculo de la Fuerza Resultante (Segunda Ley de Newton)
   Autor: Kevin Mora
   Fecha: 2 de Noviembre 2025
*/

function calcularFuerza() {
    const alertBox = document.getElementById("alert");
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // limpiar resultados anteriores

    let cantidad = parseInt(prompt("¿Cuántos cálculos deseas realizar?"));

    if (isNaN(cantidad) || cantidad <= 0) {
        alertBox.textContent = "Por favor ingresa una cantidad válida.";
        return;
    }

 
    let totalForce = 0;

   
    for (let i = 1; i <= cantidad; i++) {
        let mass = parseFloat(prompt("Ingresa la masa (kg) del objeto " + i + ":"));
        let acceleration = parseFloat(prompt("Ingresa la aceleración (m/s²) del objeto " + i + ":"));

        if (isNaN(mass) || isNaN(acceleration)) {
            resultsDiv.innerHTML += `<p class="text-danger"> Cálculo ${i}: Datos inválidos.</p>`;
            continue;
        }

      
        let force = mass * acceleration;
        totalForce += force;

  
        resultsDiv.innerHTML += `
            <p> <strong>Cálculo ${i}:</strong> Masa = ${mass} kg, Aceleración = ${acceleration} m/s² → 
            <strong>Fuerza = ${force.toFixed(2)} N</strong></p>
        `;
    }

   
    alertBox.textContent = `Se realizaron ${cantidad} cálculos. Fuerza total = ${totalForce.toFixed(2)} N`;
}
