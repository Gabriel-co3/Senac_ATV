// class Aluno {
//     constructor (nome) {
//         this.nome = nome;
//     }

// apresentar() {
//     console.log(`Meu nome ${this.nome}`);
//     }
// }




// const aluno1 = new Aluno ("Carlos");
// const aluno2 = new Aluno ("Mariana");


// aluno1. apresentar();
// aluno2. apresentar();

// Propriedades e Métodos em Classes 
// class Produto {
//     constructor (nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//     }
// }

// const produto1 = new Produto ("Mouse", 50);
// const produto2 = new Produto ("Teclado", 80);

// console.log(produto1.nome);
// console.log(produto2.nome);

// Métodos com parâmetros
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto(percentual) {
        return this.preco * (1 - percentual / 100);
    }
}
