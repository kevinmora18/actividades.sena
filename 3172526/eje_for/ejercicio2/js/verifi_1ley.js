
    let n = prompt("¿Cuántas fuerzas netas deseas evaluar?");

    
    for (let i = 0; i < n; i++) {
      let fuerza = rompt(`Ingresa el valor de la fuerza neta #${i + 1}:`);

      if (fuerza === 0) {
        ("➡ El objeto permanece en reposo o en movimiento uniforme (fuerza neta = 0).");
      } else {
    ("➡ El objeto cambia su estado de movimiento (fuerza neta ≠ 0).");
      }
    }