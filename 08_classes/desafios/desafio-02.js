class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar () {
        console.log(`Aluno: ${this.nome} | Idade: ${this.idade}`);
    }
}

const aluno = [new Aluno ("Carlos", 20)];
aluno.forEach( (aluno) => {
    aluno.apresentar();
});