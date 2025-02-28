import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);


  console.log(plants)
  const userPlants = user?.plants;
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/me")
      .then((response) => {
        if (response.ok) {
          response.json().then((userData) => {
            setUser(userData);
            setLoading(false);
          });
        } else {
          setUser(null);
          setLoading(false);
          navigate("/");  // Redirect to login if not authenticated
        }
      });
  }, [setUser, navigate]);

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

  function handleLogout() {
    setUser(null)
  }

  if (!user) {
    return (
      <div className="App">
        <div className="top-page" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={require('./FullLogo_Transparent_NoBuffer.png')}
            style={{ position: "relative", top: "20px" }}
            alt="logo"
          />
        </div>
        <Routes>
          <Route path="/" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          {/* Redirect everything else to login */}
          <Route path="*" element={<Login onLogin={setUser} />} />
        </Routes>
      </div>
    );
  }
  
  return (
    <div className="App">
      <div className="top-page" style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={require('./FullLogo_Transparent_NoBuffer.png')}
          style={{ position: "relative", top: "20px" }}
          alt="logo"
        />
      </div>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={
          <Browse
            plants={filteredPlants}
            sortBy={sortBy}
            onChangeSort={setSortBy}
            searchPlant={searchPlants}             
          onChangeSearch={setSearchPlants} 
          />
        } />
      <Route path="/manage" element={<Manage onDeletePlant={handleDeletePlant}/>} />
        <Route path="/care" element={<Care />} />
        <Route path="/account" element={<Account onLogout={handleLogout}/>} />
        <Route path="*" element={<Home />} /> 
      </Routes>
    </div>
  );
}


export default App;