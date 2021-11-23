function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// Exercício 1.
function adicionaDias () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const tagPai = document.getElementById('days');
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i];
    let dayItem = document.createElement('li');
    if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      tagPai.appendChild(dayItem);
    }
    else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      tagPai.appendChild(dayItem);
    }
    else if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      tagPai.appendChild(dayItem);
    } 
    else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      tagPai.appendChild(dayItem);
    }
  }
}
adicionaDias();

// Exercício 2.
function criaBotaoFeriado (str) {
  const paiButton = document.getElementsByClassName('buttons-container')[0];
  const botao = document.createElement('button');
  botao.id = 'btn-holiday';
  botao.innerHTML = str;
  paiButton.appendChild(botao);
}
criaBotaoFeriado('Feriados');

// Exercício 3.
const botao = document.getElementById('btn-holiday');
function mudaCor () {
  const classeHoliday = document.getElementsByClassName('holiday');
  let atualBg = 'rgb(238, 238, 238)';
  let novoBg = 'yellow';
  for (let i = 0; i < classeHoliday.length; i += 1) {
    if (classeHoliday[i].style.backgroundColor === atualBg) {
      classeHoliday[i].style.backgroundColor = novoBg;
    } else {
      classeHoliday[i].style.backgroundColor = atualBg;
    }
  }
}
botao.addEventListener('click', mudaCor);

// Exercício 4.
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
function criaBotaoSextou (str) {
  const paiButton = document.getElementsByClassName('buttons-container')[0];
  const botao = document.createElement('button');
  botao.id = 'btn-friday';
  botao.innerHTML = str;
  paiButton.appendChild(botao);
}
criaBotaoSextou('Sexta-feira');

// Exercício 5.
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
// É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
const botaoSextou = document.getElementById('btn-friday');
function mudaTexto () {
  const classeSextas = document.getElementsByClassName('friday');
  const novaFrase = "Happy-hour, tô chegando!";
  for (let i = 0; i < classeSextas.length; i += 1) {
    if (classeSextas[i].innerHTML !== novaFrase) {
      classeSextas[i].innerHTML = novaFrase;
    }
    else {
      let arrFridays = ['4', '11', '18', '25'];
      classeSextas[i].innerHTML = arrFridays[i];
      console.log(arrFridays[i]);
    }
  }
}
botaoSextou.addEventListener('click', mudaTexto);

// Exercício 6.
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original. 
const diasPossiveis = document.getElementById('days');
function mouseIn (event) {
  event.target.style.transform = "scale(2, 2)";
}
function mouseOut (event) {
  event.target.style.transform = "inherit";
}
diasPossiveis.addEventListener('mouseover', mouseIn);
diasPossiveis.addEventListener('mouseout', mouseOut);

// Exercício 7.
// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
function tarefaPersonalizada (str) {
  const novaTagSpan = document.createElement('span');
  const papaiDiv = document.getElementsByClassName('my-tasks')[0];
  novaTagSpan.className = 'span';
  novaTagSpan.innerHTML = str;
  papaiDiv.appendChild(novaTagSpan);
}
tarefaPersonalizada('Cozinhar');
tarefaPersonalizada('Correr');
tarefaPersonalizada('Varrer');
tarefaPersonalizada('Estudar');

// Exercício 8.
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

function legendaComCor (str) {
  const novaTagDiv = document.createElement('div');
  const papaiDiv = document.getElementsByClassName('my-tasks')[0];
  novaTagDiv.className = 'task';
  novaTagDiv.style.backgroundColor = str;
  papaiDiv.appendChild(novaTagDiv);
}
legendaComCor('blue');
legendaComCor('pink');
legendaComCor('orange');
legendaComCor('green');

// Exercício 9.
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function adicionaEventoClass () {
  const taskSelected = document.getElementsByClassName('task selected');
  const divTask = document.querySelectorAll('.task');
  for (let i = 0; i < divTask.length; i += 1){
    divTask[i].addEventListener('click', selectedOrNot);
    function selectedOrNot (event) {
      if (taskSelected.length === 0) {
        divTask[i].className = 'task selected';
        divTask[i].style.border = 'black solid 3px';
      }
      else {
        divTask[i].className = 'task';
        divTask[i].style.border = 'inherit';
      }
    }    
  }

}
adicionaEventoClass();

// Exercício 10.
//  Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function eventoCor () {
  const dias = document.querySelector('#days');
  const taskSelected = document.getElementsByClassName('task selected');
  const divTask = document.querySelector('.task');
  const corLegenda = divTask.style.backgroundColor;
  const corOriginal = 'rgb(119, 119, 119)';

  dias.addEventListener('click', dandoCor);
  function dandoCor (event) {
    if (taskSelected.length > 0 && event.target.style.color !== corLegenda) {
      event.target.style.color = taskSelected[0].style.backgroundColor;
    }
    else {
      event.target.style.color = corOriginal;
    }
  }    
}
eventoCor ();

// Bônus
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
// Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado. 
