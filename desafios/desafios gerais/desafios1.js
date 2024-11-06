//---------------Desafio 10---------------------
let numero = prompt ('Digite um número');
let contador4 = 0;

while (contador4<=numero){
    console.log (contador4);
    contador4++
}



//---------------Desafio 9---------------------
let contador3 = prompt('Digite um número')

while (contador3 >=0) {
    console.log(contador3);
    contador3--
}


//---------------Desafio 8---------------------
let contador2 = 10;

while (contador2 >=0) {
    console.log(contador2);
    contador2--
}

//---------------Desafio 7---------------------
let contador1 = 1;

while (contador1 < 11){
    console.log(contador1);
    contador1++
}


//---------------Desafio 6---------------------
let escrevaNome = prompt('Digite seu nome');
alert('Bem-vindo ' + escrevaNome);

//---------------Desafio 5----------------------
let saldo = 100;
alert(`O saldo da conta é ${saldo}`);

//---------------Desafio 4----------------------
let pontuacao = prompt('Digite sua pontuação');
if (pontuacao >= 100){
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar.');
}

//---------------Desafio 3----------------------
let parOuImpar = prompt('Digite um número');
if ( parOuImpar > 0){
    alert('O número é positivo');
} else {
    alert('O número é negativo');
}

//---------------Desafio 2----------------------
let fimDeSemana = prompt('Qual é o dia da semana?');
if ( fimDeSemana=='Sábado' || fimDeSemana=='Domingo'){
    alert('Bom fim de semana');
} else {
    alert('Boa semana');
}

//---------------Desafio 1----------------------
alert('Boas vindas ao site de desafios JS');

let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponível = 1000;

alert('Erro! Preencha todos os campos');

let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

let seuNome = prompt('Qual o seu nome?')
let suaIdade = prompt('Digite sua idade')

if ( suaIdade >= 18){
    alert('Pode tirar habilitação')
}