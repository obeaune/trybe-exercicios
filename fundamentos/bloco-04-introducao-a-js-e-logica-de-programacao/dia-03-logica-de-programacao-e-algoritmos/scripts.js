// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
// n = 5
// *****
// *****
// *****
// *****
// *****
let abelha = "abelha";
let n = 5;
let linha = "";
let preenc = "*";
for (let i = 0; i < n; i += 1) {
  linha = linha + preenc;
}
for (let i = 0; i < n; i += 1){
  console.log(linha);
  console.log(abelha);
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
// n = 5
// *
// **
// ***
// ****
// *****
// let n = 5;
// let linha = "";
// for (let index = 0; index < n; index += 1) {
//   linha += "*";
//   console.log(linha);
// }

// 3- Agora inverta o lado do triângulo. Por exemplo: 
// n = 5
//     *
//    **
//   ***
//  ****
// *****

//  4- Depois, faça uma pirâmide com n asteriscos de base: 
// n = 5
//
//   *
//  ***
// *****
