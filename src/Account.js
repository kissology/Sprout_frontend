import React, { useState, useContext} from 'react';
import { UserContext } from './Context/UserContext';
import { GardenContext } from './Context/GardenContext';
import Modal from 'react-bootstrap/Modal';

function Account({onLogout}) {
const { user, setUser } = useContext(UserContext)
const { gardens, setGardens } = useContext(GardenContext)
const [show, setShow] = useState(false);
const [newEmail, setNewEmail] = useState("");
const [newAddress, setNewAddress] = useState("");


 function handleClose(e) {
    e.preventDefault();
    setShow(false);
 }

 const handleShow = () => setShow(true);

 function handleEmailChange(e) {
    setNewEmail(e.target.value);
 }

 function handleAddressChange(e) {
    setNewAddress(e.target.value);
 }

 function handleEmailUpdate(){
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({ email: newEmail }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        setUser({...user, email: data.email})
    })
 }

 function handleAddressUpdate(){
    fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PATCH',
        body: JSON.stringify({street_address: newAddress}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        setUser({...user, street_address: data.street_address});
    })
 }
 

 function handleLogout(){
    fetch("http://localhost:3000/logout", {
        method: "DELETE",
    })
    .then(() => onLogout())
}

function handleReminderClick() {
    fetch(`http://localhost:3000/reminder/${gardens.id}`, {
        method: 'POST',
    })
}


    return (
        <div className="account">
            <div className="account-text">
         <h3>{user.first_name} {user.last_name}</h3>
         <h3>{user.email}</h3>
         <h3>{user.street_address}</h3>
         <button onClick={handleReminderClick}>Reminder</button>
         <button className="edit-account-info-button" onClick={handleShow}>Edit Account Info</button>
         </div>
         <Modal className="edit-account-modal" show={show} onHide={handleClose} size="sm">
            {/* <input type="text" placeholder="First Name"/>
            <br></br>
            <input type="text" placeholder="Last Name"/>
            <br></br> */}
            <input value={newEmail} onChange={handleEmailChange} type="text" placeholder="Email"/>
            <button onClick={handleEmailUpdate}>Update</button>
            <br></br>
            <input value={newAddress} onChange={handleAddressChange} type="text" placeholder="Address"/>
            <button onClick={handleAddressUpdate}>Update</button>
            <br></br>
            <button className="close-modal-button" variant="primary" onClick={handleClose}> Close </button>
        </Modal>
        <br></br>
        <div className="logout">
        <button onClick = {handleLogout} type="logout" className="logout-button">Logout</button>
        </div>
      </div>
    )
}

export default Account;