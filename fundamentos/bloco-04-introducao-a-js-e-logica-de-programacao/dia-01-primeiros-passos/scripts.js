const salarioBruto = 3000;
let salarioBase;
let aliquotaIR;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 0.08);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 0.09);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
  salarioBase = salarioBruto - 570.88;
}

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
}
console.log("Seu salário líquido é de R$ " + (salarioBase - aliquotaIR) + ".");
