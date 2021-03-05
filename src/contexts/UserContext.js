import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const [boughtCars, setBoughtCars] = useState([]);
    const [orderInfo, setOrderInfo] = useState([
    {
      address: "Södra Esplanaden 9a",
      cardNumber: "123123",
      cardOwner: "13213",
      city: "Lund",
      cvv: "132",
      delivery: "Pick up at store",
      email: "victorlillowerngren@gmail.com",
      expiration: "13221",
      firstName: "Victor",
      lastName: "Werngren",
      payment: "card",
      phone: "+46730713949",
      postalnr: "22354",
      ordernumber: "1234567",
      orderdate: "2021-03-04",
      price: "$235 697",
      boughtCars: [{
        carImg: "../assets/car-pictures/Chevrolet-Camaro-1973.jpg",
        city: "Santa Rosa",
        descLong: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.↵↵Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.↵↵Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
        descShort: "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
        make: "Chevrolet",
        miles: 15432,
        model: "Camaro",
        price: 554963,
        vin: "1D4PT5GK0BW487259",
        year: 1973
      }]
     
    }

    ]);

    useEffect(() => {
        console.log("Bought cars:");
        console.log(boughtCars)
    }, [boughtCars])

    const values = {
        boughtCars,
        setBoughtCars,
        orderInfo,
        setOrderInfo
    }
    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>);
}

export default UserContextProvider;