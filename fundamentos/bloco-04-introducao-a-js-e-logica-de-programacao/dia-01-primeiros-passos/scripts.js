// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus. 
// Um ângulo será considerado inválido se não tiver um valor positivo. 

let angA = 70;
let angB = 40;
let angC = 70;
let somaDosAngulos = angA + angB + angC;

if (angA > 0 && angB > 0 && angC > 0) {
  if (somaDosAngulos === 180) {
    console.log("True.");
  } else {
    console.log("False.");
  }
} else {
  console.log("Erro: ângulo inválido.");
}
