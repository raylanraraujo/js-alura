function calcularIMC ( peso , altura) {
    let imc = peso / (altura * altura);
    return imc
}
console.log (calcularIMC(80 , 1.80))

//--------------------------------------------------

function fatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1 
    }
    
    let fatorial = 1;
    for ( i = 2 ; i <= numero ; i++){
        fatorial *= i;
    }
    return fatorial;
}

console.log(fatorial(5))

//--------------------------------------------------
function conversor(dolares) {
    let cotacaoDolar = 4.80;
    let reais = dolares * cotacaoDolar;
    return reais
}
console.log(conversor(3).toFixed(2));
//--------------------------------------------------

function area (altura , largura) {
    area = altura * largura;
    return area
}
console.log(area(4,3).toFixed(2) + ' m²');
//--------------------------------------------------

function areaPerimetoro(raio) {
    let perimetroCirculo = 2 * Math.PI * raio; 
    let areaCirculo = Math.PI * raio * raio; 
    return console.log(`O perímetro é: ${perimetroCirculo} m.\nA área é: ${areaCirculo} m²`)
}
areaPerimetoro(4);

function tabuada(numero) {
    for ( i = 1 ; i<=10; i++) {
        let res = numero * i 
        console.log(`${numero} x ${i} = ${res}`)
    }
}
tabuada(5)