import { select, number } from '@inquirer/prompts';

const valor = await number ({ message: "qual foi o valor total da compra?:"});

const pagamento = await select({
    message: 'Escolha sua forma de pagamento:',
    choices: [
    { name: 'PIX (10% de desconto)', value: "10"},
    { name: 'Cartão à vista (5% de desconto)', value: "5"},
    { name: 'Cartão parcelado (sem desconto)', value: "0"},
    ]
});

switch (pagamento) {
    case "10": 
    console.log("Forma de pagamento Pix: R$ ")
} 