var botaoCriptografa = document.querySelector("#botao-criptografa");
var botaoDescriptografa = document.querySelector("#botao-descriptografa");
var text = document.querySelector("textarea#campo-digite");
var botaoCopia = document.querySelector(".botao-copy");

tiraResultadoDoRetangulo();
tiraBotaoCopiarDoRetangulo();

botaoCriptografa.addEventListener("click", function(event) {
event.preventDefault();

var erros = validaCampo(text);
console.log(erros);

if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return
}

var mensagensErro = document.querySelector(".mensagens-erro");
mensagensErro.innerHTML = "Apenas letras minúsculas e sem acento.";

fazCriptografia(text);
tiraConteudoDoRetangulo()

document.getElementsByClassName("botao-copy")[0].style.display = "block";
exibeFadeIn(".botao-copy");

document.getElementsByClassName("resultado-criptografia")[0].style.display = "block";
exibeFadeIn(".resultado-criptografia");
});


botaoDescriptografa.addEventListener("click", function(event) {
    event.preventDefault();

    var erros = validaCampo(text);
    console.log(erros);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return
    }

    var mensagensErro = document.querySelector(".mensagens-erro");
    mensagensErro.innerHTML = "Apenas letras minúsculas e sem acento.";

    fazDescriptografia(text);
    tiraConteudoDoRetangulo();

    document.getElementsByClassName("botao-copy")[0].style.display = "block";
    exibeFadeIn(".botao-copy");
    document.getElementsByClassName("resultado-criptografia")[0].style.display = "block";
    exibeFadeIn(".resultado-criptografia");
     
})


botaoCopia.addEventListener("click", function(event) {
    event.preventDefault();
    copiaResultado();
})


function fazCriptografia(text) {
      
    if (text.value != 0) {
        var textCripto = text.value;
        var text =  textCripto.replace(/e/g, 'enter');
        var text = text.replace(/i/g, 'imes');
        var text = text.replace(/a/g, 'ai');
        var text = text.replace(/o/g, 'ober');
        var text = text.replace(/u/g, 'ufat');

        document.getElementsByClassName('resultado-criptografia')[0].innerHTML = `${text}`;
 
}

}

function fazDescriptografia(text) {

    if (text.value != 0) {
        var textCripto = text.value;
        var text =  textCripto.replace(/enter/g, 'e');
        var text = text.replace(/imes/g, 'i');
        var text = text.replace(/ai/g, 'a');
        var text = text.replace(/ober/g, 'o');
        var text = text.replace(/ufat/g, 'u');

        document.getElementsByClassName('resultado-criptografia')[0].innerHTML = `${text}`;
        
    }
    
}

function copiaResultado() {
    var areaCopia = document.querySelector('.resultado-criptografia');
        areaCopia.select();
    try {
        var sucesso = document.execCommand('copy');
        var msg = sucesso ? 'sucesso!' : 'falha!';
        alert('Texto copiado com ' + msg);
        } catch(err) {
        alert('Ocorreu algum erro ao tentar copiar!');
        }
}

function tiraConteudoDoRetangulo() {
  document.getElementsByClassName("conteudo-retangulo")[0].style.display = "none";  
}

function tiraResultadoDoRetangulo() {
    document.getElementsByClassName("resultado-criptografia")[0].style.display = "none"; 
  }

function tiraBotaoCopiarDoRetangulo() {
    document.getElementsByClassName("botao-copy")[0].style.display = "none"; 
  }

  function validaCampo(text) {
    var erros = [];
    if (text.value == 0) erros.push("Digite algum texto!");
    if (/[A-Z-À-Ú-à-ú]/.test(text.value)) erros.push("Apenas letras minúsculas e sem acento.");
    return erros;
  }

  function exibeMensagensDeErro(erros){
    var ul = document.querySelector(".mensagens-erro");
   ul.innerHTML = "";
    erros.forEach(function(erro){
        var li = document.createElement("li");
        setTimeout(function(){
            ul.classList.add('fadeIn');
            },500);
            ul.classList.remove('fadeIn');
        li.textContent = erro;
        ul.appendChild(li);
       
    });
}

function exibeFadeIn(elemento){
    var varElemento = document.querySelector(elemento);
    setTimeout(function(){
        varElemento.classList.add('fadeIn');
        },500);
        varElemento.classList.remove('fadeIn');

}