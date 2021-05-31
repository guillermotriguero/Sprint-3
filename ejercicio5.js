function nota(){

    // Recogemos las dos variables

    let nota = parseInt(document.getElementById("nota").value); 
    
    if(nota < 5){
        window.alert("Ohhh, has suspendido el examen")
    } else if (nota >= 5 &&  nota <= 10){
        window.alert("¡Has aprobado el examen!")
    } else if (nota > 10){
        window.alert("Has puesto un número incorrecto")
    } else {
        window.alert("No has puesto un número")
    }
}
