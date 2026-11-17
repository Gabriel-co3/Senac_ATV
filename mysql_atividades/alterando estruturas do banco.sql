use escola_bd;

rename table alunos to estudantes;
rename table estudantes to alunos;

alter table curso add column status int default "1";
alter table alunos add column status int default "1";
alter table turnos add column status int default "1";
describe curso;

alter table clientes add column status int default "1";