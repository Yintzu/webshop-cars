import { createContext, useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {

    const [shoppingCartItems, setShoppingCartItems] = useState([
        {
            name: "test",
            year: 12
        },
        {
            name: "test two",
            year: 24
        }
    ])


    const values = {
        shoppingCartItems
    }

    return (
        <ShoppingCartContext.Provider value={values}>{props.children}</ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;