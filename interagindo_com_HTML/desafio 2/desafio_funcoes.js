//----------------------------exercicio 1------------------------------------
function olaMundo(){
    console.log('Olá, mundo!');
}
olaMundo();

//----------------------------exercicio 2------------------------------------
saudacao(nome);
let nome = prompt('Digite seu nome');
function saudacao (nome){
    console.log(`Olá, ${nome}`);
}
/*
resoluçao do exercicio 2
    function exibirOlaNome(nome) {
        console.log(`Olá, ${nome}!`);
    }

    exibirOlaNome("Alice");
*/

//----------------------------exercicio 3------------------------------------
let numero = prompt('Digite um número para saber o dobro dele');
function dobro (numero){
    return console.log(numero * 2);
}
dobro(numero);

/*
    exercicio 3
    
    function calcularDobro(numero) {
    return numero * 2;
    }

    let resultadoDobro = calcularDobro(5);
    console.log(resultadoDobro);
*/


//----------------------------exercicio 4------------------------------------
let n1 = parseInt(prompt('Digite um valor'));
let n2 = parseInt(prompt('Digite um valor'));
let n3 = parseInt(prompt('Digite um valor'));
function media( n1, n2, n3) {
    let soma = n1 + n2 + n3;
    let media = soma / 3;

    return console.log(`A soma dos números é ${soma}\nA média entre eles é ${media}`);
}
media (n1, n2, n3);

let a = parseFloat(prompt('Digite o 1° valor'));
let b = parseFloat(prompt('Digite o 2° valor'));
function maior(a , b) {
    if (a > b){
        console.log(`O maior valor é ${a}`);
    } else {
        console.log(`O maior valor é ${b}`);
    }
}
maior (a, b);


let quadrado = parseInt(prompt('Digite um valor'));
function elevadoDois(number) {
    let resultado = number * number;
    return (console.log(resultado));
}

elavadoDois(quadrado);