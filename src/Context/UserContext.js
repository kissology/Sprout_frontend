import React, {createContext, useState, useEffect} from 'react';

const UserContext = createContext();

function UserProvider({children}) {

const [user, setUser] = useState([])


return (
    <UserContext.Provider value = {{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}

export { UserProvider, UserContext };
