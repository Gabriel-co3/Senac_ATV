
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    atualizarPreco(novoPreco) {
        // 1. Verifica se o preço é numérico e finito
        if (
            typeof novoPreco !== "number" ||
            !Number.isFinite(novoPreco) ||
            novoPreco < 0
        ) {
            console.log("Preço inválido!");
            return;
        }

        // 2. Atualiza o preço somente se for válido
        this.preco = novoPreco;

        console.log("Preço atualizado com sucesso!");
    }
}

// 3. Cria um produto com preço inicial de 100
const produto1 = new Produto("Teclado", 100);

console.log("Preço inicial:", produto1.preco);

// 4. Teste com um preço válido: 90
produto1.atualizarPreco(90);
console.log("Preço atual:", produto1.preco);

// 5. Teste com um preço inválido: -10
produto1.atualizarPreco(-10);
console.log("Preço final:", produto1.preco);
