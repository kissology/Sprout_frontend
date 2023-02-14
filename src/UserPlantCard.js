import React, {useState, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from './Context/UserContext';
import { GardenContext } from './Context/GardenContext';
import petIcon from './icons/icons8-pets-50.png';
import kidIcon from './icons/icons8-baby-face-50.png';


function UserPlantCard({name, scientificName, lightLevel, lightPosition, size, environment, kid_friendly, pet_friendly, image, onDeletePlant}){
    const [show, setShow] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const {gardens, setGardens} = useContext(GardenContext);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

function handleEnvironment(environment){
    if (environment === "arid"){
        return "This plant thrives best in your living or bedroom"
    } else {
        return "This plant best thrives your bathroom or kitchen"
}
}

// function handleDeleteClick(id) {
//     fetch(`http://localhost:3000/gardens${id}`,
//     {method: 'DELETE'}
//     )
//     onDeletePlant(id)
// }

function friendly(kid_friendly, pet_friendly) {
    if (kid_friendly === "true" && pet_friendly === "true"){
      return `${kidIcon} ${petIcon}`
    } if (kid_friendly === "true") {
      return `${kidIcon}`
    } if (pet_friendly === "true") {
      return `${petIcon}`
    } else {
      return "Keep out of reach of children and pets"
    }
    }


    return(
        <li className="user-card">
            <Modal className="manage-modal" show={show} onHide={handleClose} size='sm'>
            <h3>({scientificName})</h3>
            <h3>{name} loves {lightLevel}, {lightPosition} light.</h3>
            <h3>{handleEnvironment(environment)}</h3>
            <h3>{friendly(kid_friendly, pet_friendly)}</h3>
            <button className="edit-plant-button">Edit</button>
            <button className="delete-plant-button"
            // onClick={handleDeleteClick}
            >Delete</button>
            <button className="close-user-modal"onClick={handleClose}>Close</button>
            </Modal>
            <img onClick={handleShow} src={image} alt={name} className="user-plant-img"/>
        
        </li>
    )
}

export default UserPlantCard;