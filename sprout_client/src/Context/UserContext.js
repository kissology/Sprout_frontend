import React, {createContext, useState, useEffect} from 'react';

const UserContext = createContext();

function UserProvider({children}) {

const [users, setUsers] = useState([])

useEffect(() => {
    fetch("http://www.localhost:3000/users")
    .then((response) => response.json())
    .then((user) => setUsers(user))
},[]);

return (
    <UserContext.Provider value = {{users, setUsers}}>
        {children}
    </UserContext.Provider>
)
}

export { UserProvider, UserContext };
