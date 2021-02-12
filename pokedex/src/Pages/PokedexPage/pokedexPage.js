import React, { useContext } from "react";
import PokemonCardPokedex from "../../Components/pokemonCardPokedex";
import UrlsPokedexContext from "../../Contexts/UrlsPokedexContext";
import styled from 'styled-components';

export const MainContainer = styled.div`
  padding:0;
  height: 92vh;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PokedexPage = () => {
  const { states, setters } = useContext(UrlsPokedexContext);

  /* função para remover da pokedex */
  const removePokemon = (remove) => {
    const index = states.pokedex.findIndex((i) => i.name === remove.name);
    let newPokedex = [...states.pokedex];
    if (newPokedex[index].amount === 1) {
      newPokedex.splice(index, 1);
    } else {
      newPokedex[index].amount -= 1;
    }
    setters.setPokedex(newPokedex);
    alert("Pokemon removido");
  };

  const pokemonsList =
    states.pokedex &&
    states.pokedex.map((item) => {
      return (
        <PokemonCardPokedex
          key={item.url}
          url={item.url}
          name={item.name}
          rmvPokemon={() => removePokemon(item)}
        />
      );
    });

  return <MainContainer>{pokemonsList}</MainContainer>;
};

export default PokedexPage;