import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function UserPlantCard({name, scientificName, lightLevel, lightPosition, size, environment, kid_friendly, pet_friendly, image}){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

function handleEnvironment(environment){
    if (environment === "arid"){
        return "This plant thrives best in your living or bedroom"
    } else {
        return "This plant best thrives your bathroom or kitchen"
}
}


    return(
        <li className="user-card">
            <Modal show={show} onHide={handleClose}>
            <h3>{scientificName}</h3>
            <h3>{name} loves {lightLevel}, {lightPosition} light.</h3>
            <h3>{handleEnvironment(environment)}</h3>
            </Modal>
            <img onClick={handleShow} src={image} alt={name} className="user-plant-img"/>
            <h3>{name}</h3>
        </li>
    )
}

export default UserPlantCard;