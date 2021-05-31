function orden(){

// Primero listamos los objetos:

let objetos = ["silla", "mesa", "ordenador", "libreta"]; 

// Ahora creamos el bucle para determinar su orden en el listado:

let mensajeFinal = " ";

for (let i=0; i<objetos.length; i++){
  let mensaje = "El objeto " + objetos[i] + " está en la posición "  + (i+1) + "<br>";
  mensajeFinal += mensaje;
  document.getElementById("ordenElementos").innerHTML = mensajeFinal;
  }
}