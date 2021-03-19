import styles from '../css/ProfileCar.module.css'
import labrador_profile from './images/labrador_profile.jpg'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ProfileCar = () => {

  const { orderInfo } = useContext(UserContext);
  const { shoppingCartItems, formatSum } = useContext(ShoppingCartContext)

    return ( 
      <div>
        <h3 className={styles.profileCarHeading}>My purchase history</h3>
        {/* Loopa ut orderkort här */}
        {orderInfo.map((order) => {
          return (
            <div className={styles.orderWrapper}>
            <div className={styles.orderInfo}>
              <p className={`${styles.profileCarSubHeading}`}>Order number: {order.orderNumber}</p>
              <p className={`${styles.profileCarSubheading}`}>Date: {order.orderDate[0]} {order.orderDate[1]}</p>
            </div>

            {/* Loopa ut bought cars här */}
            {order.boughtCars.map((car) => {
              return (
              <div className={styles.profileCarWrapper} key={car.vin}>
              <img src={car.carImg}alt="Profile picture" className={`${styles.profileImage} ${styles.gridItem1}`}/>
              <p className={`${styles.profileText} ${styles.gridItem2}`}>{car.make} {car.model}</p>
              <p className={`${styles.profileText} ${styles.gridItem3}`}>{formatSum(car.price)}</p>
              <p className={`${styles.profileText} ${styles.gridItem4}`}>{car.year}</p>
            </div>
            )
            })}
           
            <div className={styles.orderTotal}>
              
              <p className={styles.orderTotalText}>Total price: {formatSum(order.price)}</p>   
              {/* <button type="button"
                    className={`
                    ${styles.infoButton}
                    btn 
                    `}
                   >Print
              </button> */}
            </div>
          </div>
          )
        })}
          
      </div>
        // <div className={`
        // ${styles.wrapper}
        // `}>
        //    <p className={`${styles.profileCarSubHeading}`}>Ordernumber</p>
        //      <p className={`${styles.profileCarSubheading}`}>Date/Time</p>
        //    <div className={`
        //    ${styles.containerCarWrapper}
        //    `}>
        //    <div className={`${styles.profileCarWrapper}`}>
        //    <img src="https://via.placeholder.com/100x50.png" alt="Profile picture" className={`${styles.profileImage} ${styles.gridItem1}`}/>
          
        //      <p className={`${styles.profileText} ${styles.gridItem2}`}>Car make</p>
        //      <p className={`${styles.profileText} ${styles.gridItem3}`}>Price</p>
        //      <p className={`${styles.profileText} ${styles.gridItem4}`}>Year</p>
        //      {/* <p className={`${styles.profileText} ${styles.gridItem5}`}>Car make</p> */}
           
        //  </div>
        //  </div>
        //  <p className={`${styles.profileCarSubheading}`}>Total price</p>
        //  <button type="button"
        //     className={`
        //              ${styles.infoButton}
        //              btn 
        //              btn-info`}
        //   >Print</button>
        // </div>
     );
}
 
export default ProfileCar;