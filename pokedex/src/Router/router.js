import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { goBack, goToPokedex, goToHomePage } from "./coordinator"
import Header from "../Components/Header"
import HomePage from "../Pages/HomePage"
import PokemonDetailPage from "../Pages/PokeDetailPage"
import PokedexPage from "../Pages/PokedexPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header 
                        title="Lista de pokemons"
                        leftButtonFunction={goToPokedex}
                    />
                    <HomePage />
                </Route>
                <Route exact path="/pokemon-detalhes/:pokemonName">
                    <Header 
                        leftButtonFunction={goBack}
                        title=""
                        rightButtonFunction={goToPokedex}
                    />
                    <PokemonDetailPage />
                </Route>
                <Route exact path="/pokedex">
                    <Header 
                        leftButtonFunction={goToHomePage}
                        title="Pokedex"
                    />
                    <PokedexPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router