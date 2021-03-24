import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/PopupCart.module.css';

const PopupCart = () => {
  const { shoppingCartItems: cart, removeFromCart, cartTotal } = useContext(ShoppingCartContext);
  const { viewCar, checkCarDiscount, formatSum } = useContext(CarContext);
  const history = useHistory();


  return (
    <div className={style.popupCartWrapper}>
      <div className={style.cartTitle}>
        <h4>Your cart:</h4>
      </div>
      <div className={style.cartItemsWrapper}>
        {
          cart.length ? 
          cart.map(car => (
            <div className={style.cartItem} key={car.vin} onClick={(e) => {
              // Go to details-page if e.target is not removeBtn
              if (e.target.id !== "removeBtn") {
                viewCar(car, history);
              }
            }}>
              <div className={style.cartImgWrapper}>
                <img src={car.carImg} alt={car.make}/>
              </div>
              <div className={style.cartItemText}>
                <h5 className={style.cartCarName}>
                  {car.make} {car.model} 
                </h5>
                <p className={style.cartYear}>{car.year}</p>
              </div>
              <div className={style.cartItemRight}>
                <h5 className={style.carPrice}>{checkCarDiscount(car)}</h5>
                <button onClick={() => removeFromCart(car)} className={style.cartRemoveBtn} id="removeBtn">X</button>
              </div>
            </div>
          )) : <h5 className={style.emptyCartMsg}>Your cart is empty</h5>
        }
      </div>
      <div className={style.totalSumWrapper}>
          <h5>Total:</h5>
          <h5>{formatSum(cartTotal)}</h5>
      </div>
      <button onClick={() => history.push('/checkout')} className={`button blue-button ${style.toCheckoutBtn}`}>Go to checkout</button>
    </div>
   );
}
 
export default PopupCart;