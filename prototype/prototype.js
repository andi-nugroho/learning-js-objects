// EX 01 Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

//RESPOSTA EX 01

function Pessoas (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}

Pessoas.prototype.nomecompleto = function () {
    return this.nome + ' ' + this.sobrenome 
}

const manoel = new Pessoas ('Manoel', 'Dias', 99);

// EX 02 - Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

//RESP EX 02
const listaUl = document.querySelectorAll ('ul');
/* MÉTODOS ACESSADOS NODELIST: 
NodeList.prototype - DIGITAR NO CONSOLE

entries
: 
ƒ entries()
forEach
: 
ƒ forEach()
item
: 
ƒ item()
keys
: 
ƒ keys()
length
: 
(...)
values
: 
ƒ values()

MÉTODOS ACESSADOS HTMLCollection:

item
: 
ƒ item()
length
: 
(...)
namedItem
: 
ƒ namedItem()
*/

// Liste os construtores dos dados abaixo
// DIGITAR: li.innerHTML.constructor.name

const li = document.querySelector('li');

li; //'HTMLLIElement'
li.click; //'Function' //li.click.constructor.name
li.innerText; //'String'
li.value; //'Number'
li.hidden; //'Boolean'
li.offsetLeft; //'Number'
li.click(); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;  //'sTRING'
