       // AULA 02
import { input, number } from '@inquirer/prompts';

const nome = await input({ message: 'Qual é o seu nome?' });

console.log("Bem vindo, " + nome + "!");

const carro = await input({ message: "Qual é o seu carro favorito?" });

console.log("Que massa, " + nome + "!");

let idade = await number({
    message: "Idade?",
    min:0,
    max:120,
    required: true,
})

let idade_depois = idade + 1;

console.log("Bem vindo," + nome + "!");
console.log(typeof idade);
console.log(typeof idade_depois);
console.log("Ano que vem vc terá " + idade_depois + " anos.");


