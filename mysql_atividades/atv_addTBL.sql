use escola_bd;

create table alunos (
id_aluno int primary key auto_increment,
nome varchar (100) not null,
rg varchar (20) unique not null,
cpf varchar (20) unique not null,
data_nascimento date not null,
cidade varchar (80) not null,
data_cadastro timestamp default current_timestamp,
status int (1) not null);

create table contato_pais (
id_contato_pais int primary key auto_increment,
nome varchar (100) not null,
telefone varchar (20) unique not null,
endereço varchar (50) not null,
responsavel varchar (100) not null,
data_cadastro timestamp default current_timestamp);

create table curso (
id_curso int primary key auto_increment,
nome varchar (100) not null);

create table matricula (
id_matricula int primary key auto_increment,
id_aluno  int not null,
id_curso  int not null,
data_matricula timestamp default current_timestamp);

show tables;

use agenda_bd;

create table if not exists contatos (
id_contatos int primary key auto_increment,
nome varchar (100) not null,
telefone varchar (20) not null,
email varchar (140) not null,
cidade varchar (80) not null,
data_cadastro timestamp default current_timestamp);

use chat_bd;

create table if not exists usuarios(
id_usuarios int primary key auto_increment,
nome varchar (100) not null,
email varchar (140) unique not null,
cidade varchar (80) not null,
senha varchar (255)  not null,
data_cadastro timestamp default current_timestamp);

use portifolio_bd;

create table if not exists profissionais (
id_profissionais int primary key auto_increment,
nome varchar (100) not null,
profissao varchar (100) not null,
email varchar (	150) unique not null,
telefone varchar (20) not null,
biografia text);

use loja_bd;

create table if not exists clientes (
id_clientes int primary key auto_increment,
nome varchar (100) not null,
cpf varchar (20) unique not null,
email varchar (100) unique not null,
telefone varchar (20) not null,
cidade varchar (80) not null);

use estoque_bd;

create table if not exists produtos (
id_produto int primary key auto_increment,
nome_produto varchar (100) not null,
descricao text,
preco_custo decimal (10,2) not null,
preco_venda decimal (10,2) not null,
quantidade int not null default 0,
constraint chk_produtos_valores check (
preco_custo >= 0
and preco_venda >= 0
and quantidade >= 0)
);





