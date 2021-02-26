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
    ]);

    const addToCart = (newItem) => {
        setShoppingCartItems([newItem, ...shoppingCartItems]);
    }

    const values = {
        shoppingCartItems,
        addToCart,
    }

    return (
        <ShoppingCartContext.Provider value={values}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;