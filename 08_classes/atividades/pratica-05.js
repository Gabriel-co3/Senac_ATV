class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota; 
    }
    apresentar() {
        console.log(`Aluno: ${this.nome} | Nota: ${this.nota}`);
    }
}

const alunos = [
    new Aluno ("Carlos", 8),
    new Aluno ("Mariana", 9),
    new Aluno ("Paula", 7)
];
alunos.forEach( (aluno) => {
    aluno.apresentar();
});

alunos.push (new Aluno ("Raica", 10));
console.log("Lista atualizada:");
alunos.forEach((aluno) => { 
    aluno.apresentar();
});
