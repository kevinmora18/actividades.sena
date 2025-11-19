
 const gravedad = 9.81; 
function compararFuerzas() {

        let masa1 = parseFloat(document.getElementById("masa1").value, 10);
        let masa2 = parseFloat(document.getElementById("masa2").value, 10);
        

        let resul1 = masa1 * gravedad;
        let resul2 = masa2 * gravedad;

 


     // Identificar cual tene mayor gravitacional
    let mayor = Math.max(resul1, resul2,);
    let mensaje = "";
    if (mayor === resul1) {
        mensaje = `El área mayor es la primera: ${resul1}`;
    } else if (mayor === resul2) {
        mensaje = `El área mayor es la segunda: ${resul2}`;
    } else {
        mensaje = `la masa gravitatorias son iguales  ${resul1}`;
    }
    
        document.getElementById("resul1").innerHTML = "Fuerza del primer cuerpo: " + mensaje
        document.getElementById("resul2").innerHTML = "Fuerza del segundo cuerpo: " + mensaje

        return (resul1, resul2);
}