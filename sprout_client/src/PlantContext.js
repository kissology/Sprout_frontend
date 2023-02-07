import React, { useState, useContext } from 'react';

const PlantContext = React.createContext()


function PlantContextProvider (){
const [plantData, setPlantData] = useState([]);

useInsertionEffect(() => {
    fetch('http://www.localhost:3000/plants')
    .then(response => response.json())
    .then(plantData => setPlantData(plantData))
}, []);


    return (
        <PlantContext.Provider value={{plantData, setPlantData}}>
            {children}
        </PlantContext.Provider>
    )
}

export default {PlantContextProvider, PlantContext}