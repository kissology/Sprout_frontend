import React from 'react';
import PlantCard from './PlantCard';

function Browse({plants}) {
const plantCards = plants.map((plant) => {

    return <PlantCard
    key = {plant.id}
    name = {plant.name}
    scientific_name = {plant.scientific_name}
    light_level = {plant.light_level}
    light_position = {plant.light_position}
    size = {plant.size}
    environment = {plant.environment}
    kid_friendly = {String(plant.kid_friendly)}
    pet_friendly = {String(plant.pet_friendly)}
    image = {plant.image}
    />

})




    return (
      <ul className="plant-ul">
        {plantCards}
    </ul>
    )
}

export default Browse;