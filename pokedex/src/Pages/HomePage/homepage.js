import React from "react";
import styled from 'styled-components';
import PokemonListCards from "../../Components/pokemonListCards";

export const MainContainer = styled.div`
  margin:0;
  padding:0;
`

const HomePage = () => {
    return (
        <div>
            <PokemonListCards/>
        </div>
    )
}

export default HomePage