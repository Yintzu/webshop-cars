import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/BuyButtons.module.css';

const BuyButtons = (props) => {
  const { boughtCheck } = useContext(CarContext);
  const { shoppingCartItems, removeFromCart, addToCart } = useContext(ShoppingCartContext);

  // Function used to render buttons on CarCards and Details-page
  // Checks status of car (available, in cart or sold)
  const renderButtons = (car) => {
    let inCart = false;
    let bought = false;
    shoppingCartItems.forEach(cartItem => {
      if (cartItem.vin === car.vin) {
        inCart = true;
      }
    });

    // Uses boughtCheck-function located in CarContext to check if car is bought
    bought = boughtCheck(car);

    // Return button JSX depending on car status
    if (inCart) {
      return <button onClick={() => removeFromCart(car)} className={`${style.btnsWidth} ${style.removeButton}`} id="addRemove">Remove</button>
    } else if (bought) {
      return <button className={`${style.btnsWidth} ${style.disabled} ${style.btnCustom}`} id="addRemove">Sold</button>
    } else {
      return <button onClick={() => addToCart(car)} className={`${style.btnsWidth} ${style.addButton}`} id="addRemove">Buy</button>
    }
  }

  return ( 
    <div>
      {renderButtons(props.car)}
    </div>
   );
}
 
export default BuyButtons;