alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 0 e 10');

if(numeroSecreto == chute) {
    console.log('Isso aí! Você descobriu o número secreto (5)');
} else {
    console.log('Você errou')
}