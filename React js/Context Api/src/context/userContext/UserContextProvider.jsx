import { useState } from "react"
import userContext from "./userContext"

const UserContextProvider = ({ children }) => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <userContext.Provider value={{username, setUsername, password, setPassword}}>
            {children}
        </userContext.Provider>
    )
};


export default UserContextProvider