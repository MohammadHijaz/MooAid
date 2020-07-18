import React from "react";
import Home from "./Home.js";
import Nav from "./Navbar.js";
import Cow from "./cow.js";
import Quiz from "./Quiz/rootComponent.js";
import End from "./end.js";
import Injury from "./Injury.js";
import FirstInjury from "./FirstInjury.js";
import Bites from "./Bites";
import Emergency from "./emergency";
import Activities from "./activities";
import Snake from "./snake";
import Scorpion from "./scorpion";
import Bee from "./bee";
import Spider from "./spider.js";
import NoseBleed from "./noseBleed.js";
import Fixfract from "./fractions.js";
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
          <Route path="/injury">
            <Injury />
          </Route>
          <Route path="/FirstInjury">
            <FirstInjury />
          </Route>
          <Route path="/bites">
            <Bites />
          </Route>
          <Route path="/end">
            <End />
          </Route>
          <Route path="/emergency">
            <Emergency />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/snake">
            <Snake />
          </Route>
          <Route path="/scorpion">
            <Scorpion />
          </Route>
          <Route path="/bee">
            <Bee />
          </Route>
          <Route path="/spider">
            <Spider />
          </Route>
          <Route path="/noseBleed">
            <NoseBleed />
          </Route>
          <Route path="/fractions">
            <Fixfract />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
