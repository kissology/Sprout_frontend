import React, {useState, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from './Context/UserContext';
import { GardenContext } from './Context/GardenContext';



function UserPlantCard({id, name, scientificName, size, environment, kid_friendly, pet_friendly, image, onDeletePlant, lightLevel, lightPosition, plant}){
    const [show, setShow] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const {gardens, setGardens} = useContext(GardenContext);
    const [newPlantName, setNewPlantName] = useState("")
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  // const {id, name, scientificName, size, environment, kid_friendly, pet_friendly, image} = plant

function handleEnvironment(environment){
    if (environment === "arid"){
        return "This plant thrives best in your living or bedroom"
    } else {
        return "This plant best thrives your bathroom or kitchen"
}
}

function handleNameChange(e){
  setNewPlantName(e.target.value)
}
// function handleNameUpdate(){
//   fetch(`http://localhost:3000/update_plant_name/${user.id}/${plant.id}`, {
//   method: "PATCH",
//   body: JSON.stringify({plant_name: newPlantName}),
//   headers: {
//     'Content-Type': 'application/json'
//   }
//   })
//   .then(res => res.json())
//   .then(data => {
//     setUser({...user, plants: data.plant.name})
//   })
// }

function handleDeleteClick() {
    fetch(`http://localhost:3000/delete_gardens/${plant.id}/${user.id}`,
    {method: 'DELETE'})
    onDeletePlant(id)
}



function friendly(kid_friendly, pet_friendly) {
  if (kid_friendly === "true" && pet_friendly === "true"){
    return "💚 🐾"
  } if (kid_friendly === "true") {
    return "💚"
  } if (pet_friendly === "true") {
    return "🐾"
  } else {
    return "Keep out of reach of children and pets"
  }
  }

    return(
        <li className="user-card">
            <Modal className="manage-modal" show={show} onHide={handleClose} size='sm'>
            <br></br>
            {/* <input value={newPlantName} onChange={handleNameChange} type="text" placeholder="Rename" style={{"text-align":"center", "font-size": "25px", "font-weight": "bold"}}></input> */}
            <h3>{scientificName}</h3>
            <h3>{name} loves {lightLevel}, {lightPosition} light.</h3>
            <h3>{handleEnvironment(environment)}</h3>
            <h3>{friendly(kid_friendly, pet_friendly)}</h3>
            <button className="delete-plant-button" onClick={handleDeleteClick}>Remove</button>
            {/* <button onClick={handleNameUpdate} className="edit-plant-button">Edit</button> */}
            <button className="close-user-modal-button"onClick={handleClose}>Close</button>
            </Modal>
            <img onClick={handleShow} src={image} alt={name} className="user-plant-img"/>
        </li>
    )
}

export default UserPlantCard;