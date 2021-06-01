function main(){
    

    //Cogemos todos los valores de la calculadora-botones

    let resultado= document.getElementById("resultado");
    let uno = document.getElementById("1");
    let dos = document.getElementById("2");
    let tres = document.getElementById("3");
    let cuatro = document.getElementById("4");
    let cinco = document.getElementById("5");
    let seis = document.getElementById("6");
    let siete = document.getElementById("7");
    let ocho = document.getElementById("8");
    let nueve = document.getElementById("9");
    let cero = document.getElementById("0");
    let coma = document.getElementById("coma");
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");
    let igual = document.getElementById("igual");

    // Hacer que la pantalla de resultados con eventos

    // Le decimos que al clicar a UNO añada a Resultado un 1, 2...

    uno.onclick = function(){
        alert("Hola");
    }

    dos.onclick = function(e){
        resultado.TextContent = resultado.TextContent + "2";
    }

    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }

    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }

    ///////////////

    suma.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    
    resta.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }
    
    multiplicacion.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }

    division.onclick = function(e){
        resultado.textContent = resultado.textContent + "1";
    }


}

