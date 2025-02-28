import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';   

function Signup(){
    const [newUser, setNewUser] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    const navigate = useNavigate()
    
const newUserObj = {
    first_name: firstName,
    last_name: lastName,
    dob: dob,
    street_address: address,
    zipcode: zipcode,
    email: email,
    password: password,
    phone_number: phoneNumber,
    
}
function handleSubmit(e){
e.preventDefault();

let postRequest = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(newUserObj),
}
fetch("http://localhost:3000/signup", postRequest)
.then(resp => {
    if (resp.ok) {
        return resp.json();
    } else {
        return resp.json().then(errors => {
            throw new Error(errors.errors.join(", "));
        });
    }
})
.then(newUserObj => {
    setNewUser([...newUser, newUserObj]);
    alert("Thanks for registering! Happy Gardening!");
    navigate("/");  
})
.catch(error => {
    alert(`Signup failed: ${error.message}`);
});


}

 return (
        <form onSubmit={handleSubmit} className="signup">
            <input value={firstName} type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
            <br></br>
            <input value={lastName} type="type" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
            <br></br>
            <input value={dob} type="type" placeholder="DOB" onChange={(e) => setDob(e.target.value)}/>
            <br></br>
            <input value={address} type="type" placeholder="Address" onChange={(e) => setAddress(e.target.value)}/>
            <br></br>
            <input value={zipcode} type="type" placeholder="Zipcode" onChange={(e) => setZipcode(e.target.value)}/>
            <br></br>
            <input value={email} type="type" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
            <br></br>
            <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <br></br>
            <input value={phoneNumber} type="type" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
            <br></br>
            <button className='sign-up-button'>Signup</button>
            </form>
 )
}
export default Signup;