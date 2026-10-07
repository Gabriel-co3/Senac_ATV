import { input, number } from '@inquirer/prompts';

const produto = await input({ message: 'Nome do produto:' });
const qtd = await number({ message: 'Quantidade vendida:', min: 1, required: true });
const valorUnit = await number({ message: 'Valor unitário:', min: 0, required: true });

const subtotal = qtd * valorUnit;
const desconto = subtotal > 500 ? subtotal * 0.1 : 0;
const total = subtotal - desconto;

console.log(`Produto: ${produto}`);
console.log(`Quantidade: ${qtd}`);
console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);
console.log(`Desconto: R$ ${desconto.toFixed(2)}`);
console.log(`Total da venda: R$ ${total.toFixed(2)}`);


         //  Estruturas de repetição
let contador = 1;
while (contador <= 5) {
    console.log(`Numero: ${contador}`);
    contador++;
}

let opcao;
do {
    console.log("1 - Cadastrar");
    console.log("2 - Consultar");
    opcao = 0; // aqui poderia vir do teclado 
} while (opcao !== 0);

for (let i = 1; i<= 5; i++) {
    console.log(`contagem: $(i)`);
}
