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


    return (
      <li  className= "plant-card">
        <Modal show={show} onHide={handleClose}>
        <h3>{name}</h3>
          <h4>{scientific_name}</h4>
          <h4>Pet Friendly? {pet_friendly}</h4>
          <h4>Kid Friendly? {kid_friendly}</h4>
        <button onClick={handleAddClick}>Add</button>
        <button variant="primary" onClick={handleClose}> Close </button>
        </Modal>
        <img onClick={handleShow} className="plant-img" src={image} alt={name}></img>
      </li>
    )
}

export default PlantCard;   