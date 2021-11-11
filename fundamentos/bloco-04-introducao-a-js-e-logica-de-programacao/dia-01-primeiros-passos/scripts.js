// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. 

let nomeDaPeca = "caValo";
switch (nomeDaPeca.toLowerCase()) {
  case "rainha":
    console.log("Rainha (queen) -> Diagonal, horizontal e vertical.");
    break;
  case "rei":
    console.log("Rei (king) -> Uma casa apenas para qualquer direção.");
    break;
  case "bispo":
    console.log("Bispo (bishop) -> Diagonal.");
    break;
  case "cavalo":
    console.log("Cavalo (knight) -> Único que pode pular sobre as peças; movimento 'L'.");
    break;
  case "torre":
    console.log("Torre (rook) -> Horizontal e vertical.");
    break;
  case "peão":
    console.log("Peão (pawn) -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log("Atenção, erro! Peça inválida!");
    break;
}
