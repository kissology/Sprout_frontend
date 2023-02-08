import React, {useContext} from 'react';
import { UserContext } from "./Context/UserContext";
import UserPlantCard from './UserPlantCard';

function Manage() {

const { users } = useContext(UserContext);

const userPlant = users.map((user => {
    console.log(user.plants)

    return <UserPlantCard
    key = {user.plants.id}
    name = {user.plants.name}
    scientificName = {user.plants.scientific_name}
    user_plant_image = {user.plants.image}
    />
}))


    return (
        <div className="manage">
            <ul className='user-plant'>
            {userPlant}
            </ul>
        </div>
    )
}

export default Manage;