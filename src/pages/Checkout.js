import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import style from '../css/Checkout.module.css';

const Checkout = () => {

    const { shoppingCartItems } = useContext(ShoppingCartContext)

    return (
        <div className="checkout">
            <div className="container text-center">
                <h1>Your shopping cart</h1>
                <div className="row">
                    <div className={style.shoppinglist}>
                        {shoppingCartItems.map((item, key) => (
                            <div key={key}>
                                <p>{item.name}</p>
                                <p>{item.year}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className={`col-12 col-sm-6 ${style.info}`}>
                            <h1>Your info</h1>
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="firstName"></input>

                            <label htmlFor="surname">Surname</label>
                            <input type="text" id="surname"></input>

                            <label htmlFor="address">Address</label>
                            <input type="text" id="address"></input>

                            <label htmlFor="postalnr">Postal number</label>
                            <input type="text" id="postalnr"></input>

                            <label htmlFor="city">City</label>
                            <input type="text" id="city"></input>

                            <label htmlFor="phone">Phone number</label>
                            <input type="text" id="phone"></input>

                            <label htmlFor="email">E-mail</label>
                            <input type="text" id="email"></input>
                        </div>
                        <div className={`col-12 col-sm-6 ${style.payment}`}>
                            <h1>Payment options</h1>
                            <input type="radio" id="card" value="card" name="radio"></input>
                            <label htmlFor="card">Credit card</label>
                            <input type="radio" id="invoice" value="invoice" name="radio"></input>
                            <label htmlFor="invoice">Invoice</label>
                            <input type="radio" id="swish" value="swish" name="radio"></input>
                            <label htmlFor="swish">Swish</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;