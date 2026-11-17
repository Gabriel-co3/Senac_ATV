use escola_bd;

create table matricula_tb (
id_matricula int primary key auto_increment,
id_aluno_mat  int not null,
id_curso_mat  int not null,
id_turnos_mat  int not null,
constraint fk_codigo_alunos
foreign key (id_aluno_mat)
references alunos (id_aluno),

constraint fk_codigo_curso
foreign key (id_curso_mat)
references curso (id_curso),

constraint fk_codigo_turnos
foreign key(id_turnos_mat)
references turnos (id_turno)
);


show tables;
describe curso;
describe turnos;

use loja_bd;

create table produtos_tb(
id_produto int primary key auto_increment,
nome varchar (100) not null,
valor varchar (100) not null,
data_cadastro timestamp default current_timestamp,
status_produto int default "1");

create table vendas_tb (
id_venda int primary key auto_increment,
id_cliente_vd int not null,
id_produto_vd int not null,
data_venda timestamp default current_timestamp,
status_venda int default "1",
constraint fk_codigo_cliente
foreign key (id_cliente_vd)
references clientes (id_clientes),

constraint fk_codigo_produtos
foreign key (id_produto)
references produtos_bd (id_produto)
);