import React, {useState, useContext} from 'react';
import { GardenContext } from './Context/GardenContext';
import { UserContext } from './Context/UserContext';
import Modal from 'react-bootstrap/Modal';

function PlantCard({name, id, scientific_name, kid_friendly, pet_friendly, image}){
  const { gardens } = useContext(GardenContext)
  const { user } = useContext(UserContext)
  const [show, setShow] = useState(false);
  const [newGarden, setNewGarden] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let today = new Date()
  let date = today.getFullYear() + '-' + ("0" +(today.getMonth() + 1)) + '-' + today.getDate();

  const addGarden = {
    user_id: user.id,
    plant_id: id,
    previous_water_date: date,
    previous_soil_date: date,
    previous_rotate_date: date,
    }

function handleAddClick(e){
  e.preventDefault();
  let postRequest = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(addGarden),
  }
  fetch("http://www.localhost:3000/gardens", postRequest)
  .then(res => res.json())
  .then(garden => setNewGarden(...garden,[addGarden])
    )
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

    return (
      <li  className= "plant-card">
        <Modal className="plant-modal" show={show} onHide={handleClose}>
          <img src={image} alt={name}></img>
        <h3 className="browse-plant-name">{name}</h3>
          <h4>{scientific_name}</h4>
          <h4 className="friendly">{friendly(kid_friendly, pet_friendly)}</h4>
        <button className="add-modal-button" onClick={handleAddClick}>Add</button>
        <button className="close-modal-button" variant="primary" onClick={handleClose}> Close </button>
        </Modal>
        <img onClick={handleShow} className="plant-img" src={image} alt={name}></img>
      </li>
    )
    }
export default PlantCard;   