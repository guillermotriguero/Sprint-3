
function calcular(){
let numero1 = parseInt(document.getElementById("numero-1").value);
let numero2 = parseInt(document.getElementById("numero-2").value);
let operacion = document.getElementById("operacion").value;

    let resultado = calculadora(numero1,numero2,operacion)

    if (resultado == "Incorrecto") {     
        document.getElementById("resultado").innerHTML = "Has puesto un signo incorrecto";
    } else {
    document.getElementById("resultado").innerHTML = "El resultado de la operación es " + resultado;
    }
}

function calculadora(number1,number2,operation){

    switch (operation){
        
        case "+":
            result = (number1) + (number2);
            return result;
            break;

        case "-":
            result = (number1) - (number2);
            return result;
            break;

        case "*":
            result = (number1) * (number2);
            return result;
            break;

        case "/":
            if (number2 == 0){
                result = 0;
                return result;
                break;
            } else {
            result = (number1) / (number2);
            return result;
            break;
            }
        default: 
            result = "Incorrecto";
            return result;
    }
}