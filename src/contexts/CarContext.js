import {
    createContext
} from "react";
export const CarContext = createContext()

const CarContextProvider = (props) => {
    
    return (
        <CarContext.Provider>
            {props.children}

        </CarContext.Provider>
    );
}

export default CarContextProvider;