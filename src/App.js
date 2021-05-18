import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import HookState from "./components/HookState/HookState";
import AnotherComponent from './components/AnotherComponent/AnotherComponent';

export default function App() {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/state">Home</Nav.Link>
      <Nav.Link href="/another">Another</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
      <Router>
        <Switch>
          <Route path="/another">
            <AnotherComponent />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/state">
            <HookState incomingText={"Text"} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
