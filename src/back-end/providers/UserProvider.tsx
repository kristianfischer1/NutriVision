import React, { createContext, useContext } from "react";

const UserContext = createContext({});

export function useUser() {
    return useContext(UserContext);
}

export const UserContextProvider = ({user, children} : {user:any, children:any}) => {
    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

