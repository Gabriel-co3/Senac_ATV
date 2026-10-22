class funcionario {
    constructor(nome, cargo, salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    apresentar() {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: ${this.salario}`;
    }
}
const Funcionario1 = new funcionario("João", "Desenvolvedor", 5000);
console.log(Funcionario1.apresentar());