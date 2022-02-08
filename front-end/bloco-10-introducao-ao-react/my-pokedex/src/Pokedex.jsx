// Pokedex : esse componente representa a enciclopédia de pokemons. Esse componente recebe como entrada uma lista de pokemons para serem mostrados na tela. Para cada um desses pokemons recebidos, Pokedex chama o componente Pokemon . 

import React from 'react';
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='podekex'>
        {pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    );
  }
}

export default Pokedex;
