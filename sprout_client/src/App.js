import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from './Navbar';
import Browse from './Browse';
import Manage from './Manage';
import Care from  './Care';
import Account from './Account';
import Home from './Home';
import { PlantContext } from "./PlantContext";

function App(props) {

      const plantContext = useContext(PlantContext)

  return (

    <div className="App">
      <h1>Sprout 🌱</h1>
      <NavBar/>
      <Switch>
      <Route exact path="/">
            <Home/>
      </Route>
      <Route exact path="/browse">
            <Browse/>
      </Route>
      <Route exact path="/care">
            <Care />
      </Route>
      <Route exact path="/manage">
            <Manage/>
      </Route>
      <Route exact path="/account">
            <Account/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;