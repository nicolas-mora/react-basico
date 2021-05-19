import React, { Fragment } from "react";


const Conditional = (props) => {
  console.log(props.isLogged)

  const Welcome = () => {
    return (
      <h1>Bienvenido</h1>
    )
  }

  const Login = () => {
    return (
      <h1>Login</h1>
    )
  }
  return (
    <Fragment>
      {props.isLogged
        ? <Welcome />
        : <Login />
      }
    </Fragment>
  );
}

export default Conditional;