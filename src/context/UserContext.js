import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/StorageKeys";
import { storageRead } from "../Utils/Storage";

//Context, exposes
const UserContext = createContext()

//Here it exposes it
export const useUser = () => {
    return useContext(UserContext) //{user, setUser}
}


//Provider
const UserProvider = ({children}) => {
    
    const [user, setUser] = useState( storageRead( STORAGE_KEY_USER ));

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