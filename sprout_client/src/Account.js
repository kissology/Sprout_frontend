import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext';

function Account() {
const {user, setUser} = useContext(UserContext);

console.log(user)
const accountCard = {
    first_name: user.first_name,
    last_name: user.last_name,
    address: user.street_address,
    zipcode: user.zipcode,
    email: user.email,
    phone: user.phone_number,
}

    return (
        <div className="user-info">
            User info!
            <ul>{accountCard}</ul>
        </div>
    )
}

export default Account;