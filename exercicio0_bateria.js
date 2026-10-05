import { number } from '@inquirer/prompts';

let nivelBateria = 0;

while (nivelBateria <= 100){
    console.log(`Nivel da bateria: ${nivelBateria}%`);
    nivelBateria += 20;
}
console.log("✅ Bateria totalmente carregada! Pronto para uso");

  // Loop for carregamento da bateria
// for (let nivel = 0; nivel<=100; nivel+=20){
//     console.log(`Carregando: ${nivel}%`)
// }

// console.log("Bateria carregada. Pronto para uso.")