import { useContext, useState, useEffect, cloneElement } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import { UserContext } from "../contexts/UserContext";
import { CarContext } from "../contexts/CarContext";
import style from '../css/Checkout.module.css';

const Checkout = () => {

    const { shoppingCartItems, removeFromCart, removeAllFromCart, cartTotal, formatSum, createTimeStamp } = useContext(ShoppingCartContext)
    const { setOrderInfo, orderInfo, loggedInUser } = useContext(UserContext)
    const { boughtCars, setBoughtCars, viewCar } = useContext(CarContext)
    const history = useHistory();

    const [radioStatus, setRadioStatus] = useState("");
    const [selectStatus, setSelectStatus] = useState("Pick up at store");

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
        orderInfoObject["price"] = (cartTotal + deliveryPrice);
        orderInfoObject["boughtCars"] = shoppingCartItems;
        orderInfoObject["orderDate"] = createTimeStamp();
        orderInfoObject["orderNumber"] = Math.round(Math.random() * 10000000);
        if (loggedInUser){
            loggedInUser.orders = [orderInfoObject, ...loggedInUser.orders];
        }
        setOrderInfo([orderInfoObject, ...orderInfo])
        setBoughtCars([...shoppingCartItems, ...boughtCars])
        removeAllFromCart();
        history.push("/confirmation");
    }

    let deliveryPrice = 0;
    const selectPriceRenderer = (selection) => {
        if (selection === "Pick up at store") {
            deliveryPrice = 0;
        } else if (selection === "Delivery by truck") {
            deliveryPrice = 2000;
        } else if (selection === "Delivery by helicopter") {
            deliveryPrice = 10000;
        }
        return <h3 className={`${style.deliveryPrice}`}>{formatSum(deliveryPrice)}</h3>
    }

    let itemS = shoppingCartItems.length === 1 ? 'item' : 'items';

    return (
        <div className={`checkout`}>
            <div className="container">
                <h1 className={`mt-0 ${style.mainHeading}`}>Your shopping cart</h1>
                <div className="row">
                    <div className={`shoppinglist ${style.shoppinglist} ${style.background}`}>
                        {/* Ternary operator to display "No items in cart" or loop out the items */}
                        {shoppingCartItems.length == 0 ? <div className={style.emptyCartWrapper}><h2 className={`text-center my-3`}>Your cart is empty</h2><NavLink exact to="/" className={`btn btn-primary ${style.cartDealsButton}`}>See our great deals!</NavLink></div> :
                            <div>
                                {shoppingCartItems.map((item, key) => (
                                    <div key={key} className={`row position-relative ${style.shoppingCartCard}`} onClick={(e) => e.target.tagName !== "SPAN" && viewCar(item, history)}>
                                        <div className={`col-12 col-sm-12 col-md-3 ${style.flexer}`}><img className={`my-2 w-100 rounded`} src={item.carImg} /></div>
                                        <div className={`col-12 col-sm-7 col-md-6 ${style.paddingFix}`}>
                                            <h2 className={`${style.smallerHeading}`}>{`${item.make} ${item.model} ${item.year}`}</h2>
                                            <p>{`${item.descShort}`}</p>
                                        </div>
                                        <div className={`col-12 col-sm-3 col-md-2 px-0 ${style.flexer} ${style.itemPriceDiv}`}>
                                            <h3 className={`${style.itemPrice}`}>{`${formatSum(item.price)}`}</h3>
                                        </div>
                                        <div className={`col-0 col-sm-2 col-md-1 ${style.flexer}`}><span className={`${style.removeButton} ${style.positionFix}`} onClick={() => removeFromCart(item)}>X</span></div>
                                    </div>
                                ))}
                                <hr />
                                <div>
                                    <h2 className={`text-center mb-4 ${style.mainHeading}`}>Delivery Options</h2>
                                    <div className={`${style.deliveryDiv}`}>
                                        <div className={`customSelect ${style.customSelect}`}>
                                            <select className={`${style.select}`} id={`deliveryOptions`} onChange={selectHandler}>
                                                <option>Pick up at store</option>
                                                <option>Delivery by truck</option>
                                                <option>Delivery by helicopter</option>
                                            </select>
                                            <span className="focus"></span>
                                        </div>
                                        {selectPriceRenderer(selectStatus) /* Shows delivery price depending on selection */}
                                    </div>
                                </div>
                                <hr />
                                <div className={`${style.itemTotalDiv}`}>
                                    <h3>
                                        {`${shoppingCartItems.length} ${itemS} in cart`}
                                    </h3>
                                    <hr className={style.ithr} />
                                    <h3>
                                        {`Price total: ${formatSum(cartTotal + deliveryPrice)}`}
                                    </h3>
                                </div>
                            </div>
                        } {/* Ternary operator for cart items and delivery options END*/}
                    </div>
                </div>
                {/* Conditionally render the form if there are items in cart */}
                {shoppingCartItems.length > 0 &&
                    <form onSubmit={submitHandler}>
                        <div className="row d-flex justify-content-between">
                            <div className={`col-12 col-md-6 info ${style.info} ${style.background} ${style.gutterFix}`}>
                                <h2 className={`text-center my-3 ${style.mainHeading}`}>Your info</h2>

                                <label htmlFor="firstName">First name</label>
                                <input className="form-control" type="text" id="firstName" pattern="[A-Öa-ö\s]+" required></input>

                                <label htmlFor="lastName">Last name</label>
                                <input className="form-control" type="text" id="lastName" pattern="[A-Öa-ö\s]+" required></input>

                                <label htmlFor="address">Address</label>
                                <input className="form-control" type="text" id="address" pattern="[A-Öa-ö\s\d]+" required></input>

                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="postalnr">Postal number</label>
                                        <input className="form-control" type="text" id="postalnr" pattern="[\d]{3}\s?[\d]{2}" required></input>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="city">City</label>
                                        <input className="form-control" type="text" id="city" pattern="[A-Öa-ö\s]+" required></input>
                                    </div>
                                </div>

                                <label htmlFor="phone">Phone number (no spaces)</label>
                                <input className="form-control" type="text" id="phone" pattern="\+?[\d]{2,8}-?[\d]{6,8}" required></input>

                                <label htmlFor="email">E-mail</label>
                                <input className="form-control mb-4" type="email" id="email" required></input>
                            </div>

                            <div className={`col-12 col-md-6 ${style.payment} ${style.background} ${style.gutterFix}`}>
                                <div>
                                    <h2 className={`text-center my-3 ${style.mainHeading}`}>Payment options</h2>
                                    <div>
                                        <input className={style.radioButton} type="radio" id="creditCard" value="card" name="radio" checked={radioStatus == "card"} onChange={radioHandler} required></input>
                                        <label htmlFor="creditCard">Credit card</label>
                                    </div>
                                    {radioStatus === "card" &&
                                        <div className={`${style.cardInfo} mb-3`}>
                                            <label htmlFor="cardOwner">Name of card owner</label>
                                            <input className="form-control" type="text" id="cardOwner" pattern="[A-Öa-ö\s]+" required></input>
                                            <label htmlFor="cardNumber">Card number</label>
                                            <input className="form-control" type="text" id="cardNumber" pattern="[\d]{4}\s?[\d]{4}\s?[\d]{4}\s?[\d]{4}" required></input>
                                            <div className="row">
                                                <div className="col-8 col-sm-8">
                                                    <label className={style.expirationDate} htmlFor="expiration">Expiration date (mm-yy)</label>
                                                    <input className="form-control" type="text" id="expiration" pattern="[\d]{2}-[\d]{2}" required></input>
                                                </div>
                                                <div className="col-4 col-sm-4">
                                                    <label htmlFor="cvv">CVV</label>
                                                    <input className="form-control" type="text" id="cvv" pattern="[\d]{3}" required></input>
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
                                <div className="mb-4">
                                    <hr />
                                    <h3 className="text-center mb-4">
                                        {`Price total: ${formatSum(cartTotal + deliveryPrice)}`}
                                    </h3>
                                    <button className={`btn d-block mx-auto ${style.orderButton}`}>Place order</button>
                                </div>
                            </div>
                        </div>
                    </form>
                }{/*Conditional form rendering end*/}
            </div>
        </div>
    );
}

export default Checkout;