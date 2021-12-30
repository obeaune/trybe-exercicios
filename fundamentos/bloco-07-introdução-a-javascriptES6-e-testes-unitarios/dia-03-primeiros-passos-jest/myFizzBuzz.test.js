const myFizzBuzz = require('./myFizzBuzz');
//  
describe('testa a função myFizzBuzz', () => {
  test('verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(9)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(11)).toBe(11);
    expect(myFizzBuzz('b')).toBeFalsy();
    // poderia ser também expect(myFizzBuzz('b').toBe('false');
  });
});