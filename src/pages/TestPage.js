import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/TestPage.module.css';
import Search from '../components/Search';

const TestPage = () => {
  const { cars } = useContext(CarContext);
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const { addToCart, removeFromCart } = useContext(ShoppingCartContext);

  return ( 
    <div className={style.testPageWrapper}>
      <Search/>
      {cars.length ? 
        cars.map(car => (
          <div key={car.vin} className={style.carCard}>
            <div className={style.imgContainer}>
              <img src={car.carImg}></img>
            </div>
            <h5>{car.make}</h5>
            <h5>{car.model}</h5>
            <p>{car.year}</p>
            { 
            !shoppingCartItems.includes(car) ? 
              <button onClick={() => addToCart(car)} className={style.addToCartBtn}>Add To Cart</button> :
              <button onClick={() => removeFromCart(car)} className={`${style.addToCartBtn} ${style.removeBtn}`}>Remove</button>
            }
          </div>
        ))
        
        : <div>Loading...</div>}
    </div>
   );
}
 

export default TestPage;