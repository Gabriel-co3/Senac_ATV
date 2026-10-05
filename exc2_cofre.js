import { number } from '@inquirer/prompts';

const pinCorreto = 1234;
const MAX_TENTATIVAS = 3;

let tentativasRestantes = 3;

const pin = await number({
    message: "Digite o pin do cofre:"
});
if (pin === pinCorreto) {
    console.log("Cofre aberto com sucesso!");
} else {
    tentativasRestantes--;
    console.log(`Pin incorreto. Acesso negado. Tentativas restantes: ${tentativasRestantes}`);
    if (tentativasRestantes === 0) {
        console.log("Número máximo de tentativas atingido. Cofre bloqueado.");
    }
}

