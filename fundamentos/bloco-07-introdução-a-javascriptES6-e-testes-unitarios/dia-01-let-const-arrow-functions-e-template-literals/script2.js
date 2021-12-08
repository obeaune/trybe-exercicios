// Parte 2

// 1. Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
const factorial = number => {
  let result = 1; //Resultado pra zero e um;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
}
console.log(factorial(4));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra. 
// ex.: longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");
// retorna 'aconteceu'
const longestWord = str => {
  const arrOfWords = str.split(" ");
  arrOfWords.sort((a, b) => a.length - b.length);
  return(arrOfWords[arrOfWords.length - 1]);
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));

// 3. Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
const display = document.getElementById('display');
const botao = document.getElementById('btn');
let clickCount = 0;
botao.addEventListener('click', () => display.innerHTML = clickCount += 1);

// 4.  Crie um código JavaScript com a seguinte especificação: 
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo: -String determinada: "Tryber x aqui!"
//          -Parâmetro: "Bebeto"
//          -Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills . 
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
const skills = ['HTML', 'ES6', 'CSS', 'DOM', 'Jest'];
let strPadrao = 'Tryber x aqui!';
const func1 = str => strPadrao.replace('x', str);

const func2 = param => {
  skills.sort();
  return `${param} Minhas cinco principais habilidades são: ${skills.join(', ')}.`
}

console.log(func2(func1('Caroline')));
