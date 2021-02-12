import React, { useContext, useEffect } from "react";
import styled from 'styled-components';
import PokemonCard from "../../Components/pokemonCard";
import UrlsPokedexContext from "../../Contexts/UrlsPokedexContext";

export const MainContainer = styled.div`
  padding:0;
  height: 92vh;
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const HomePage = () => {
  const { states, setters, requests } = useContext(UrlsPokedexContext);

  useEffect(() => {
    requests.getPokemons();
  }, [requests]);

  /* função para adicionar na pokedex */
  const addPokemonToPokedex = (newItem) => {
    const index = states.pokedex.findIndex((i) => i.name === newItem.name);
    let newPokedex = [...states.pokedex];
    if (index === -1) {
      newPokedex.push({ ...states.newPokedex, ammount: 1 });
      alert(`${newItem.name} foi adicionado!`);
    } else {
      newPokedex[index].ammount += 1;
    }
    setters.setPokedex(newPokedex);
  };

  const pokemonsList =
    states.pokemons &&
    states.pokemons.map((item) => {
      return (
        <PokemonCard
          key={item.url}
          url={item.url}
          name={item.name}
          addPokemon={() => addPokemonToPokedex(item)}
        />
      );
    });

  return <MainContainer>{pokemonsList}</MainContainer>;
};

export default HomePage