import { useContext } from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/PopupCart.module.css';

const PopupCart = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  
  return ( 
    <div className={style.popupCartWrapper}>

    </div>
   );
}
 
export default PopupCart;