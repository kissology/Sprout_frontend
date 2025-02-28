import React, {useContext} from 'react';
import { UserContext } from "./Context/UserContext";
import UserPlantCard from './UserPlantCard';
import { Link } from 'react-router-dom'; 

function Manage({onDeletePlant}) {

const { user } = useContext(UserContext);
const userPlants = user.plants
const renderPlants = userPlants.map(plant => {
    return <UserPlantCard 
    key = {plant.id}
    plant = {plant}
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
    onDeletePlant={onDeletePlant} 


    />
})

return (
    <div className="browse-div">
        {userPlants.length === 0 ? (
            <p style={{ fontSize: '18px', textAlign: 'center', marginTop: '20px' }}>
                You have no plants in your garden!{' '}
                <Link to="/browse" style={{ color: '#b18597', textDecoration: 'underline' }}>
                    Click here to browse
                </Link>
            </p>
        ) : (
            <ul className='user-plant-ul'>
                {renderPlants}
            </ul>
        )}
    </div>
);
}

export default Manage;