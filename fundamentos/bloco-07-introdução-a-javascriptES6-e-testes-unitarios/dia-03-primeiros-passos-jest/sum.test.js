const sum = require('./sum');

describe('Retorna a soma dos parâmetros a e b', () => {
  test('soma corretamente dois valores', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  test('dispara um erro quando um dos parâmetros é uma string e se a mensagem de erro é "parameters must be numbers"', () => {
    expect(() => sum(4, "5")).toThrowError();
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
});

