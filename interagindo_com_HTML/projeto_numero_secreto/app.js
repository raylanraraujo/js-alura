let numeroSecreto = gerarNumeroAleatorio ();


// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 0 a 10'; // serve para manipular o conteúdo do elemento selecionado


//criado funcao para evitar que seja escrito várias linhas com comandos parecidos
//incluido os parâmetros para que quando a função seja chamada com os parâmetros sejam especificados, eles retornem o resultado desejado
//função COM PARAMETROS mas SEM RETORNO 
function exibirTextoNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//função chamada com parâmetros especificados na tela
exibirTextoNaTela('h1' , 'Jogo do número secreto');
exibirTextoNaTela('p' , 'Escolha um número de 0 a 10');


//a função é responsável por executar alguma ação dentro do nosso programa. Por padrão e por convenção, é ideal determinar que as funções tenham apenas uma responsabilidade.
//função SEM PARÂMETROS NEM RETORNO
//incluido a variavel numeroSecreto para exibir o número aleatório que foi gerado
function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(chute == numeroSecreto);
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1' , 'Acertou!');
        exibirTextoNaTela ('p' , 'Você descobriu o número secreto.')
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p' , 'O número secreto é menor.')
        } else {
            exibirTextoNaTela ('p' , 'O número secreto é maior.')
        }

    }
}

// criado a função que gera um número aleatório e retorna esse valor (pois sem ele o número é gerado mas nao fica guardado em lugar algum)
//função SEM PARÂMETRO, mas COM RETORNO
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}