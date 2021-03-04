import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { UserContext } from "../contexts/UserContext";
import style from '../css/Checkout.module.css';

const Checkout = () => {

    const { shoppingCartItems, removeFromCart, removeAllFromCart, cartTotal, formatSum } = useContext(ShoppingCartContext)
    const { boughtCars, setBoughtCars } = useContext(UserContext)
    const history = useHistory();

    const [radioStatus, setRadioStatus] = useState("");
    const [selectStatus, setSelectStatus] = useState("Pick up at store");

    const [orderInfo, setOrderInfo] = useState([]);

    const radioHandler = (e) => {
        setRadioStatus(e.target.value)
    }

    const selectHandler = (e) => {
        setSelectStatus(e.target.options[e.target.selectedIndex].text)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        let orderInfoObject = {};

        document.querySelectorAll("form input").forEach((item) => {
            if (item.type === "radio" && item.checked === true) {
                orderInfoObject["payment"] = item.value
            } else if (item.type !== "radio") {
                orderInfoObject[item.id] = item.value;
            }
        })
        orderInfoObject["delivery"] = selectStatus;
        setOrderInfo([orderInfoObject, ...orderInfo])
        setBoughtCars(shoppingCartItems, ...boughtCars)
        removeAllFromCart();
        history.push("/confirmation");
    }

    let deliveryPrice = 0;
    const selectPriceRenderer = (selection) => {
        if (selection === "Pick up at store"){
            deliveryPrice = 0;
        } else if (selection === "Delivery by truck"){
            deliveryPrice = 2000;
        } else if (selection === "Delivery by helicopter") {
            deliveryPrice = 10000;
        }
        return <p className={`${style.deliveryPrice}`}>{formatSum(deliveryPrice)}</p>
    }

        /* useEffect(() => {
            console.log("User info from orders:");
            console.log(orderInfo)
        }, [orderInfo]) */

    let itemS = shoppingCartItems.length === 1 ? 'item' : 'items';

    return (
        <div className={`checkout ${style.quicksand}`}>
            <div className="container">
                <h1 className="mt-3">Your shopping cart</h1>
                <div className="row">
                    <div className={`${style.shoppinglist} ${style.background}`}>
                        {/* Ternary operator to display "No items in cart" or loop out the items */}
                        {shoppingCartItems.length == 0 ? <h2 className="text-center my-3">No items in cart</h2> :
                            <div>
                                {shoppingCartItems.map((item, key) => (
                                    <div key={key} className={`row ${style.shoppingCartCard}`}>
                                        <div className={`col-12 col-sm-12 col-md-2 ${style.flexer}`}><img className={`my-2 w-100 rounded`} src={item.carImg}/></div>
                                        <div className="col-12 col-sm-8 col-md-7">
                                            <h2 className="mt-2">{`${item.make} ${item.model}`}</h2>
                                            <p>{`${item.descShort}`}</p>
                                        </div>
                                        <div className={`col-8 col-sm-2 col-md-2 ${style.flexer}`}>
                                            <p className={`my-3 ${style.itemPrice}`}><strong>{`${formatSum(item.price)}`}</strong></p>
                                        </div>
                                        <div className={`col-4 col-sm-2 col-md-1 ${style.flexer}`}><span className={`my-3 ${style.removeButton}`} onClick={() => removeFromCart(item)}>X</span></div>
                                    </div>
                                ))}
                                <hr />
                                <div>
                                    <h2 className="text-center mb-3">Delivery Options</h2>
                                    <div className="row">
                                        <div className="col-9">
                                            <select id="deliveryOptions" onChange={selectHandler}>
                                                <option>Pick up at store</option>
                                                <option>Delivery by truck</option>
                                                <option>Delivery by helicopter</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            {selectPriceRenderer(selectStatus) /* Shows delivery price depending on selection */}
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between mb-2">
                                    <h3>
                                        {`${shoppingCartItems.length} ${itemS} in cart`}
                                    </h3>
                                    <h3>
                                        {`Total: ${formatSum(cartTotal+deliveryPrice)}`}
                                    </h3>
                                </div>
                            </div>
                        } {/* Ternary operator end */}
                    </div>
                </div>
                {/* Conditionally render the form if there are items in cart */}
                {shoppingCartItems.length > 0 &&
                    <form onSubmit={submitHandler}>
                        <div className="row d-flex justify-content-between">
                            <div className={`col-12 col-md-6 info ${style.info} ${style.background} ${style.gutterFix}`}>
                                <h2 className="text-center mt-2">Your info</h2>

                                <label htmlFor="firstName">First name</label>
                                <input className="form-control" type="text" id="firstName" required></input>

                                <label htmlFor="lastName">Last name</label>
                                <input className="form-control" type="text" id="lastName" required></input>

                                <label htmlFor="address">Address</label>
                                <input className="form-control" type="text" id="address" required></input>

                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="postalnr">Postal number</label>
                                        <input className="form-control" type="text" id="postalnr" required></input>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="city">City</label>
                                        <input className="form-control" type="text" id="city" required></input>
                                    </div>
                                </div>

                                <label htmlFor="phone">Phone number</label>
                                <input className="form-control" type="text" id="phone" required></input>

                                <label htmlFor="email">E-mail</label>
                                <input className="form-control" type="email" id="email" required></input>
                            </div>

                            <div className={`col-12 col-md-6 ${style.payment} ${style.background} ${style.gutterFix}`}>
                                <div>
                                    <h2 className="text-center mt-2">Payment options</h2>
                                    <div>
                                        <input className={style.radioButton} type="radio" id="creditCard" value="card" name="radio" checked={radioStatus == "card"} onChange={radioHandler} required></input>
                                        <label htmlFor="creditCard">Credit card</label>
                                    </div>
                                    {radioStatus === "card" &&
                                        <div className={style.cardInfo}>
                                            <label htmlFor="cardOwner">Name of card owner</label>
                                            <input className="form-control" type="text" id="cardOwner"></input>
                                            <label htmlFor="cardNumber">Card number</label>
                                            <input className="form-control" type="text" id="cardNumber"></input>
                                            <div className="row">
                                                <div className="col-6">
                                                    <label htmlFor="expiration">Expiration date</label>
                                                    <input className="form-control" type="text" id="expiration"></input>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input className="form-control" type="text" id="cvv"></input>
                                                </div>
                                            </div>
                                        </div>}
                                    <div>
                                        <input className={style.radioButton} type="radio" id="invoice" value="invoice" name="radio" checked={radioStatus == "invoice"} onChange={radioHandler}></input>
                                        <label htmlFor="invoice">Invoice</label>
                                    </div>
                                    {radioStatus === "invoice" && <div className="alert alert-primary">An invoice with payment details will be delivered to your address.</div>}
                                    <div>
                                        <input className={style.radioButton} type="radio" id="swish" value="swish" name="radio" checked={radioStatus == "swish"} onChange={radioHandler}></input>
                                        <label htmlFor="swish">Swish</label>
                                    </div>
                                    {radioStatus === "swish" && <div className="alert alert-primary">You will be prompted to open your Swish app to make a payment after you place your order.</div>}
                                </div>
                                <div className="mb-3">
                                    <hr />
                                    <h3 className="text-center mb-4">
                                        {`Price total: ${formatSum(cartTotal)}`}
                                    </h3>
                                    <button className="btn btn-success d-block mx-auto">Place order</button>
                                </div>
                            </div>
                        </div>
                    </form>/*Conditional form rendering end*/}
            </div>
        </div>
    );
}

export default Checkout;