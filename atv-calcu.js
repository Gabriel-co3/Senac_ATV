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

let valor_descontado;

switch (pagamento) {
    default:
        console.log("Opção inválida");
        break;
    case "10":
        valor_descontado = valor * 0.9;
        console.log("Valor de " + valor_descontado);
        break;
    case "5":
        valor_descontado = valor * 0.95;
        console.log("Valor de " + valor_descontado);
        break;
    case "0":
        valor_descontado = valor;
        console.log("Valor de " + valor_descontado);
        break;
}

     