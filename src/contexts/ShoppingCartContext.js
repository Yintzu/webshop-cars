import { createContext, useState, useEffect, useContext } from "react";
import { CarContext } from "./CarContext";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
    const { discountedCars } = useContext(CarContext);

    const [shoppingCartItems, setShoppingCartItems] = useState(
        () => {
            const localData = localStorage.getItem('shoppingCartItems');
            return localData ? JSON.parse(localData) : []
        }
    );
    const [cartTotal, setCartTotal] = useState(0);

    // Adds the price of all items in cart together on change in cart-array
    useEffect(() => {
        setCartTotal(shoppingCartItems.reduce((sum, curr) => sum + curr.price, 0));
    }, [shoppingCartItems]);

    // Will connect to buy-buttons later
    // Set the cart array by creating a new array, adding the new item at the front of the array, then spreading out the old array after.
    const addToCart = (newItem) => {
        let isDiscounted = discountedCars.find(discountedCar => discountedCar.vin === newItem.vin);
        if (isDiscounted) {
            newItem.price = isDiscounted.discountedprice();
        }

        if (!shoppingCartItems.includes(newItem)) {
            setShoppingCartItems([newItem, ...shoppingCartItems]);
        } else {
            alert('this item is already in your cart')
        }
    }

    // Will connect to "remove"-buttons
    // Removes the clicked item using filter
    // Might want to use the vin-number attached to each car to compare later
    const removeFromCart = (itemToRemove) => {
        setShoppingCartItems(shoppingCartItems.filter(item => item.vin !== itemToRemove.vin));
    }

    const removeAllFromCart = () => {
        setShoppingCartItems([]);
    }

    // This function can be used to get date, time and day
    // For receipt only date is needed I think, the rest is "just in case"
    // Choose the one you need with createTimeStamp()[index], or save all in a variable
    const createTimeStamp = () => {
        const timestamp = new Date();
        const date = timestamp.toLocaleDateString('sv-SE');
        const time = timestamp.toLocaleTimeString('sv-SE', { hour: '2-digit', minute: '2-digit' });
        const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const day = dayArray[timestamp.getDay()];

        return [date, time, day];
    }

    // Formats numbers into "100 000 kr"
    const formatSum = (sum) => `$${new Intl.NumberFormat('de-DK', { currency: 'EUR', style: 'decimal', minimumFractionDigits: 0 }).format(Math.round(sum / 10))}`;

    const values = {
        shoppingCartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        createTimeStamp,
        formatSum,
        cartTotal,
    }



    useEffect(() => {
        localStorage.setItem('shoppingCartItems', JSON.stringify(shoppingCartItems))
    }, [shoppingCartItems]);

    return (
        <ShoppingCartContext.Provider value={values}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;