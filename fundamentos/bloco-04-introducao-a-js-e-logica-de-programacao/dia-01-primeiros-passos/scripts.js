// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados. 
const a = 5;
const b = 20;
const c = 13;
if (a > b && a > c) {
  console.log("O maior número é o da const A: " + a);
} else if (b > a && b > c){
  console.log("O maior número é o da const B: " + b);
} else {
  console.log("O maior número é o da const C: " + c);
}
