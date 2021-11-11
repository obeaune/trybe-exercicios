//3. Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "Papel";
let player2 = "Papel";
const pedra = "Pedra";
const papel = "Papel";
const tesoura = "Tesoura";

if (player1 === pedra && player2 === tesoura) {
  console.log("Player 1 won");
} else if (player1 === pedra && player2 === papel) {
  console.log("Player 2 won");
} else if (player1 === tesoura && player2 === pedra) {
  console.log("Player 2 won");
} else if (player1 === tesoura && player2 === papel) {
  console.log("Player 1 won");
} else if (player1 === papel && player2 === tesoura) {
  console.log("Player 2 won");
} else if (player1 === papel && player2 === pedra) {
  console.log("Player 1 won");
} else {
  console.log("A Ties");
}
