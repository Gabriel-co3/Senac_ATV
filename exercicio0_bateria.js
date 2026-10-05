import { number } from '@inquirer/prompts';

let nivelBateria = 0;

while (nivelBateria <= 100){
    console.log(`Nivel da bateria: ${nivelBateria}%`);
    nivelBateria += 20;
}
console.log("✅ Bateria totalmente carregada! Pronto para uso");
