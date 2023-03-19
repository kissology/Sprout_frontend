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

function App() {
  const { user, setUser } = useContext(UserContext);
  const [plants, setPlants] = useState([]);
  const [searchPlants, setSearchPlants] = useState("");
  const [sortBy, setSortBy] = useState("All");
  const [filterBy, setFilterBy] = useState("Size");

  const userPlants = user.plants;

  useEffect(() => {
    fetch("http://www.localhost:3000/plants")
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  },[]);

  const sortedPlants = () => {
    switch (sortBy) {
      case "All":
        return plants; // Return the original unsorted array of plants
      case "Size":
        return [...plants].sort((plant1, plant2) => {
          const sizeOrderMap = { "small": 1, "medium": 2, "large": 3 };
          const sizeOrder = sizeOrderMap[plant1.size] - sizeOrderMap[plant2.size];
          return sizeOrder || 0; // Return 0 to keep the original order of the plants array
        });
      case "Pet Friendly":
        return [...plants].sort((plant1, plant2) => {
          const petOrder = plant2.pet_friendly - plant1.pet_friendly;
          return petOrder || 0; // Return 0 to keep the original order of the plants array
        });
      case "Kid Friendly":
        return [...plants].sort((plant1, plant2) => {
          const kidOrder = plant2.kid_friendly - plant1.kid_friendly;
          return kidOrder || 0; // Return 0 to keep the original order of the plants array
        });
      case "Kid and Pet Friendly":
        return [...plants].sort((plant1, plant2) => {
          const kidAndPetOrder = plant1.pet_friendly + plant2.pet_friendly + plant1.kid_friendly + plant2.kid_friendly;
          return kidAndPetOrder || 0; // Return 0 to keep the original order of the plants array
        });
      default:
        return plants; // Return the original unsorted array of plants for unknown sortBy values
    }
  };

  const filteredPlants = sortedPlants().filter(
    (plant) => plant.name.toLowerCase().includes(searchPlants.toLowerCase())
  );

  function handleDeletePlant(id) {
    const userPlantsArray = userPlants.filter((userPlant) => userPlant.id !== id)
    setUser({...user, plants: userPlantsArray})
  }

  function handleLogin(userLogin) {
    setUser(userLogin)
  }

  function handleLogout() {
    setUser(null)
  }
  return (

    <div className="App">
      <div className="top-page" style={{"display": "flex", "flex-direction": "center", "justify-content":"center"}}>
      <img src={require('./FullLogo_Transparent_NoBuffer.png')} style={{"position": "relative", "top":"20px"}} alt="logo"></img>
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
                  plants={filteredPlants}
                  sortBy={sortBy}
                  onChangeSort={setSortBy}
                  filterBy={filterBy}
                  onChangeFilter={setFilterBy}

                  />
            </Route>
            <Route exact path="/manage">
                  <Manage
                  onDeletePlant={handleDeletePlant}
                  />
            </Route>
            <Route exact path="/care">
                  <Care
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