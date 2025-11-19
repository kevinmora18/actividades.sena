  //kevin mora 21/10/25
function  operation() {

let masa = parseFloat(document.getElementById("masa").value, 10);
let mu = parseFloat(document.getElementById("mu").value, 10);
let gravedad = parseFloat(document.getElementById("gravedad").value, 10);
//operaciones

let fuerzaNormal = masa * gravedad;
let fuerzaFriccion = mu * fuerzaNormal;


            if (fuerzaFriccion > 50) {
                document.getElementById("resulF").innerHTML = "la friccion es alta" + fuerzaFriccion;
                
            } else {
                document.getElementById("resulF").innerHTML = "la friccion es baja" + fuerzaFriccion;
            }

document.getElementById("resulF").innerHTML = "La fuerza de fricción es: " + fuerzaFriccion;
document.getElementById("resulN").innerHTML = "la fuerza normal es: " + fuerzaNormal;
return (mu, gravedad, masa);
}  