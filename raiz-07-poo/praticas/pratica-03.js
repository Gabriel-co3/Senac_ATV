// const produto = {
//     nome: "Teclado",
//     preco: 80,
//     quantidade: 5,

//     calcularTotal() {
//         return this.preco * this.quantidade;
//     },
//     aprensetar () {
//         console.log(`Produtos: ${this.nome}`);
//         console.log(`Preço: R$ ${this.preco}`);
//         console.log(`Quantidade: ${this.quantidade}`);
//         console.log(`Total: R$ ${this.calcularTotal ()}`);
//     }
// };

// produto.apresentar();

// Criando Múltiplas Instâncias
// Uma classe, vários objetos
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    apresentar() {
        console.log(`${this.nome}: R$ ${this.preco}`);
    }
}

const produto1 = new Produto("Mouse", 50);
const produto2 = new Produto("Teclado", 80);
const produto3 = new Produto("Monitor", 700);

produto1.apresentar();
produto2.apresentar();
produto3.apresentar();
