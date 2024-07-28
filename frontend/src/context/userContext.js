import React, { useState, createContext } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState({});
    const [score,setScore]=useState(0);
    return (
        <UserContext.Provider
            value={{
                user,setUser,score,setScore
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
