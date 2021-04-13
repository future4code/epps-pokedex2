import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/axios";
import UrlsPokedexContext from "../Contexts/UrlsPokedexContext";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [image, setImage] = useState([]);

  const getPokemons = () => {
    axios
      .get(`${BASE_URL}/?offset=0&limit=20`)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const states = { pokemons, pokedex, image };
  const setters = { setPokemons, setPokedex, setImage };
  const requests = { getPokemons };

  const data = { states, setters, requests };

  return (
    <UrlsPokedexContext.Provider value={data}>
      {props.children}
    </UrlsPokedexContext.Provider>
  );
};

export default GlobalState;