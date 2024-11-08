function exibirMensagem(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirMensagem('h1', 'Jogo do número secreto');
exibirMensagem ('p', 'Escolha um número de 0 a 10');


function gerarNumero() {
    return parseInt(Math.random () * 10 +1);
}
let numeroSecreto = gerarNumero ();



function verificarChute() {
    let palpite = document.querySelector('input').value;
    console.log (`Número secreto: ${numeroSecreto}`);
    console.log (`Palpite: ${palpite}`)
    
    if ( palpite == numeroSecreto){
        let mensagemDeAcerto = `Você acertou o número secreto igual a ${numeroSecreto}`;
        exibirMensagem('h1' , 'Acertou!');
        exibirMensagem('p' , mensagemDeAcerto);
    } else {
        if (palpite > numeroSecreto){
            exibirMensagem('p' , 'O número secreto é menor.')
        } else {
            exibirMensagem('p' , 'O número secreto é maior')
        }
    }

}