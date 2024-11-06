alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log('O número secreto é ' + numeroSecreto)
let chute 

//enquanto chute é diferente do Número Secreto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 0 e 10');

    //se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        // Template string é a junção de textos com valores de variáveis. Essa é uma das maneiras de fazer isso em JavaScript
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto){
            alert(`O número secret é menor que o ${chute}`)
        } else {
            alert(`O número secreto é maior que o ${chute}`)
        }
    }

}