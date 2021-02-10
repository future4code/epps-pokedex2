import React from "react"
import styled from "styled-components"
import PokemonCard from './pokemonCard'

export const PokemonListContainer = styled.div `
    height: 92vh;
    margin: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const PokemonListCards = () => {

    return (
        <PokemonListContainer>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
            <PokemonCard/>
        </PokemonListContainer>
    )
}

export default PokemonListCards