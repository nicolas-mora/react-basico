import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import HookState from "./components/HookState/HookState";
import AnotherComponent from './components/AnotherComponent/AnotherComponent';
import AnotherComponentCopy from "./components/AnotherComponentCopy/AnotherComponentCopy";
import Conditional from "./components/Conditional/Conditional";

export default function App() {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/state">Home</Nav.Link>
          <Nav.Link href="/another">Another</Nav.Link>
          <Nav.Link href="/anotherCopy">Pricing</Nav.Link>
          <Nav.Link href="/conditional">Conditional</Nav.Link>
        </Nav>
      </Navbar>
      <Router>
        <Switch>
          <Route path="/another">
            <AnotherComponent />
          </Route>
          <Route path="/anotherCopy">
            <AnotherComponentCopy></AnotherComponentCopy>
          </Route>
          <Route path="/state">
            <HookState incomingText={"Text"} />
          </Route>
          <Route path="/conditional">
            <Conditional isLogged={true}/>
            <Conditional isLogged={false}/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}
