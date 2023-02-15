import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Browse from './Browse';
import Manage from './Manage';
import Care from  './Care';
import Account from './Account';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Signup from "./Signup";
import { UserContext } from './Context/UserContext';
import { GardenContext } from "./Context/GardenContext";

function App() {
const [plants, setPlants] = useState([]);
const [searchPlants, setSearchPlants] = useState("");

const { user, setUser } = useContext(UserContext);
const {gardens, setGardens} = useContext(GardenContext);

const userPlants = user.plants.map(plants => {
      return plants.id
})



useEffect(() => {
            fetch("http://www.localhost:3000/plants")
            .then((response) => response.json())
            .then((plants) => setPlants(plants));
      },[]);

const plantsToDisplay = plants.filter((plant => 
      plant.name.toLowerCase().includes(searchPlants.toLowerCase()) 
));


function handleDeletePlant(id){
const deletePlant = userPlants.filter((userPlant) => userPlant.id !== id)
setGardens(deletePlant)
}



      function handleLogin(userLogin) {
            setUser(userLogin)
      }

      function handleLogout() {
            setUser(null)
      }
      
  return (

    <div className="App">
      <div className="top-page">
      <h1 >Sprout 🌱</h1>
      <br></br>

      <h3>Welcome, {user.first_name}</h3>
      </div>
      <Header/>
      <Switch>
            <Route exact path="/home">
                  <Home/>
            </Route>
            <Route exact path="/">
             <Login
            onLogin = {handleLogin}
            />
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
                  <Manage
                  onDeletePlant={handleDeletePlant}
                  />
            </Route>
            <Route exact path="/account">
                  <Account
                   onLogout = {handleLogout}
                  />
            </Route>
            <Route exact path="/signup">
                  <Signup
                  />
            </Route>
      </Switch>
    </div>
  );
}

export default App;