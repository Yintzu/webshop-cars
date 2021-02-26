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

    // Will connect to buy-buttons later
    // Set the cart array by creating a new array, adding the new item at the front of the array, then spreading out the old array after.
    const addToCart = (newItem) => {
        setShoppingCartItems([newItem, ...shoppingCartItems]);
    }

    // Will connect to "remove"-buttons
    // Removes the clicked item using filter
    // Might want to use the vin-number attached to each car to compare later
    const removeFromCart = (itemToRemove) => {
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