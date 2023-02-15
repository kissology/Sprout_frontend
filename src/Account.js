import React, { useState, useContext} from 'react';
import { UserContext } from './Context/UserContext';
import Modal from 'react-bootstrap/Modal';

function Account({onLogout}) {
const {user} = useContext(UserContext)
const [show, setShow] = useState(false);
 console.log(user)

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 function handleLogout(){
    fetch("http://localhost:3000/logout", {
        method: "DELETE",
    })
    .then(() => onLogout())
}


    return (
        <div className="account">
            <div className="account-text">
         <h3>{user.first_name} {user.last_name}</h3>
         <h3>{user.email}</h3>
         <h3>{user.street_address}</h3>
         <h3>{user.dob}</h3>
         <button className="edit-account-info-button" onClick={handleShow}>Edit Account Info</button>
         </div>
         <Modal className="edit-account-modal" show={show} onHide={handleClose} size="sm">
         <form className="account-info-form">
            <input type="text" placeholder="First Name"/>
            <br></br>
            <input type="text" placeholder="Last Name"/>
            <br></br>
            <input type="text" placeholder="Email"/>
            <br></br>
            <input type="text" placeholder="Password"/>
            <br></br>
            <button className="close-modal-button" variant="primary" onClick={handleClose}> Close </button>
        </form>
        </Modal>
        <br></br>
        <div className="logout">
        <button onClick = {handleLogout} type="logout" className="logout-button">Logout</button>
        </div>
      </div>
    )
}

export default Account;