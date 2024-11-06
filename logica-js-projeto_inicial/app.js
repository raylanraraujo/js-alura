alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log('O número secreto é ' + numeroSecreto);
let chute;
let tentativas =1;

//enquanto chute é diferente do Número Secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 0 e 10');

    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
       
    } else {
        if (chute > numeroSecreto){
            alert(`O número secret é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
    }
    //tentativas = tentativas + 1
    tentativas++
}

//operador ternário
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

/*
    com o operador ternário fica desnecessário o código if abaixo

    if ( tentativas > 1) {
        // Template string é a junção de textos com valores de variáveis. Essa é uma das maneiras de fazer isso em JavaScript
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
    }
*/
