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

    const removeFromCart = (itemToRemove) => {
        // If it does not work like this later
        // Check if vin-number matches later, when we have the correct car-objects in the array.
        setShoppingCartItems(shoppingCartItems.filter(item => item !== itemToRemove));
    }

    const values = {
        shoppingCartItems,
        addToCart,
        removeFromCart,
    }

    return (
        <ShoppingCartContext.Provider value={values}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;