import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/TestPage.module.css';
import Search from '../components/Search';

const TestPage = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { viewCar, renderList } = useContext(CarContext);
  const history = useHistory();
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext);

  // Check which button to render, depending on if item is already in cart or not
  // Using vin-number to compare
  const renderButtons = (car) => {
    let inCart = false;
    shoppingCartItems.forEach(cartItem => {
      if (cartItem.vin === car.vin) {
        inCart = true;
      } 
    });
    if (inCart) {
      return <button onClick={() => removeFromCart(car)} className={`${style.addToCartBtn} ${style.removeBtn}`}>Remove</button>
    } else {
      return <button onClick={() => addToCart(car)} className={`${style.addToCartBtn}`}>Add To Cart</button> 
    }
  }

  return ( 
    <div className={style.testPageWrapper}>
      <Search/>
      {renderList ? 
        renderList.map(car => (
          <div key={car.vin} data={car} className={style.carCard}>
            <div className={`${style.imgTxtWrapper}`} onClick={() => viewCar(car, history)}>
              <div className={style.imgContainer}>
                <img src={car.carImg}></img>
              </div>
              <div className={style.infoText}>
                <h5>{car.make} {car.model}</h5>
                <p>{car.year}</p>
              </div>
            </div>
            {/* Render add or remove button */}
            { renderButtons(car) }
          </div>
        ))
        
        : <div>No results....</div>}
    </div>
   );
}
 

export default TestPage;