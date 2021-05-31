function sumar(){

    // Recogemos las dos variables

    let numero1 = parseInt(document.getElementById("numero1").value); 
    let numero2 = parseInt(document.getElementById("numero2").value); 

    //Las sumamos

    let suma = numero1 + numero2;

    document.getElementById("suma").innerHTML=suma;
}
