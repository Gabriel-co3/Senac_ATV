let Matriz = [
    [8, 7, 6, 9],
    [6, 9, 10, 5],
    [7, 8, 9, 6]
];


// fução para somar todos os elementos da matriz 
function somarMatriz(matriz) {
    let soma = 0;
    for (let i= 0; i < matriz.length; i++) {
        for (let j= 0; j < matriz [i]. length; j++) {
            soma += matriz[i][j]; 
        }
    }
    return soma;
}


// função para calcular a média 

function mediaMatriz(matriz) {
    let quantidade = 0; 
    for (let i = 0; i < matriz.length; i++) {
        quantidade += matriz[i].length;
    }
    return somarMatriz(matriz) / quantidade;
}

function maiorValor(matriz) {
    let maior = matriz[0] [0];
    for (let i = 0; i < matriz.length; i++) {
        for ( let j = 0; j < matriz.length; j++) {
            if (matriz[i] [j] > maior) {
                maior = matriz[i] [j];
            }
        }
    }
    return maior;
}

function menorValor(matriz) {
    let menor = matriz[0] [0];
    for (let i = 0; i < matriz.length; i++) {
        for ( let j = 0; j < matriz.length; j++) {
            if (matriz[i] [j] > menor) {
                menor = matriz[i] [j];
            }
        }
    }
    return menor;
}

console.log('Soma :', somarMatriz(Matriz));
console.log('Média :', mediaMatriz(Matriz).toFixed(2));
console.log('Maior valor:', maiorValor(Matriz));
console.log('Menor valor:', menorValor(Matriz));

