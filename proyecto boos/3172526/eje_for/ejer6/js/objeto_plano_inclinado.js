const g = 9.81;

let masa = prompt("Ingrese la masa del objeto (kg):");
let anguloInicio = prompt("Ingrese el ángulo inicial (grados):");
let anguloFin = prompt("Ingrese el ángulo final (grados):");
let incremento = prompt("Ingrese el incremento de ángulo (grados):");

    console.log(`Masa: ${masa} kg`);
    console.log(`Ángulos desde ${anguloInicio}° hasta ${anguloFin}° con incremento de ${incremento}°`);
    console.log("Ángulo (°) | Fuerza paralela (N)");

    for (let theta = anguloInicio; theta <= anguloFin; theta += incremento) {
        let thetaRad = theta * Math.PI / 180;
        let F_paralela = masa * g * Math.sin(thetaRad);
        console.log(`${theta}°\t|\t${F_paralela} N`);
    }
