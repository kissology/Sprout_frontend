import react from 'react';

function AccountCard({first_name, last_name, address, zipcode, email, phone}){


return(
   <li>
    <h3>{first_name}</h3>
    <h3>{last_name}</h3>
    <h3>{address}</h3>
    <h3>{zipcode}</h3>
    <h3>{email}</h3>
    <h3>{phone}</h3>
   </li>
   
)}
export default AccountCard;