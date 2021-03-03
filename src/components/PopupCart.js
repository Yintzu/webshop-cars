import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/PopupCart.module.css';

const PopupCart = () => {
  const { shoppingCartItems, formatSum, removeFromCart, cartTotal } = useContext(ShoppingCartContext);
  const history = useHistory();

  return ( 
    <div className={style.popupCartWrapper}>
      <div className={style.cartItemsWrapper}>
        {shoppingCartItems.map(car => (
          <div className={style.cartItem} key={car.vin}>
            <div className={style.cartImgWrapper}>
              <img src={car.carImg} alt={car.make}/>
            </div>
            <div className={style.cartItemText}>
              <h5 className={style.cartCarName}>
                {car.make} 
                {car.model} 
              </h5>
              <p className={style.cartYear}>{car.year}</p>
            </div>
            <div className={style.cartItemRight}>
              <h5 className={style.carPrice}>{formatSum(car.price)}</h5>
              <button onClick={() => removeFromCart(car)} className={style.cartRemoveBtn}>X</button>
            </div>
          </div>
        ))}
      </div>
      <div className={style.totalSumWrapper}>
          <h5>Total:</h5>
          <h5>{formatSum(cartTotal)}</h5>
      </div>
      <button onClick={() => history.push('/checkout')} className={style.toCheckoutBtn}>Go to checkout</button>
    </div>
   );
}
 
export default PopupCart;