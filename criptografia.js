const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

function btneEncriptar (){
    const textCriptografado = criptoGrafar(textArea.value);
    mensagem.value = textCriptografado
    textArea.value = ""
}

function criptoGrafar(textoDigitado){

    const mapaVogais = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }
    
    textoDigitado = textoDigitado.toLowerCase();

    let textCriptografado = "";

    for (i=0; i<textoDigitado.length; i++) {

        if (textoDigitado[i] in mapaVogais) {
            textCriptografado = textCriptografado + mapaVogais[textoDigitado[i]];
        } else {
            textCriptografado = textCriptografado + textoDigitado[i];
        }
    };
    return textCriptografado;
}

function btneDesencriptar (){
    const textDescriptografado = descriptoGrafar(textArea.value);
    mensagem.value = textDescriptografado
    textArea.value = ""
}

function descriptoGrafar(textoDigitado){

    const mapaVogais2 = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }
    textoDigitado = textoDigitado.toLowerCase();

    for (const [key, value] of Object.entries(mapaVogais2)) {

        textoDigitado = textoDigitado.replace(key, value)

    };

    return textoDigitado;
}