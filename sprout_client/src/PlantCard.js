import React from 'react';

function PlantCard({name, scientific_name, kid_friendly, pet_friendly, image}){









    return (
      <li  className= "plant-card">
        {/* <h3>{name}</h3>
        <h4>{scientific_name}</h4>
        <h4>{kid_friendly}</h4>
        <h4>{pet_friendly}</h4> */}
        <img className="plant-img" src={image} alt={name}></img>

      </li>
    )
}

export default PlantCard;   