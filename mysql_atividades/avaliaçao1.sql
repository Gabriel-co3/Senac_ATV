select version();

show databases;

create database if not exists restaurante_bd character set utf8mb4 collate utf8mb4_unicode_ci;

use restaurante_bd;

use escola_bd;

create table professor (
id_professor int primary key auto_increment,
nome varchar (100) not null,
email varchar (150) unique not null,
telefone varchar (20) unique not null,
data_cadastro timestamp default current_timestamp);

create table disciplinas (
id_disciplina int primary key auto_increment,
nome varchar (100) not null,
carga_horaria int not null,
descricao varchar (255) not null);

create table turnos (
id_turno int primary key auto_increment,
nome varchar (50) not null,
hora_inicio time,
hora_fim time);

describe escola_bd.professor;
describe escola_bd.disciplinas;
describe escola_bd.turnos;


insert into professor ( nome, email, telefone) values 
("jeronimo" , "jeronimo@gmail.com", "8598666545"),
("Carlos" , "carlos@gmail.com" , "759232321"),
("Eugenio" , "eugenio@gmail.com" , "728599232");

select * from professor;

insert into disciplinas ( nome ,  carga_horaria , descricao) value
("banco de dados" , "80" , "Aulas"),
("Programação Web" , "100" , "Aulas"),
("Lógica de Programação" , "60" , "Aulas"),
("Desenvolvimento de Sistemas" , "120" , "Aulas"),
("Redes de computadores" , "80" , "Aulas");

select * from disciplinas;

insert into turnos ( nome , hora_inicio , hora_fim) value 
("Manhã" , "07:30" , "11:30"),
("Tarde" , "13:00" , "17:00"),
("Noite" , "18:30" , "22:00");

select * from turnos;

