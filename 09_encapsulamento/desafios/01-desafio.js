class Aluno {
    #nota;

    constructor(nome, nota) {
        this.nome = nome;
        this.#nota = nota;
    }
    apresentar() {
        console.log(`Aluno: ${this.nome}`);
        console.log(`Nota: ${this.#nota}`);
    }
}
const Aluno1 = new Aluno("Gabriel", 9.5);

Aluno1.apresentar();

const Aluno2 = new Aluno("João", 7.5);

Aluno2.apresentar();