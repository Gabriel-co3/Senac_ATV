use loja_bd;


INSERT INTO clientes (nome, cpf, email, telefone, cidade)
VALUES
('João Silva', '123.456.789-00', 'joao@gmail.com', '(85) 99999-1111', 'Fortaleza'),
('Maria Oliveira', '234.567.890-11', 'maria@gmail.com', '(85) 98888-2222', 'Caucaia'),
('Pedro Santos', '345.678.901-22', 'pedro@gmail.com', '(85) 97777-3333', 'Maracanaú'),
('Ana Costa', '456.789.012-33', 'ana@gmail.com', '(85) 96666-4444', 'Eusébio');

INSERT INTO produtos_tb (nome, valor, status_produto)
VALUES
('Notebook Dell', '3500.00', 1),
('Mouse Logitech', '89.90', 1),
('Teclado Mecânico', '199.90', 1),
('Monitor Samsung', '1200.00', 1);

INSERT INTO vendas_tb (id_cliente_vd, id_produto_vd, status_venda)
VALUES
(1, 1, 1),
(1, 2, 1),
(1, 3, 1),
(2, 2, 1),
(2, 4, 1);