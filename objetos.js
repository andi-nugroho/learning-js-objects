/* Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }
  */

  //RESPOSTA EX 01
  function Pessoa(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.nadar = function () {
        console.log (this.nome + ' ' + this.sobrenome);
    }
  };
  
  // Crie 3 pessoas, João - 20 anos,
  // JUlia - 25 anos, Suzana - 23 anos

  //RESPOSTA EX02

  const joao = new Pessoa ('Joao', 'Neto', 21);
  const julia = new Pessoa ('Julia', 'Alves', 81);
  const suzana = new Pessoa ('Suzana', 'Leao', 23);

  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

  function Moeda (selector) {
    
    const elementos = document.querySelectorAll (selector);

    this.selecElement = elementos;
    console.log (elementos);

    this.addClass = function (classe) {
        elementos.forEach ((elem) => {
            elem.classList.add(classe); 
        })
    }
    this.removeClass = function (remove) {
        elementos.forEach ((elem) => {
            elem.classList.remove(remove); 
        })
    }
  };

  const link = new Moeda ('li');
  //link.addClass('LINK-ATV')
  const dot = new Moeda ('ul')
//dot.addClass ('DOT')