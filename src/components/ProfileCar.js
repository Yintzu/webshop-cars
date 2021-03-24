import styles from '../css/ProfileCar.module.css'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ProfileCar = () => {

  const { orderInfo, loggedInUser } = useContext(UserContext);
  const { formatSum } = useContext(ShoppingCartContext)

  return (
    <div>
      <h1 className={styles.profileCarHeading}>My purchase history</h1>
      {/* Loopa out orders */}
      {loggedInUser.orders.map((order, i) => {
        return (
          <div key={i}>
            <div className={styles.orderWrapper}>
              <div className={styles.orderInfo}>
                <p className={`${styles.profileCarSubHeading}`}>Order number: {order.orderNumber}</p>
                <p className={`${styles.profileCarSubHeading}`}>Date: {order.orderDate[0]} {order.orderDate[1]}</p>
              </div>

              {/* Loopa out bought cars */}
              {order.boughtCars.map((car) => {
                return (
                  <div className={styles.flexWrapper} key={car.vin}>
                    <div className={styles.flexItem}><img src={car.carImg} alt="Car picture" className={`${styles.profileImage}`} /></div>
                    <div className={`${styles.flexItem}`}>{car.make} {car.model} {car.year}</div>
                    <div className={`${styles.flexItem2}`}>{formatSum(car.price)}</div>
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
  );
}

export default ProfileCar;