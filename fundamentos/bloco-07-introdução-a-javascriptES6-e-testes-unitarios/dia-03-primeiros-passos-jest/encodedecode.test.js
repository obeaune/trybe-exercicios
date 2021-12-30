const { encode, decode } = require('./encodedecode');

describe('Testando as funções de codificar e de descodificar', () => {
  test('Saber se Encode e Decode são funções definidas', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  test('Testando se Encode muda todas as vogais', () => {
    expect(encode('ah, tem um gosto meio roxo!')).toBe('1h, t2m 5m g4st4 m234 r4x4!');
  });
  test('Testando se Decode transforma os números em vogais novamente', () => {
    expect(decode('1h, t2m 5m g4st4 m234 r4x4!')).toBe('ah, tem um gosto meio roxo!');
  });
  test('Testando se o tamanho da string permanece o mesmo', () => {
    expect(encode('Transmogular!')).toHaveLength(13);
    expect(decode('Tr1nsm4g5l1r!')).toHaveLength(13);
  });
});
