import React, {  useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fb6571',
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0px 10px 50px 0px',
  },
});

const PokemonCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [pokemon, setPokemon] = useState("");

  const getPokemon = () => {
    axios
      .get(props.url)
      .then((res) => {
        setPokemon(res.data.sprites.front_default);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPokemon();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  

  return (
    <ThemeProvider theme={theme}>
    <Card className={classes.root}>
      <CardActionArea>
        {!pokemon ?
          <CardMedia
          component="img"
          alt="Loading"
          height="200"
          src='https://cdn.dribbble.com/users/946764/screenshots/2844436/pokeball.gif'
        /> 
          :
          <CardMedia
          component="img"
          alt="Pokemon"
          height="200"
          src={pokemon}
        />
      }

        <CardContent>
          <Typography gutterBottom variant="h4" component="h2" color='primary'>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={props.addPokemon}>
          Adicionar à pokedex
        </Button>
        <Button
          size="small"
          align='center'
          href={`/pokemon-detalhes/${props.name}`}
        >
          Detalhes do Pokemon
        </Button>
      </CardActions>
    </Card>
    </ThemeProvider>
  );
};

export default PokemonCard