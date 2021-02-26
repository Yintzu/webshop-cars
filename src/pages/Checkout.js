import style from '../css/Checkout.module.css';

const Checkout = () => {
    return ( 
        <div className="checkout">
            <div className="container text-center">
                <h1>Your shopping cart</h1>
                <div className={style.shoppinglist}>
                    <p>Item</p>
                    <p>Item</p>
                    <p>Item</p>
                    <p>Item</p>
                    <p>Item</p>
                </div>

            </div>
        </div>
     );
}
 
export default Checkout;