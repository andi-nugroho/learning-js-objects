// Retorne um número aleatório
// entre 1000 e 1100

const numAleatorio = Math.floor(Math.random() * (1100 - 1000 + 1) + 1000); 
console.log(numAleatorio);



// Retorne o maior número da lista abaixo
const numeros = '4, 35, 20, 8, 9';
const arrayNum = numeros.split(',');
const numMax = Math.max(...arrayNum);
console.log(numMax)




// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
let listaPrecos = ['R$ 59,19', ' R$ 107,02', ' R$ 137,222', ' R$ 10,216',
                     'R$ 234  ', 'r$  10', 'r$  50', 'r$ 324', ' R$ 697,82'];

function limpaPrecos (item) {
   item = +item.toUpperCase().replaceAll('R$', '').trim().replace(',', '.');
   item = +item.toFixed(2);
   return item;
}


let somar = 0;
listaPrecos.forEach((preco) => {
   somar += limpaPrecos(preco);
});

console.log(somar.toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'}));

