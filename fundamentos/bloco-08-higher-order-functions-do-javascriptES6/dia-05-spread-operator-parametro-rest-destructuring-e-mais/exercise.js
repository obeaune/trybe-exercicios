//  1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
// Dica: use spread operator .

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// essa questão não faz sentido para mim pois já está retornando o que se pede.
// colocar o ...rectangle dentro de rectangleArea não muda nada, a não ser que seja pra tirar o console.log de dentro do forEach e coloque fora chamando a func (que vai retornar a mesma coisa).
rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle);
  // console.log(rectangle[0] * rectangle[1]);
});

//  2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

const sum = (...args) => args.reduce((acc, cur) => acc + cur);

// 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo: 
// Dica: use object destructuring.

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20: 
// Dica: use object destructuring . 

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

const filterPeople = (arr) => arr.filter(
  ({ bornIn, nationality}) =>
  nationality === 'Australian'
  && bornIn > 1900 && bornIn <= 2000
  );

// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só: 
// Dica: use array destructuring . 

const myList = [1, 2, 3];

// function swap (arr) { 
//   const [a, b, c] = arr;
//   return [c, b, a];
// };

const swap = ([a, b, c]) => [c, b, a];

//  6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro: 
// Dica: use array destructuring e abbreviation object literal . 

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([nome, marca, ano]) => ({nome, marca, ano});

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento: 
// Dica: use object destructuring . 

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`; 

//  8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

const greet = (name, def = 'Hi') => `${def} ${name}`;

//  9 - Existe um objeto yearSeasons que representam as estações do ano. Cada estação é uma chave deste objeto e o valor de cada chave é um array de strings, representando os meses daquela estação. A partir deste objeto, desestruture as estações do ano e espalhe-as em um array de meses do ano.
// Dica : use object destructuring e spread operator .
// OBS : As estações do ano aqui descritas têm base nas estações do hemisfério norte.

const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter} = yearSeasons;
const yearsMonths = [...spring, ...summer, ...autumn, ...winter];
