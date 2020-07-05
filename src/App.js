import React from "react";
import Home from "./Home.js";
import Nav from "./Navbar.js";
import Cow from "./cow.js";
import Fractures from "./fractures.js";
import Quiz from './Quiz/rootComponent.js'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/">
            <Quiz />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
