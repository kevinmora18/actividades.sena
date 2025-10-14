let g = 9.81;
let n = prompt("¿Cuántos objetos quieres ingresar?");

for (let i = 0; i < n; i++) {
    const masa = prompt(`Ingresa la masa del objeto #${i + 1} (en kg):`);
    const tension = masa * g;
    console.log(`La tension en la cuerda para el objeto con masa ${masa} kg es: ${tension} N`);
}