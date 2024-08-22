//FAZER A CRIPTOGRAFIA Criar a função
//Ligar a função ao botão correspondente no HTML
//Capturar o texto escrito no campo de input do HTML
//Desenvolver a lógica da criptografia
//retornar na tela o resultado do texto criptografado


    
function criptoGrafar(){

    const mapaVogais = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    // document.querySelector('textarea')=""
    var textoDigitado = document.querySelector('textarea').value
    console.log(textoDigitado);
    textoDigitado = textoDigitado.toLowerCase();

    let textCriptogradafo = "";
    console.log(textoDigitado.length)
    for (i=0; i<textoDigitado.length; i++) {
        console.log(i);
        console.log(textoDigitado[i]);
        console.log(textCriptogradafo);
        if (textoDigitado[i] in mapaVogais) {
            textCriptogradafo = textCriptogradafo + mapaVogais[textoDigitado[i]];
        } else {
            textCriptogradafo = textCriptogradafo + textoDigitado[i];
        }
    }

    console.log(textCriptogradafo);
}


    
    
    



function descriptoGrafar(){
    console.log('o botao descriptografar foi clicado')
}


let letra

const mapaVogais = {
       "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
}
// //let textoCriptografado = "";

// //if (letra == "a"){
//   //  TextoDigitado.replace(letra,"ai");
// //} else if (letra == "e"){
   // TextoDigitado.replace(letra,"enter");
//} else if (letra == "i"){
 //   TextoDigitado.replace(letra,"imes");
//} else if (letra == "o"){
  //  TextoDigitado.replace(letra,"ober");
//} else if(letra=="u"){
  //  TextoDigitado.replace(letra,"ufat")
//}



//FAZER A DESCRIPTOGRAFIA Criar a função
//Ligar a função ao botão correspondente no HTML
//Capturar o texto escrito no campo de input do HTML
//Desenvolver a lógica da descriptografia
//retornar na tela o resultado do texto descriptografado