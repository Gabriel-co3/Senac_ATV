/*update  tabela set campo = 'valor'
where campo = 'critério'*/
use escola_bd;
select * from alunos;

update  alunos set nome = "Dayanne Raica Silva"
where id_aluno = '5';

update alunos set cidade = "Fortaleza"
where id_aluno = '5';

update alunos set status = "0"
where id_aluno = '5' or id_aluno = '1';

update alunos set nome = "Gabriel Lucas Silva"
where id_aluno = '1';

update alunos set datanascimento = "2010-05-07"
where id_aluno = '5';