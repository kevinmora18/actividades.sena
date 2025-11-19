
// VARIABLES GLOBALES

let bolasRestantes = [];
let numerosSalidos = [];

// Elementos del DOM
const cuerpoCarton = document.getElementById("cuerpoCarton");
const bolaTexto = document.getElementById("bola");
const listaSalidos = document.getElementById("numerosSalidos");

// Botones
document.getElementById("btnCarton").addEventListener("click", generarCarton);
document.getElementById("btnBola").addEventListener("click", sacarBola);


// FUNCIONES PRINCIPALES

// 1️Generar el cartón con números aleatorios
function generarCarton() {
  cuerpoCarton.innerHTML = ""; // Limpiar tabla

  const rangos = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75]
  };

  const letras = Object.keys(rangos);

  // Crear 5 filas y 5 columnas
  for (let fila = 0; fila < 5; fila++) {
    const filaHTML = document.createElement("tr");

    letras.forEach((letra, col) => {
      const [inicio, fin] = rangos[letra];
      const numero = obtenerNumeroAleatorio(inicio, fin);

      const celda = document.createElement("td");
      celda.textContent = (fila === 2 && col === 2) ? "★" : numero;
      filaHTML.appendChild(celda);
    });

    cuerpoCarton.appendChild(filaHTML);
  }

  reiniciarBolas();
  bolaTexto.textContent = "Cartón generado ";
  listaSalidos.textContent = "";
}

// 2️ Sacar una bola aleatoria del bombo
function sacarBola() {
  if (bolasRestantes.length === 0) {
    bolaTexto.textContent = "¡Ya salieron todas las bolas!";
    return;
  }

  const indice = Math.floor(Math.random() * bolasRestantes.length);
  const bola = bolasRestantes.splice(indice, 1)[0]; // Eliminar y obtener la bola
  numerosSalidos.push(bola);

  bolaTexto.textContent = ` ${bola}`;
  listaSalidos.textContent = numerosSalidos.join(", ");
}


// Genera un número aleatorio dentro de un rango
function obtenerNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Reinicia todas las bolas del bingo
function reiniciarBolas() {
  bolasRestantes = [];
  numerosSalidos = [];

  const letras = ["B", "I", "N", "G", "O"];
  const rangos = [
    [1, 15],
    [16, 30],
    [31, 45],
    [46, 60],
    [61, 75]
  ];

  letras.forEach((letra, i) => {
    const [inicio, fin] = rangos[i];
    for (let n = inicio; n <= fin; n++) {
      bolasRestantes.push(`${letra}${n}`);
    }
  });
}
