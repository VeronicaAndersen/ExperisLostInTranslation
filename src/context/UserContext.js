import { createContext, useContext, useState } from "react";

//Context, exposes
const UserContext = createContext()

//Here it exposes it
export const useUser = () => {
    return useContext(UserContext) //{user, setUser}
}


//Provider
const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const state = {
        user,
        setUser
    }

    return (
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;