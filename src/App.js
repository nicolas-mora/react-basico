import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import HookState from "./components/hookState/HookState";
import ButtonGroupMaterial from './components/buttonGroupMaterial/ButtonGroupMaterial';
import TimelineMaterial from "./components/timelineMaterial/TimelineMaterial";
import Conditional from "./components/conditional/Conditional";
import Login from './components/login/Login'
import ButtonCustom from './shared/components/nuttonCustom/ButtonCustom';
import Effect from './components/effect/Effect';

export default function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/state">State</Nav.Link>
          <Nav.Link href="/button-group">ButtonGroup Material</Nav.Link>
          <Nav.Link href="/timeline">TimeLine Material</Nav.Link>
          <Nav.Link href="/conditional">Conditional</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/customelements">Custom Elements</Nav.Link>
          <Nav.Link href="/effect">Effect</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/state">
            <HookState incomingText={"Text"} />
          </Route>
          <Route path="/button-group">
            <ButtonGroupMaterial />
          </Route>
          <Route path="/timeline">
            <TimelineMaterial/>
          </Route>
          <Route path="/conditional">
            <Conditional isLogged={true}/>
            <Conditional isLogged={false}/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/customelements">
            <ButtonCustom text='Hay un error' className='Error'/>
            <ButtonCustom text='Exito' className='Success'/>
            <ButtonCustom text='Cuidao' className='Info'/>
            <ButtonCustom text='Cuidao'/>
            <ButtonCustom />
          </Route>
          <Route path="/effect">
            <Effect name='pikachu'/>
            <Effect name= 'ditto'/>
            <Effect name= 'flareon'/>
            <Effect name= 'totodile'/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
