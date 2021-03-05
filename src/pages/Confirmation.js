import styles from '../css/Confirmation.module.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const Confirmation = () => {

  const { boughtCars, orderInfo } = useContext(UserContext);
  const { shoppingCartItems } = useContext(ShoppingCartContext)

  console.log(boughtCars);
  console.log(orderInfo);
  console.log(shoppingCartItems)

  return (
    <div className="container">
      <h1 className={styles.mainHeading}>Thank you for your order</h1>
      <div className="row">
        <div className={`
              ${styles.confirmationBox}
              col-sm
              col-md-offset-2
              `}>
          <h3 className={styles.smallerHeading}>Order number: {orderInfo[0].ordernumber}</h3>
          <p className={styles.containerText}>Delivery details</p>
          <hr />
          <h4 className={styles.smallHeading}>Delivery for</h4>
          <p className={styles.containerText}>{orderInfo[0].firstName} {orderInfo[0].lastName}</p>
          <h4 className={styles.smallHeading}>Delivery address</h4>
          <p className={styles.containerText}>{orderInfo[0].address}</p>
          <p className={styles.containerText}>{orderInfo[0].postalnr} {orderInfo[0].city}</p>
          <h4 className={styles.smallHeading}>Telephone</h4>
          <p className={styles.containerText}>{orderInfo[0].phone}</p>
          <h4 className={styles.smallHeading}>E-mail</h4>
          <p className={styles.containerTextLast}>{orderInfo[0].email}</p>


          {/* Buttons start */}
          <NavLink exact to="/"><button type="button"
            className={`
                    ${styles.backButton}
                    btn 
                    btn-dark
                   `}>Back</button></NavLink>
          <button type="button"
            className={`
                     ${styles.printButton}
                     btn 
                     btn-info`}
            onClick={() => window.print()}
          >Print</button>
        </div>

        {/* Box right - Summary */}
        <div className={`
                ${styles.confirmationBox}
                mx-md-2
                col
                col-lg-5
                col-md-offset-5
              `}>
          <h3 className={styles.smallerHeading}>Summary</h3>
          <hr />

          {orderInfo[0].boughtCars.map((car) => (
            <div className="row">
              <div className="col">
                <p className={styles.containerText}>{car.make} {car.model}</p>
                <hr />
              </div>
              <div className="col">
                <p className={styles.containerText}>{car.price}</p>
                <hr />
              </div>
            </div>
          ))}


          <div className="row">
            <div className="col">
              <p className={styles.containerText}>Total:</p>
            </div>
            <div className="col">
              <p className={styles.containerText}>{orderInfo[0].price}</p>
            </div>
            {/* Order Info */}
            <h4 className={styles.smallHeading}>Order info</h4>
            <p className={styles.containerText}>Order number: {orderInfo[0].ordernumber}</p>
            <p className={styles.containerText}>Order date: {orderInfo[0].orderdate}</p>
            <p className={styles.containerText}>Payment method: {orderInfo[0].payment}</p>
            <p className={styles.containerTextLast}>Delivery method: {orderInfo[0].delivery}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;