import React from "react";
import Home from "./Home.js";
import Nav from "./Navbar.js";
import Cow from "./cow.js";
import Fractures from "./fractures.js";
import Quiz from './Quiz/rootComponent.js'
import End from './end.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Cow />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/finished">
            <End />
          </Route>
          <Route path="/fractures">
            <Fractures />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
