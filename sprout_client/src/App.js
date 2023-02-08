import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Navbar';
import Browse from './Browse';
import Manage from './Manage';
import Care from  './Care';
import Account from './Account';
import Home from './Home';




function App() {
const [plants, setPlants] = useState([]);
const [searchPlants, setSearchPlants] = useState("");

      useEffect(() => {
            fetch("http://www.localhost:3000/plants")
            .then((response) => response.json())
            .then((plants) => setPlants(plants));
      },[]);

const plantsToDisplay = plants.filter((plant =>
      plant.name.toLowerCase().includes(searchPlants.toLowerCase())
));

  return (

    <div className="App">
      <h1>Sprout 🌱</h1>
            <NavBar/>
      <Switch>
            <Route exact path="/">
                  <Home/>
            </Route>
            <Route exact path="/browse">
                  <Browse 
                  plants={plantsToDisplay}
                  searchPlant={searchPlants}
                  onChangeSearch={setSearchPlants}
                  />
            </Route>
            <Route exact path="/care">
                  <Care/>
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