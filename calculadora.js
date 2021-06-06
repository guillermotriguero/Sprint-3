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
    let reset = document.getElementById("reset");

// Para hacer los cálculos

    let operando1;
    let operando2;
    let operacion;

// Hacer que la pantalla dé resultados con eventos

// Le decimos que al clicar a UNO añada a Resultado un 1, 2...

    uno.onclick = function(){
        resultado.textContent = resultado.textContent + "1";
    }

    dos.onclick = function(){
        resultado.textContent = resultado.textContent + "2";
    }

    tres.onclick = function(){
        resultado.textContent = resultado.textContent + "3";
    }

    cuatro.onclick = function(){
        resultado.textContent = resultado.textContent + "4";
    }

    cinco.onclick = function(){
        resultado.textContent = resultado.textContent + "5";
    }

    seis.onclick = function(){
        resultado.textContent = resultado.textContent + "6";
    }

    siete.onclick = function(){
        resultado.textContent = resultado.textContent + "7";
    }

    ocho.onclick = function(){
        resultado.textContent = resultado.textContent + "8";
    }

    nueve.onclick = function(){
        resultado.textContent = resultado.textContent + "9";
    }

    cero.onclick = function(){
        resultado.textContent = resultado.textContent + "0";
    }

    coma.onclick = function(){
        resultado.textContent = resultado.textContent + ".";
    }

///////////////

    reset.onclick = function(){
        limpiar();
    }

    suma.onclick = function(){
        // Para guardarla suma de cifras que teníamos hasta ahora
        operando1 = resultado.textContent;
        
        // La operación en sí
        
        operacion = "+";
        limpiar();
    }
    
    resta.onclick = function(){
       // Para guardarla suma de cifras que teníamos hasta ahora
       operando1 = resultado.textContent;
        
       // La operación en sí
       
       operacion = "-";
       limpiar();
   }
    
    multiplicacion.onclick = function(){
       // Para guardarla suma de cifras que teníamos hasta ahora
       operando1 = resultado.textContent;
        
       // La operación en sí
       
       operacion = "*";
       limpiar();
   }

    division.onclick = function(){
       // Para guardarla suma de cifras que teníamos hasta ahora
       operando1 = resultado.textContent;
        
       // La operación en sí
       
       operacion = "/";
       limpiar();
   }

   igual.onclick = function(){
        operando2 = resultado.textContent;
        resolver();
    }

    function limpiar(){
        resultado.textContent = "";
    }

    function resolver(){
        let solucion = 0;
            switch(operacion){
                case "+":
                    solucion = parseFloat(operando1) + parseFloat(operando2);
                    break;

                case "-":
                    solucion = parseFloat(operando1) - parseFloat(operando2);
                    break;

                case "*":
                    solucion = parseFloat(operando1) * parseFloat(operando2);
                    break;

                case "/":
                    solucion = parseFloat(operando1) / parseFloat(operando2);
                    break;
            }
        
        limpiar();
        resultado.textContent=solucion;
    }

