import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import style from '../css/Checkout.module.css';

const Checkout = () => {

    const { shoppingCartItems, removeFromCart, cartTotal } = useContext(ShoppingCartContext)

    let itemS = shoppingCartItems.length === 1 ? 'item' : 'items';

    return (
        <div className="checkout">
            <div className="container">
                <h1>Your shopping cart</h1>
                <div className="row">
                    <div className={style.shoppinglist}>
                        {/* Ternary operator to display "No items in cart" or loop out the items */}
                        {shoppingCartItems.length == 0 ? <h2 className="text-center">No items in cart</h2> :
                            <div>
                                {shoppingCartItems.map((item, key) => (
                                    <div key={key} className={`row ${style.shoppingCartCard}`}>
                                        <div className="col-2">Image Placeholder</div>
                                        <div className="col-7">
                                            <h2>{`${item.make} ${item.model}`}</h2>
                                            <p>{`${item.descShort}`}</p>
                                        </div>
                                        <div className={`col-2 ${style.flexer}`}>
                                            <p className="mb-0"><strong>{`${new Intl.NumberFormat('sv-SE', { currency: 'SEK', style: 'decimal' }).format(item.price)} kr`}</strong></p>
                                        </div>
                                        <div className={`col-1 ${style.flexer}`}><span className={style.removeButton} onClick={() => removeFromCart(item)}>X</span></div>
                                    </div>
                                ))}
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h3>
                                        {`${shoppingCartItems.length} ${itemS} in cart`}
                                    </h3>
                                    <h3>
                                        {`Total: ${new Intl.NumberFormat('sv-SE', { currency: 'SEK', style: 'decimal' }).format(cartTotal)} kr`}
                                    </h3>
                                </div>
                            </div>
                        } {/* Ternary operator end */}
                    </div>
                </div>

                <form>
                    <div className="row">
                        <div className={`col-12 col-sm-6 ${style.info}`}>
                            <h2 className="text-center">Your info</h2>

                            <label htmlFor="firstName">First name</label>
                            <input className="form-control" type="text" id="firstName" required></input>

                            <label htmlFor="surname">Surname</label>
                            <input className="form-control" type="text" id="surname" required></input>

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
                            <input className="form-control" type="text" id="email" required></input>
                        </div>

                        <div className={`col-12 col-sm-6 ${style.payment}`}>
                            <div>
                                <h2 className="text-center">Payment options</h2>
                                <div>
                                    <input className={style.radioButton} type="radio" id="card" value="card" name="radio" required></input>
                                    <label htmlFor="card">Credit card</label>
                                </div>
                                <div>
                                    <input className={style.radioButton} type="radio" id="invoice" value="invoice" name="radio"></input>
                                    <label htmlFor="invoice">Invoice</label>
                                </div>
                                <div>
                                    <input className={style.radioButton} type="radio" id="swish" value="swish" name="radio"></input>
                                    <label htmlFor="swish">Swish</label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <hr />
                                <h3 className="text-center">
                                    {`Price total: ${new Intl.NumberFormat('sv-SE', { currency: 'SEK', style: 'decimal' }).format(cartTotal)} kr`}
                                </h3>
                                <button className="btn btn-success d-block mx-auto">Place order</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Checkout;