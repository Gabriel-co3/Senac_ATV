use escola_bd;
select * from alunos order by cidade;/* seleciona todos os dados */ 

use agenda_bd;

select * from contatos;

INSERT INTO contatos (nome, telefone, email, cidade)
VALUES
('João Silva', '85999999999', 'joao@gmail.com', 'Fortaleza'),
('Maria Santos', '85988888888', 'maria@gmail.com', 'Caucaia'),
('Pedro Oliveira', '85977777777', 'pedro@gmail.com', 'Maracanaú');

use chat_bd;
select * from usuarios;
INSERT INTO usuarios (nome, email, cidade, senha)
VALUES
('João Silva', 'joao@gmail.com', 'Fortaleza', 'senha123'),
('Maria Santos', 'maria@gmail.com', 'Caucaia', 'maria123'),
('Pedro Oliveira', 'pedro@gmail.com', 'Maracanaú', 'pedro123');

use estoque_bd;
select * from produtos;

INSERT INTO produtos (nome_produto, descricao, preco_custo, preco_venda, quantidade)
VALUES
('Notebook', 'Notebook Intel Core i5', 2500.00, 3200.00, 10),
('Mouse', 'Mouse sem fio USB', 35.00, 59.90, 25),
('Teclado', 'Teclado mecânico', 120.00, 189.90, 15);