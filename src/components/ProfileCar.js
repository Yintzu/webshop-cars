import styles from '../css/ProfileCar.module.css'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { CarContext } from '../contexts/CarContext';
import NoPurchases from '../components/NoPurchases';

const ProfileCar = () => {

  const { loggedInUser } = useContext(UserContext);
  const { formatSum } = useContext(CarContext)

  return (
    <div>
      <h1 className={styles.carHeading}>My purchase history</h1>
      
      {/* Check if loggedInUser has made any orders */}
      {loggedInUser.orders.length ?
       <div>
        {/* Loop out orders */}
        {loggedInUser.orders.map((order, i) => {
          return (
            <div key={i}>
              <div className={styles.orderWrapper}>
                <div className={styles.orderInfo}>
                  <p className={`${styles.carSubHeading}`}>Order number: {order.orderNumber}</p>
                  <p className={`${styles.carSubHeading}`}>Date: {order.orderDate[0]} {order.orderDate[1]}</p>
                </div>

                {/* Loop out bought cars */}
                {order.boughtCars.map((car) => {
                  return (
                  <div className={styles.flexWrapper} key={car.vin}>
                    <div><img src={car.carImg} alt="Car picture" className={`${styles.carImage}`} /></div>
                    <div className={`${styles.flexItem}`}>{car.make} {car.model} {car.year}</div>
                    <div className={`${styles.flexItem}`}>{formatSum(car.price)}</div>
                  </div>
                  )
                })}

                <div className={styles.orderTotal}>
                  <div className={styles.orderTotalText}>Total price: {formatSum(order.price)}</div>
                </div>
              </div>
            </div>
          )
        })}
       </div> 
       : <NoPurchases />}
    </div>
  );
}

export default ProfileCar;