  //kevin mora 21/10/25
function  operation() {

let mass = parseFloat(document.getElementById("mass").value);
let fuerza = parseFloat(document.getElementById("fuerza").value);

//operaciones

let acceleracion = (fuerza / mass);


let mensaje1;


            if (acceleracion > 5) {
              mensaje1 = `la acceleracion es alta  ${acceleracion}`;
            }
                
            else {
              mensaje1 = `la acceleracion es baja  ${acceleracion}`;  
            }


document.getElementById("mensaje1").innerHTML = "" + mensaje1;

}   