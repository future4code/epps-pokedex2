import React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "../Components/header"
import HomePage from "../Pages/HomePage/homepage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/pokemonDetailPage"
import PokedexPage from "../Pages/PokedexPage/pokedexPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <HomePage />
                </Route>
                <Route exact path="/pokemon-detalhes/:pokemonName">
                    <Header/>
                    <PokemonDetailPage />
                </Route>
                <Route exact path="/pokedex">
                    <Header/>
                    <PokedexPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router