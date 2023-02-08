import React, { useState } from 'react';

function UserPlantCard({name, scientificName, user_plant_image}){





    return (
    <li className="plant-card">
            <h3>{name}</h3>
            <h4>{scientificName}</h4>
            <img src={user_plant_image} alt={name}></img>
    </li>
)
}

export default UserPlantCard;