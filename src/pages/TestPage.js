import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import style from '../css/TestPage.module.css';

const TestPage = () => {
  const { cars } = useContext(CarContext);

  return ( 
    <div className={style.testPageWrapper}>
      {cars.length ? 
        <div className={style.carCard}>
          <h5>{cars[0].make}</h5>
          <h5>{cars[0].model}</h5>
          <p>{cars[0].year}</p>
          <button className={style.addToCartBtn}>Add To Cart</button>
        </div>
        
        : <div>Loading...</div>}
    </div>
   );
}
 

export default TestPage;