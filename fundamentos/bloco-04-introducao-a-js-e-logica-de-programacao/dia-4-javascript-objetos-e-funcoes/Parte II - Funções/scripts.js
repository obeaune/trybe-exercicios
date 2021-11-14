// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
function verificaPalindrome(param1) {
  let arrFrase = param1.split('').reverse().join(''); 
  if (arrFrase === param1) {
    return(true);
  } else {
    return(false);
  }
}

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor. 

// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
function maiorIndice (param1) {
  let maiorValor = 0;
  for (let i = 0; i < param1.length; i += 1) {
    if (param1[i] > maiorValor) {
      maiorValor = param1[i];
    }
  }
  return(param1.indexOf(maiorValor))
}

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
function menorIndice (param1) {
  let menorValor = param1[0];
  for (let i = 0; i < param1.length; i += 1) {
    if (param1[i] < menorValor) {
      menorValor = param1[i];
    }
  }
  return(param1.indexOf(menorValor))
}

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
function maisCaracteres (param1) {
  let maiorNum = param1[0].length;
  let nome;
  for (let i = 0; i < param1.length; i += 1) {
    if (param1[i].length > maiorNum) {
      maiorNum = param1[i].length;
      nome = param1[i];
    }
  }
  return(nome)
}

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
function maisRepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
function somatorio(param1) {
  let sum = 0;
  for (let i = 0; i <= param1; i +=1) {
    sum += i;
  }
  return(sum);
}

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word . 

// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(word, ending){
  let tam = word.length - ending.length;
  let fin = "";
  for (let i = tam; i < word.length; i += 1) {
    fin += word[i];
  }
  if (fin === ending) {
    return true;      
  } else {
    return false;
  }
}
