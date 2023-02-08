import React, { createContext, useState, useEffect } from 'react';

const GardenContext = createContext();

function GardenProvider({children}){

const [gardens, setGardens] = useState([])

useEffect(() => {
    fetch(`http://www.localhost:3000/gardens`)
    .then((response) => response.json())
    .then((gardens) => setGardens(gardens))
}, []);

    return (
        <GardenContext.Provider value = {{gardens, setGardens}}>
            {children}
        </GardenContext.Provider>
    )
}

export { GardenProvider, GardenContext }; 