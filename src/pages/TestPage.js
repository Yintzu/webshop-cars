import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/TestPage.module.css';

const TestPage = () => {
  const history = useHistory();
  const { cars, viewCar } = useContext(CarContext);
  const { addToCart } = useContext(ShoppingCartContext);

  return ( 
    <div className={style.testPageWrapper}>
      {cars.length ? 
        cars.map(car => (
          <div key={car.vin} className={style.carCard} onClick={() => viewCar(car, history)}>
            <div className={style.imgContainer}>
              <img src={car.carImg}></img>
            </div>
            <h5>{car.make}</h5>
            <h5>{car.model}</h5>
            <p>{car.year}</p>
            <button onClick={() => addToCart(car)} className={style.addToCartBtn}>Add To Cart</button>
          </div>
        ))
        
        : <div>Loading...</div>}
    </div>
   );
}
 

export default TestPage;