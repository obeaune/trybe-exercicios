const searchEmployee = require('./checkDados');

describe('Testes para a função searchEmployee', () => {
  it('Se a função existe', () => {
    expect(typeof searchEmployee).toBe('function');
  });
  it('Se com parâmetros corretos retorna resultados válidos', () => {
    expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    expect(searchEmployee('5569-4', 'lastName')).toBe('Jobs');
    expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    expect(searchEmployee('1256-4', 'specialities')).toEqual([ 'Hooks', 'Context API', 'Tailwind CSS' ]);
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual([ 'Ruby', 'SQL' ]);
    expect(searchEmployee('4678-2', 'firstName')).toBe('Paul');
  });
  it('Se dispara um erro quando o primeiro parâmetro é inválido e se a mensagem de erro é "ID não identificada"', () => {
    expect(() => searchEmployee('1313', 'lastName')).toThrowError();
    expect(() => searchEmployee('1313', 'lastName')).toThrowError('ID não identificada');
  });
  it('Se dispara um erro quando o segundo parâmetro é inválido e se a mensagem de erro é "Informação indisponível"', () => {
    expect(() => searchEmployee('1256-4', 'fullName')).toThrowError();
    expect(() => searchEmployee('1256-4', 'fullName')).toThrowError('Informação indisponível');
  });
  it('Se dispara um erro quando a função é chamada sem nenhum parâmetro válido', () => {
    expect(() => searchEmployee('42', 'AnswerToTheUltimateQuestionOfLifeTheUniverseAndEverything')).toThrowError();
  });

});

