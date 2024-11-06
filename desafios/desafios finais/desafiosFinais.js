let nome = prompt('Digite seu nome');
console.log (`Seja bem-vindo ${nome}`);
alert(`Olá, ${nome}. \nQue bom ter você de volta!`);

let idade = prompt('Digite a sua idade');
let maiorMenor = idade >= 18 ? 'maior de idade' : 'menor de idade'
console.log(`A idade de ${nome} é ${idade} anos, portant ele é ${maiorMenor}`);

let linguagem = prompt('Qual linguagem de programação que você mais gosta?');
console.log(`A linguagem de programação que ${nome} mais gosta é ${linguagem}`);

let valor1 = parseInt(prompt('Digite o 1° valor'));
if (valor1 > 0){
    console.log('O número digitado é POSITIVO')
} else if(valor1 < 0){
    console.log('O valor digitado é NEGATIVO')
} else {
    console.log('Valor igual a ZERO')
}

let valor2 = parseInt(prompt('Digite o 2° valor'));
if(valor2 > 0){
    console.log('O número digitado é POSITIVO')
} else if ( valor2 < 0) {
    console.log('O número digitado é NEGATIVO')
} else {
    console.log('Valor igual a ZERO')
}
let soma = valor1 + valor2;
let subt = valor1 - valor2;

console.log(`A soma do 1° valor (${valor1}) e o 2° valor (${valor2}) é igual a ${soma}`)
alert(`A soma do 1° valor (${valor1}) e o 2° valor (${valor2}) é igual a ${soma}`)

console.log(`A subtração do 1° valor (${valor1}) e o 2° valor (${valor2}) é igual a ${subt}`);
alert(`A subtração do 1° valor (${valor1} e o 2° valor é (${valor2}) é igual a ${subt}`);

let c = 1;
while ( c <= 10){
    console.log(c)
    c++
}

let nota1 = parseFloat(prompt('Digite a sua 1ª nota'));
let nota2 = parseFloat(prompt('Digite a sua 2ª nota'));
let somaNotas = nota1 + nota2;
let media = somaNotas/2

alert(`A média das notas ${nota1} e ${nota2} é ${media}`);

let situacao = media >= 7 ? 'APROVADO' : 'REPROVADO' ; 
alert (situacao)