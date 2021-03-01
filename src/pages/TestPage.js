import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import style from '../css/TestPage.module.css';

const TestPage = () => {
  const { cars } = useContext(CarContext);

  return ( 
    <div className={style.testPageWrapper}>
      {cars.length ? 
        cars.map(car => (
          <div key={car.vin} className={style.carCard}>
            <div className={style.imgContainer}>
              <img src={car.carImg}></img>
            </div>
            <h5>{car.make}</h5>
            <h5>{car.model}</h5>
            <p>{car.year}</p>
            <button className={style.addToCartBtn}>Add To Cart</button>
          </div>
        ))
        
        : <div>Loading...</div>}
    </div>
   );
}
 

export default TestPage;