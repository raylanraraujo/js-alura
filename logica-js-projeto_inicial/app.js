alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 4;
console.log('O número secreto é ' + numeroSecreto)
let chute = prompt('Escolha um número entre 0 e 10');

//se o chute for igual ao número secreto
if(numeroSecreto == chute) {
    // Template string é a junção de textos com valores de variáveis. Essa é uma das maneiras de fazer isso em JavaScript
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :( ')
}