import React, {useContext} from 'react';
import { UserContext } from "./Context/UserContext";
import UserPlantCard from './UserPlantCard';

function Manage() {

const { user } = useContext(UserContext);
const userPlants = user.plants
const renderPlants = userPlants.map(plant => {
    console.log(plant)
    return <UserPlantCard 
    key = {plant.id}
    id={plant.id}
    name={plant.name}
    scientificName={plant.scientific_name}
    lightLevel={plant.light_level}
    lightPosition={plant.light_position}
    size={plant.size}
    environment={plant.environment}
    kid_friendly= {String(plant.kid_friendly)}
    pet_friendly= {String(plant.pet_friendly)}
    image={plant.image}


    />
})

    return (
        <ul className='user-plant-ul'>
            {renderPlants}
        </ul>
    )
}

export default Manage;