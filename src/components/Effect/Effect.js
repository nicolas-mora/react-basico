import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        display: 'flex',
        justifyContent: 'center',
        margin: '10px',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Effect = ( props ) => {

    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const [pokemon, setPokemon] = useState(null);

    const classes = useStyles();

    useEffect(() => {
        fetch(baseUrl + props.name)
            .then(response => response.json())
            .then(data => setPokemon(data))
    },[props.name]);

    const Pokemon = () => {
        return (
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Pokemon type {pokemon.types[0].type.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {pokemon.name.toUpperCase()}
                    </Typography>
                    <img src={pokemon.sprites.front_default} alt='Pokemon'></img>
                </CardContent>
            </Card>)
    }

    const NoPokemon = () => {
        return (<h1>Loading...</h1>)
    }

    return (
        <div>
            {pokemon ? <Pokemon /> : <NoPokemon />}
        </div>
    );
}

export default Effect