import React from 'react';
import PlantCard from './PlantCard';

function Browse({plants, searchPlants, onChangeSearch}) {
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

function handleChange(e){
    e.preventDefault();
    onChangeSearch(e.target.value)

}


    return (
    <div className='search-bar'>
        <input
        type="text"
        id="search"
        placeholder="search plants"
        onChange={handleChange}
        value={searchPlants}
        />
      <ul className="plant-ul">
        {plantCards}
    </ul>
    </div>
    )
}

export default Browse;