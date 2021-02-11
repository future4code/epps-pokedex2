import React, {  useEffect, useState } from "react";
import { goToPokemonDetailPage} from '../Router/coordinator';
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
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Pokemon"
          height="140"
          src={pokemon}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={props.addPokemon}>
          Adicionar à pokedex
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => goToPokemonDetailPage(history, pokemon.name)}
        >
          Detalhes deste Pokemon
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard