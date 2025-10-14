


let fuerza = 0;
let masa = 1; 
let velocidad = 0; 
let distancia = 0; 
let segundosMovimiento = 0; 
let aceleracion = 0; 
let t = 1;

function obtenerFuerzaDelUsuario() {

  fuerza = parseFloat(prompt("Ingrese la fuerza aplicada (o 0 para detener):"));
  if (isNaN(fuerza)) {

    return obtenerFuerzaDelUsuario(); // Vuelve a pedir la entrada
  }
  return fuerza;
}



fuerza = obtenerFuerzaDelUsuario();

while (fuerza !== 0) {

  aceleracion = fuerza / masa;

  velocidad = velocidad + aceleracion * t;

  distancia = distancia + velocidad * t;

  segundosMovimiento++;

  console.log(`Segundos: ${segundosMovimiento}, Fuerza: ${fuerza}, Velocidad: ${velocidad}, Distancia: ${distancia}`);

  fuerza = obtenerFuerzaDelUsuario();
}



console.log(`Total de segundos en movimiento: ${segundosMovimiento}`);
console.log(`Distancia total recorrida: ${distancia}`);
console.log(`Velocidad final: ${velocidad}`);
