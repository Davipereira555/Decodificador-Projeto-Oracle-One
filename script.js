// Função que remove caracteres especiais / acentos para codificar/decodificar a frase
function normalizar(frase) {
    fraselimpa = frase.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return fraselimpa;

}

// Botão para leitura do campo input e codificação da frase.
var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.addEventListener("click", function () {
    event.preventDefault();
    var formcodificar = document.querySelector('#criptografa');
    var formmensagem = document.querySelector('#mensagem')
    var caixatexto = document.querySelector('#msg')
    var frasecriptografar = formcodificar.inputtexto.value;
    frasecriptografar = normalizar(frasecriptografar);
    var frasecodificada = codificar(frasecriptografar);
    caixatexto.value = frasecodificada;

});

// Função para codificar a palavra / frase
function codificar(frase) {
    frasecod = frase.replace(/i/gi, "imes").replace(/e/gi, "enter").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat").toLowerCase();
    return frasecod;
    alert('Criptografada com sucesso!');
}


// Leitura do campo input e descodifica a frase!
var botaoDescriptografar = document.querySelector("#btn-descripto");
botaoDescriptografar.addEventListener("click", function () {
    event.preventDefault();
    var formcodificar = document.querySelector('#criptografa');
    var formmensagem = document.querySelector('#mensagem')
    var caixatexto2 = document.querySelector('#inputtexto')
    var frasedescriptografar = formcodificar.inputtexto.value;
    var frasedescodificada = descodificar(frasedescriptografar);
    console.log(frasedescodificada);
    console.log(caixatexto2);
    caixatexto2.value = frasedescodificada;

});

//Esta função descodifica a frase
function descodificar(frase) {
    frasedecod = frase.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u").toLowerCase();
    return frasedecod;
    alert('Descriptografada com sucesso!');
}

//Este botão copia o conteúdo da caixa do texto criptografado para a área de transferência (CTRL + C)
var botaoCopiar = document.querySelector('#btn-copy');
botaoCopiar.addEventListener("click", function () {
    event.preventDefault();
    var textArea = document.querySelector('#msg');
    textArea.select();
    document.execCommand('copy');
    alert('Texto copiado para a área de transferência!')
});