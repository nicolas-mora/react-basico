import React, { Fragment, useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [logged, setLogged] = useState(false);

    const Welcome = () => {
        return (
            <Fragment>
                <h1>Bienvenido, {user} </h1>
                <Button variant="contained" color="secondary" onClick={() => setLogged(false)}>
                    Cerrar sesion
                </Button>
            </Fragment>
        )
    }

    const Login = () => {
        return (
            <h1>No ha iniciado sesion</h1>
        )
    }

    const validar = () => {
        console.log(user, password)
        if (!user || !password) console.log('No se han ingresado las credenciales')
        else setLogged(true)
    }
    return (
        <Fragment>
            <form noValidate autoComplete="off">
                <TextField onChange={(e) => setUser(e.target.value)} id="standard-basic" label="User" />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="secondary" onClick={() => validar()}>
                    Iniciar Sesion
                </Button>
                {logged ? <Welcome /> : <Login />}
            </form>
        </Fragment>
    );
}

export default Login;