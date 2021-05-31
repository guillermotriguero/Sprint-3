

function replace1(){

    // Recogemos el valor del texto
    let textoOriginal = document.getElementById("texto1").textContent;

    // Lo enviamos a una función que hace el Replace de palabras
    let nuevoTexto = replaceWords(textoOriginal, "verd", "blau");

    // Devolvemos el resultado y lo enviamos de vuelta al HTML

    document.getElementById("replace1Done").innerHTML=nuevoTexto;
}

function replace2(){

    // Recogemos el valor del texto
    let textoOriginal2 = document.getElementById("texto2").textContent;

    // Lo enviamos a una función que hace el Replace de palabras
    let nuevoTexto2 = replaceWords(textoOriginal2, /[o]/g, "u");

    // OJO, si pongo "replaceWords(textoOriginal2, "o", "u");" sólo me cambia la 1ª O que se encuentra.
    // Para que reemplace todas las O he tenido que poner como primer parámetro una expresión regular con la O.

    document.getElementById("replace2Done").innerHTML=nuevoTexto2;
}


// Función genérica para reemplazar elementos de un texto

function replaceWords(newText, word1, word2){
    let changeWords = newText.replace(word1,word2);
    return changeWords;
}
