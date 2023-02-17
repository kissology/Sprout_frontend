import React, { useState, useContext} from 'react';
import { UserContext } from './Context/UserContext';
import Modal from 'react-bootstrap/Modal';

function Account({onLogout}) {
const { user, setUser } = useContext(UserContext)
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

function handleReminderClick(){
    alert("Message sent! Check your mobile device")
}

    return (
        <div className="account">
            <div className="account-text">
         <h3>First: {user.first_name} {user.last_name}</h3>
         <h3>Email: {user.email}</h3>
         <h3>Address: {user.street_address}</h3>
         <h3>Zipcode: {user.zipcode}</h3>
         <div className="account-buttons">
         <button onClick={handleReminderClick} className="reminder-button">Reminder</button>
         <button className="edit-account-info-button" onClick={handleShow}>Edit Account Info</button>
         </div>
         </div>
         <Modal className="edit-account-modal" show={show} onHide={handleClose} size="sm">
            <input value={newEmail} onChange={handleEmailChange} type="text" placeholder="Email" style={{"text-align":"center", "font-size":"25px"}}/>
            <button className="update-email-button" onClick={handleEmailUpdate}>Update</button>
            <br></br>
            <input value={newAddress} onChange={handleAddressChange} type="text" placeholder="Address" style={{"text-align":"center", "font-size":"25px"}}/>
            <button className="update-address-button" onClick={handleAddressUpdate}>Update</button>
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