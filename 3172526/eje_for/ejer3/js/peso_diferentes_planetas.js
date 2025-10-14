
    let masa = prompt("Ingresa la masa del objeto en kg:");

    const planetas = [
      { nombre: "Tierra", gravedad: 9.8 },
      { nombre: "Marte", gravedad: 3.7 },
      { nombre: "Jupiter", gravedad: 24.8 },
      { nombre: "Luna", gravedad: 1.6 }
    ];

    for (let i = 0; i <= 3; i++) {
      let peso = masa * planetas[i].gravedad;
      console.log(` En ${planetas[i].nombre}, el peso del objeto es ${peso} N`);
    }
