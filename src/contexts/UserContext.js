import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [boughtCars, setBoughtCars] = useState([]);

    useEffect(() => {
        console.log("Bought cars:");
        console.log(boughtCars)
    }, [boughtCars])

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