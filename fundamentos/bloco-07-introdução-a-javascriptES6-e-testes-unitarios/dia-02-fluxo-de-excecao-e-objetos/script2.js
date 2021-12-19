const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNewKey = (obj, key, val) => {
  obj[key] = val;
}
addNewKey(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listOfKeys = (obj) => Object.keys(obj);
listOfKeys(lesson2);

// Crie uma função para mostrar o tamanho de um objeto. 
const sizeOfObj = (obj) => Object.keys(obj).length;
sizeOfObj(lesson2);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listOfValues = (obj) => Object.values(obj);
listOfValues(lesson2);

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . 
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//  Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. 
const totalStudents = (obj) => {
  let total = 0;
  const arrKeysObj = Object.keys(obj);
  for (index in arrKeysObj){
    total += obj[arrKeysObj[index]]['numeroEstudantes'];
  }
  return total;
}
totalStudents(allLessons);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
// Por exemplo: console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'
const getValueByNumber = (obj, numb) => Object.values(obj)[numb];
getValueByNumber(lesson1, 0);

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo: 
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
// console.log(Object.entries(lesson1)[0]);

// const verifyPair = (obj, key, value) => {
//   const arr = Object.entries(obj);
//   let trueOrFalse = false;
//   for (let i in arr) {
//     if (arr[i][0] === key && arr[i][1] === value) {
//       trueOrFalse = true;
//     }
//   } return trueOrFalse;
// }

// função refatorada;
const verifyPair = (obj, key, value) => obj[key] === value ? true : false;
verifyPair(lesson3, 'materia', 'Maria Clara');
