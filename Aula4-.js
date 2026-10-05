import { number } from '@inquirer/prompts';

const idade = await number({ message: "Digite sua idade:"});

if (idade >= 18) {
    console.log("✅ Entrada liberada: Bem-vindo ao evento.");
} else {
    console.log("⛔ Entrada bloqueada: Evento restrito para maiores de 18 anos.");
}
if (idade >= 18) {
    console.log("✅ Entrada liberada: Bem-vindo ao EventCounts.");
} else {
    console.log("⛔ Entrada bloqueada: Jacare vá pra casa.");
}

