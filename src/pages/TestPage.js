import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/TestPage.module.css';
import Search from '../components/Search';

const TestPage = () => {
  const history = useHistory();
  const { cars, viewCar } = useContext(CarContext);
  const { addToCart } = useContext(ShoppingCartContext);

  return ( 
    <div className={style.testPageWrapper}>
      <Search/>
      {cars.length ? 
        cars.map(car => (
          <div key={car.vin} className={style.carCard}>
            <div className={`col-md ${style.imgTxtWrapper}`} onClick={() => viewCar(car, history)}>
              <div className={style.imgContainer}>
                <img src={car.carImg}></img>
              </div>
              <h5>{car.make}</h5>
              <h5>{car.model}</h5>
              <p>{car.year}</p>
            </div>
            <button onClick={() => addToCart(car)} className={`col-md-3 ${style.addToCartBtn}`}>Add To Cart</button>
          </div>
        ))
        
        : <div>Loading...</div>}
    </div>
   );
}
 

export default TestPage;