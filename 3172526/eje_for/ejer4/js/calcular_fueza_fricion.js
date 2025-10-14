let g = 9.81;

let mu = prompt("Ingresa el coeficiente de friccion (μ):");
let n = prompt("¿Cuántas masas quieres ingresar?");

for (let i = 0; i < n; i++) {
    const masa = prompt(`Ingresa la masa #${i + 1} (en kg):`);
    const N = masa * g;
    const F_friccion = mu * N;
    console.log(`La fuerza de friccion para la masa ${masa} kg es: ${F_friccion.toFixed(2)} N`);
}