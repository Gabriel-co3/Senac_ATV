import { number } from '@inquirer/prompts';

let ListrosAbastecidos = 0;
const PREÇO_LITRO = 5.8;
const PASSO = 5;
const VOLTAS = 7;




for (let i = 1; i <= VOLTAS; i++) {
    ListrosAbastecidos += PASSO;
    const total = ListrosAbastecidos * PREÇO_LITRO;
    console.log(`Litros abastecidos: ${ListrosAbastecidos}L - Total: R$${total.toFixed(2)}`);
}
console.log(`\nabastecimento finalizado!`);
if (ListrosAbastecidos >= 30) {
    console.log(`🎉Parabéns! Você ganhou 50 pontos de cashback`);
}else {
    const faltam = 30 - ListrosAbastecidos;
    console.log(`🚨 Faltaram ${faltam} litros para ganhar os 50 pontos de cashback`);
}


console.log("⛽ Abastecimento completo!");
