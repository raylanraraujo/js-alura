let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function clicarConsole() {
    console.log('O botão foi clicado')
}

function clicarAlerta(){
    alert('Eu amo JS')
}

function clicarPrompt(){
    let cidade = prompt('Digite uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

function clicarSomar(){
    let numero1 = parseInt(prompt('Digite o 1° valor'));
    let numero2 = parseInt(prompt('Digite o 2° valor'));
    let soma = numero1 + numero2;
    alert(`A soma do 1° valor (${numero1}) com o 2° valor (${numero2}) é igual a ${soma}`)
}