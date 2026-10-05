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

  // forma usando while 
let litros_abastecidos = 0;

const limite = await number({
    message: "Quantos litros meu patrão? "
})

while (litros_abastecidos <= limite){
    console.log(`Litros: ${litros_abastecidos} L | Subtotal: R$ ${5.8*litros_abastecidos}`)
    litros_abastecidos += 5
    // litros_abastecidos = litros_abastecidos + 5
}

const cashback = ((litros_abastecidos-5) >= 30 ) 
? "Parabéns, vc ganhou cashback!" 
: `Faltam ${30-(litros_abastecidos-5)}L para voce ganhar cashback`

console.log(cashback);