class Cliente {
    constructor(nome,banco,saldo) {
        this.nome = nome
        this.banco = banco
        this.saldo = saldo
}
exibircliente () {
console.log(`Cliente: ${this.nome}`);
    console.log(`Banco: ${this.banco}`);
    console.log(`Saldo: ${this.saldo}`);
}
correcaosaldo(porcentagem) {
    return this.saldo * (1+porcentagem/100);
}

}

const cliente1 = new Cliente("Gabriel", "bradesco",20000);

cliente1.exibircliente();

console.log("SALDO ATUAL R$ ", cliente1.correcaosaldo(5));