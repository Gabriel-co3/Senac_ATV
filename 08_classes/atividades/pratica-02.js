class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
    aprensetar () {
        console.log(`${this.nome} - ${this.cargo}`)
    }
}

const Funcionario1 = new Funcionario (
    "Ana",
    "Atendente"
);

const Funcionario2 = new Funcionario (
    "Carlos",
    "Gerente"
);
Funcionario1.aprensetar();
Funcionario2.aprensetar();

