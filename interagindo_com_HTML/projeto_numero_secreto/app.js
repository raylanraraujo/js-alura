// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 0 a 10'; // serve para manipular o conteúdo do elemento selecionado


//criado funcao para evitar que seja escrito várias linhas com comandos parecidos
//incluido os parâmetros para que quando a função seja chamada com os parâmetros sejam especificados, eles retornem o resultado desejado
function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//função chamada com parâmetros especificados na tela
exibirTextoNaTela('h1' , 'Jogo do número secreto');
exibirTextoNaTela('p' , 'Escolha um número de 0 a 10')


//a função é responsável por executar alguma ação dentro do nosso programa. Por padrão e por convenção, é ideal determinar que as funções tenham apenas uma responsabilidade.
function verificarChute(){
    console.log('O botão foi clicado!');



}