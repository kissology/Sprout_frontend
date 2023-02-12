import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function PlantCard({name, scientific_name, kid_friendly, pet_friendly, image}){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


function handleAddClick(e){
  e.preventDefault();
  console.log('clicked')
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