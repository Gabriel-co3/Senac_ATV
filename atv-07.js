let produtos = ["Mouse", "Teclado", "Monitor"]; // Cria um array com três produtos.
console.log(produtos); // Mostra todos os produtos no terminal.

console.log(produtos[0]);
console.log(produtos[1]);
console.log(produtos[2]);

produtos[1] = "Notebook";
console.log(produtos);

console.log(produtos.length);

produtos.push('impressora');
console.log(produtos);
produtos.pop();
console.log(produtos);
for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}
for (let i = 0; i < produtos.length; i++){
    if (produtos[i] === 'Notebook') {
        console.log('Notebook encontrado!');
    }
}
