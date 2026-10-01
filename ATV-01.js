import { number, confirm } from '@inquirer/prompts';

const idade = await number({ message: 'idade ->', required: true });
const ingresso = await confirm({ message: 'Tem ingresso? ->', required: true });
const acompanhado = await confirm({ message: 'acompanhado? ->', required: true });

const mensagem = ((ingresso) && (idade >= 18  || acompanhado)) ? "Entrada Liberada!" : "Volta pra Casa!";

console.log(mensagem);
