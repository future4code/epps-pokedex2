import React, { useContext, useEffect, useState } from "react";
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

const HomePage = (props) => {
  const {states, setters, requests} = useContext(UrlsPokedexContext)
  const [pokedex, setPokedex] = useState([]);
  //const history = useHistory()

  useEffect(() =>{
    requests.getPokemons()
  },[requests])

  /* função para adicionar na pokedex */
  const addPokemonToPokedex = (newItem) => {
    let newPokedex = [...pokedex, newItem]
    setPokedex(newPokedex)
    alert(`${newItem.name}` + ' foi adicionado a Pokedex!')
  };

  console.log(pokedex)
    

  const pokemonsList = 
  states.pokemons && states.pokemons.map((item) =>{
    return(
      <PokemonCard
      key={item.url}
      url={item.url}
      name={item.name}
      addPokemon={() => addPokemonToPokedex(item)}
      />
    )
  })

  return <MainContainer>{pokemonsList}</MainContainer>;
};

export default HomePage