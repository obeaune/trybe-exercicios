// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];
// 1. Você deve criar uma função que receba dois parâmetros: o id do funcionário e a informação disponível sobre ele ( firstName , lastName , specialities ).
// 2. Sua função deverá então retornar os resultados da busca pelo id para aquele funcionário e a informação consultada.
// 3. Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" .
// 4. Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" . 

// Pesquisa
const searchEmployee = (id, detail) => {
  let funcionario = '';
  for (let i = 0; i < professionalBoard.length; i += 1) {
    if (professionalBoard[i].id === id) {
      funcionario = professionalBoard[i];
    }
  }

  if (funcionario === '') {
    throw new Error ('ID não identificada');
  }

  if (detail in funcionario === false) {
    throw new Error ('Informação indisponível');
  }
  
  return funcionario[detail];
};
console.log(searchEmployee('1256-4', 'specialities'));

module.exports = searchEmployee;
