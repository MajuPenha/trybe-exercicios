import React from "react";
import pokemons from "./data";
import Pokedex from './Pokedex';



class Pokemon extends React.Component {
  render() {
    return (
      <section>
      {pokemons.map((item) => <Pokedex name={item} key={item.id} />)}
      </section>
      
    )
  }
}

export default Pokemon;