// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaRecebida = 40;

if (notaRecebida < 0 || notaRecebida > 100) {
  console.log("Erro, nota inválida!");
} else if (notaRecebida >= 90) {
  console.log("Nota = 'A'.");
} else if (notaRecebida >= 80) {
  console.log("Nota = 'B'.");
} else if (notaRecebida >= 70) {
  console.log("Nota = 'C'.");
} else if (notaRecebida >= 60) {
  console.log("Nota = 'D'.");
} else if (notaRecebida >= 50) {
  console.log("Nota = 'E'.");
} else {
  console.log("Nota = 'F'.");
}
