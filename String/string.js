// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 139',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 96',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 46',
  },
];

let somaTaxa = 0;
let somaReceb = 0;
transacoes.forEach((itens) => {

  const num = +itens.valor.replaceAll('R$', '');
  if (itens.descricao.includes('Taxa')) {
    somaTaxa += num
  } else if (itens.descricao.includes('Receb')) {
    somaReceb += num    
  }  
});
console.log(somaTaxa);
console.log(somaReceb);
////////////////////////////////



// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransp = transportes.split (';');
console.log(arrayTransp);
////////////////////////////////////



// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const arrayHtml = html.split('span').join('a')
console.log (arrayHtml);

////////////////////////////////



// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

const ultimoChar = frase[frase.length -2]
console.log(ultimoChar)
///////////////////////////////



// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let somarTaxas = 0;
transacoes2.forEach((taxa) => {  
  taxa = taxa.toLocaleLowerCase();
  taxa = taxa.trim();
  taxa = taxa.slice(0,4)

  if (taxa === 'taxa') {
    somarTaxas++
  }
});
console.log(somarTaxas);