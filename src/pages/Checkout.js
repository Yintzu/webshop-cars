import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import style from '../css/Checkout.module.css';

const Checkout = () => {

    const { shoppingCartItems } = useContext(ShoppingCartContext)

    return (
        <div className="checkout">
            <div className="container text-center">
                <h1>Your shopping cart</h1>
                <div className={style.shoppinglist}>
                    {shoppingCartItems.map((item, key) => (
                        <div key={key}>
                            <p>{item.name}</p>
                            <p>{item.year}</p>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className={`col-12 col-sm-6 ${style.info}`}>
                        <h1>Your info</h1>
                    </div>
                    <div className={`col-12 col-sm-6 ${style.payment}`}>
                        <h1>Payment</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;