use escola_bd;

select * from alunos;
describe alunos;
insert into alunos (nome , datanascimento , rg ,cpf , cidade , status  ) 
values
("Maluquinho" , "1982-04-25" , "2321321321" , "21341567712" , "Fortaleza" , "1"); 

delete from alunos where id_aluno = "23";