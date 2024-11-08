//calcular o IMC 
//altura em metros 
//peso em quilogramas

//criar um funcao imc que tenha peso e altura como parametros

function exibirNaTela(tag , texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

exibirNaTela ('h1', 'Desafio 3');
exibirNaTela ('.ex1' , 'Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro');
exibirNaTela ('.ex2' , 'Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.');
exibirNaTela ( '.ex3' , 'Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.');
exibirNaTela ( '.ex4' , 'Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.');
exibirNaTela ( '.ex5' , 'Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.');
exibirNaTela ( '.ex6' , 'Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.');



function calcular( ) {
    let peso = parseFloat(document.querySelector('.imc__input__peso').value);
    let altura = parseFloat(document.querySelector ( '.imc__input__altura').value);
    console.log (`Peso: ${peso}`);
    console.log(`Altura: ${altura}`);
    let imc = peso / (altura * altura);
    console.log(`O imc calculado é ${imc.toFixed(2)}`);
    
    
    return imc;
}




