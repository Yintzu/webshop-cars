import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/PopupCart.module.css';

const PopupCart = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);

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
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default PopupCart;