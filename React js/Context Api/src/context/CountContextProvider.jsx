import { useState } from "react";
import countContext from "./counterContext";


const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <countContext.Provider value={{count, setCount}}>
            {children}
        </countContext.Provider>
    );
}


export default CountContextProvider;