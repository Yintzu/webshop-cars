import { createContext, useState, useEffect } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {

    const [shoppingCartItems, setShoppingCartItems] = useState([
        {
            make: "Chevrolet",
            model: "Camaro",
            year: 1973,
            vin: "1D4PT5GK0BW487259",
            city: "Santa Rosa",
            descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
            descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            price: 554963,
            miles: 15432,
            carImg: './assets/car-pictures/Chevrolet-Camaro-1973.jpg'
          },
          {
            make: "Pontiac",
            model: "Montana SV6",
            year: 2006,
            vin: "JN1CV6FE7DM360307",
            city: "Jāsim",
            descShort: "purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam",
            descLong: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
            price: 299379,
            miles: 12346,
            carImg: './assets/car-pictures/Pontiac-Montana SV6-2006.jpg'
          },
          {
            make: "Mercury",
            model: "Mountaineer",
            year: 2009,
            vin: "3GTU2YEJ4CG418654",
            city: "Dili",
            descShort: "purus sit amet nulla quisque arcu libero rutrum ac lobortis",
            descLong: "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            price: 486455,
            miles: 15226,
            carImg: './assets/car-pictures/Mercury-Mountaineer-2009.jpg'
          },
    ]);
    const [cartTotal, setCartTotal] = useState(0);

    // Adds the price of all items in cart together on change in cart-array
    useEffect(() => {
        setCartTotal(shoppingCartItems.reduce((sum, curr) => sum + curr.price, 0));
    }, [shoppingCartItems]);

    // Will connect to buy-buttons later
    // Set the cart array by creating a new array, adding the new item at the front of the array, then spreading out the old array after.
    const addToCart = (newItem) => {
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
        setShoppingCartItems(shoppingCartItems.filter(item => item !== itemToRemove));
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
    const formatSum = (sum) => `${new Intl.NumberFormat('sv-SE', { currency: 'SEK', style: 'decimal' }).format(sum)} kr`;

    const values = {
        shoppingCartItems,
        addToCart,
        removeFromCart,
        createTimeStamp,
        formatSum,
        cartTotal,
    }

    return (
        <ShoppingCartContext.Provider value={values}>
            {props.children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider;