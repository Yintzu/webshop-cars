import {
    createContext,
    useState
} from "react";
export const CarContext = createContext()

const CarContextProvider = (props) => {
    const [cars, setcars]= useState([])
    console.log("hi");
    const values={}
    return (
        <CarContext.Provider value={values}>
            {props.children}

        </CarContext.Provider>
    );
}

export default CarContextProvider;