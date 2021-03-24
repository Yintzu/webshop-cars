import styles from '../css/ProfileCar.module.css'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import NoPurchases from '../components/NoPurchases';

const ProfileCar = () => {

  const { loggedInUser } = useContext(UserContext);
  const { formatSum } = useContext(ShoppingCartContext)

  return (
    <div>
      <h1 className={styles.profileCarHeading}>My purchase history</h1>
      
      {/* Check if loggedInUser has made any orders */}
      {loggedInUser.orders.length ?
       <div>
        {/* Loop out orders */}
        {loggedInUser.orders.map((order, i) => {
          return (
            <div key={i}>
              <div className={styles.orderWrapper}>
                <div className={styles.orderInfo}>
                  <p className={`${styles.profileCarSubHeading}`}>Order number: {order.orderNumber}</p>
                  <p className={`${styles.profileCarSubheading}`}>Date: {order.orderDate[0]} {order.orderDate[1]}</p>
                </div>

                {/* Loop out bought cars */}
                {order.boughtCars.map((car) => {
                  return (
                    <div className={styles.profileCarWrapper} key={car.vin}>
                      <img src={car.carImg} alt="Car picture" className={`${styles.profileImage} ${styles.gridItem1}`} />
                      <p className={`${styles.profileText} ${styles.gridItem2}`}>{car.make} {car.model}</p>
                      <p className={`${styles.profileText} ${styles.gridItem3}`}>{formatSum(car.price)}</p>
                      <p className={`${styles.profileText} ${styles.gridItem4}`}>{car.year}</p>
                    </div>
                  )
                })}

                <div className={styles.orderTotal}>

                  <p className={styles.orderTotalText}>Total price: {formatSum(order.price)}</p>
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