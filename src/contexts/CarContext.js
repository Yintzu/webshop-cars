import {
    createContext,
    useState
} from "react";
export const CarContext = createContext()

const CarContextProvider = (props) => {
    const [cars, setcars]= useState([])
    
    return (
        <CarContext.Provider>
            {props.children}

        </CarContext.Provider>
    );
}

export default CarContextProvider;