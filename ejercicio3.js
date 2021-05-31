function crear(){

    // Recogemos las dos variables

    let nombre = document.getElementById("nombre").value; 
    let apellido = document.getElementById("apellido").value; 

    //Creamos el nombre completo

    let nombreCompleto = nombre + " " + apellido;

    document.getElementById("nombreCompleto").innerHTML=nombreCompleto;
}
