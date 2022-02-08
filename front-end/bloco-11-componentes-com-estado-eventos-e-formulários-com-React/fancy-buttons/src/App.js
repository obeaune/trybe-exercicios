import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counterOne: 0,
      counterTwo: 0,
      counterThree: 0,
    }

    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne() {
    this.setState(({ counterOne }) => ({
      counterOne: counterOne + 1
    }), () => {
      console.log(`Botão 1 é: ${this.getButtonColor(this.state.counterOne)}`)
    })
  }
  
  handleClickTwo() {
    this.setState(({ counterTwo }) => ({
      counterTwo: counterTwo + 1
    }), () => {
      console.log(`Botão 2 é: ${this.getButtonColor(this.state.counterTwo)}`)
    })
  }
  
  handleClickThree() {
    this.setState(({ counterThree }) => ({
      counterThree: counterThree + 1
    }), () => {
      console.log(`Botão 3 é: ${this.getButtonColor(this.state.counterThree)}`)
    })
  }

  // essa função ser chamada sem precisar do bind me surpreendeu.
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render () {
    const { counterOne, counterTwo, counterThree } = this.state
    return (
      <>
        <button 
          onClick={ this.handleClickOne }
          style={{ backgroundColor: this.getButtonColor(counterOne) }} 
        >
          Botão 1 | count: {counterOne}
        </button>

        <button
          onClick={ this.handleClickTwo }
          style={{ backgroundColor: this.getButtonColor(counterTwo) }}
        >
          Botão 2 | count: {counterTwo}
        </button>

        <button
          onClick={ this.handleClickThree }
          style={{ backgroundColor: this.getButtonColor(counterThree) }}
        >
          Botão 3 | count: {counterThree}
        </button>
      </>
    )
  }
}

export default App;
