export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToPokedex = (history) => {
    history.push("/pokedex");
  };

  export const goToPokeDetailPage = (history, pokemonName) => {
    history.push(`/pokemon-detalhes/${pokemonName}`);
  };

  export const goBack = (history) => {
    history.goBack();
  };