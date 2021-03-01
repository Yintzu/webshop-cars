import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const[boughtCars, setBoughtCars] = useState([]);

    const values = {
        boughtCars,
        setBoughtCars,
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>);
}

export default UserContextProvider;