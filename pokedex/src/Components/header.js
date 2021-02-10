import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { goToHomePage, goToPokedex, goToPokemonDetailPage} from '../Router/coordinator';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Lista de Pokemons" onClick={() => goToHomePage(history)} />
        <Tab label="Detalhes do Pokemon escolhido" onClick={() => goToPokemonDetailPage(history)}/>
        <Tab label="Pokedex" onClick={() => goToPokedex(history)} />
      </Tabs>
    </Paper>
  );
};

export default Header;