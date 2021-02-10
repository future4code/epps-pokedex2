import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { goToPokemonDetailPage} from '../Router/coordinator';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0px 10px 50px 0px',
  },
});

const PokemonCard = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Pokemon"
          height="140"
          image="https://super.abril.com.br/wp-content/uploads/2019/12/reproducao_pokemon_episodio_pokemon_centenas_criancas_hospital.jpg?quality=70&strip=info&resize=680,453"
          title="Contemplative Pokemon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pikachu
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            urna libero, eleifend vitae quam ac, posuere interdum urna. Ut
            tortor quam, cursus consequat erat sed, pretium mollis lacus.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Adicionar a Pokedex
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => goToPokemonDetailPage(history)}
        >
          Detalhes deste Pokemon
        </Button>
      </CardActions>
    </Card>
  );
};

export default PokemonCard