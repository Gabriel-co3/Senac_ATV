

let contador = 1; // 1. Variável de controle (Inicio)

while (contador <= 3) { // 2. Condição de Parada (teste)
    console.log(`Volta atual do loop ${contador}`);
    contador++; // 3. Modificação da Variável (passo)
}

console.log("🏁 Loop finalizado com sucesso!");

import { input } from '@inquirer/prompts'; 

let senha = "";
// Enquanto a senha digitada for diferente de "senac123":
while (senha !== "senac123") {
    senha = await input({ message: "Digite a senha do acesso ao cofre:" });
    if (senha !== "senac123") {
        console.log("❌ Senha incorreta! Tente novamente.");
 } 
}

console.log("🔓 acesso concedido! cofre liberado.");