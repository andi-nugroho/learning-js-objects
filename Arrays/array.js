const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// 1-Remova o primeiro valor de comidas e coloque em uma variável
// 2-Remova o último valor de comidas e coloque em uma variável
// 3- Adicione 'Arroz' ao final da array
// 4- Adicione 'Peixe' e 'Batata' ao início da array

//1
const comida1 = comidas.shift();
console.log(comida1);

//2
const ultimaComida = comidas.pop();
console.log(ultimaComida);

//3
const addComida = comidas.push('Arroz');
console.log(comidas);

//4
const adicionaComida = comidas.splice(0, 0, 'Peixe', 'Batata');
console.log(comidas);




// 1- Arrume os estudantes em ordem alfabética
// 2- Inverta a ordem dos estudantes
// 3- Verifique se Manoel faz parte dos estudantes
// 4- Verifique se Edilaine faz parte dos estudantes
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Alex','Julia', 'Suzana', 'Laíse', 'Giovana', 'Felipe', 'Daniela', 'Edilaine'];

// 1 
const ordemAlfa = estudantes.sort();
//console.log(ordemAlfa);

//2 
const inverteOrdem = estudantes.reverse();
//console.log(inverteOrdem);
console.log(estudantes)

//3
const incluiEstudante = estudantes.includes('Manoel');
console.log(incluiEstudante);

//4 
incluiAluna = estudantes.includes('Edilaine');
console.log(incluiAluna)




// Substitua section por ul e div com li,
// utilizando split e join
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`

html = html.split('section').join('ul');
//console.log(html2)

const trocaDiv = html.split('div').join('li');
console.log(trocaDiv);




// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

const copiaCarros = carros.slice();
console.log(copiaCarros);

const removeUltimo = carros.pop();
console.log(carros)
