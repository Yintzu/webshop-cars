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
      price: "$235 697"
     
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