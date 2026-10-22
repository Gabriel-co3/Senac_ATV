class Categoria {
    constructor (nome) {
        this.nome = nome;
    }
}
const categoria1 = new Categoria("Informática");
const categoria2 = new Categoria("Papelaria");
const categoria3 = new Categoria("Eletrônicos");

console.log(categoria1.nome);
console.log(categoria3.nome);
console.log(categoria2.nome);