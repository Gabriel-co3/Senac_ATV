use escola_bd;
describe alunos;
describe curso;
describe turnos;
describe matricula_tb;

select * from alunos order by nome;
select * from curso  order by nome;
select * from turnos order by nome;
select * from matricula_tb;

select
a.id_aluno AS Código,
a.nome AS nome,
c.nome AS Curso,
t.nome AS turno,
t.hora_inicio AS horario,
m.data_matricula AS datamatricula

from
matricula_tb AS m
inner join alunos AS a
on m.id_aluno_mat = a.id_aluno

inner join curso AS c
on m.id_curso_mat = c.id_curso

inner join turnos AS t
on m.id_turnos_mat = t.id_turno;

select
c.nome AS curso,
count(m.id_aluno_mat) AS quantidade
from matricula_tb AS m
inner join curso AS c
on m.id_curso_mat = c.id_curso
group by c.id_curso, c.nome
order by quantidade desc;

select
t.nome AS turnos,
count(m.id_aluno_mat) AS quantidade
from matricula_tb AS m
inner join turnos AS t
on m.id_turnos_mat = t.id_turno
group by t.id_turno, t.nome
order by quantidade desc;





