let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número de 0 a 10' // serve para alterar o conteúdo do elemento selecionado

//a função é responsável por executar alguma ação dentro do nosso programa. Por padrão e por convenção, é ideal determinar que as funções tenham apenas uma responsabilidade.
function verificarChute(){
    console.log('O botão foi clicado!')

}