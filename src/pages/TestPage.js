import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/TestPage.module.css';
import Search from '../components/Search';

// This page was only used in the beginning of the project to test the rendering of the cars and functions from contexts
// We kept this file here as a reference

const TestPage = () => {
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { viewCar, renderList } = useContext(CarContext);
  const history = useHistory();
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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