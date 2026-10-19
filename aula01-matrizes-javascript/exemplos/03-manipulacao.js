let alunos =  [
    [1, "Carlos", 25],
    [2, "André", 30],
    [3, "Maria", 22]
];
console.log("1. Matirz inicial", alunos);
alunos.push([4, "Raica", 16]);
console.log("2. Após adicionar Raica:", alunos);

console.log("3. Quantidade de alunos:", alunos.length);

alunos[1][1] = "Mariana";
console.log("4. Após alterar o nome:", alunos);

alunos.splice(2, 1);
console.log("5, Após excluir um aluno:", alunos);
console.log("6. Matriz final:", alunos);

