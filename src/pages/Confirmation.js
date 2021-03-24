import styles from '../css/Confirmation.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { CarContext } from '../contexts/CarContext';

const Confirmation = () => {

  const { boughtCars, orderInfo } = useContext(UserContext);
  const { shoppingCartItems } = useContext(ShoppingCartContext)
  const { formatSum } = useContext(CarContext);
  const history = useHistory();

  // console.log(boughtCars);
  // console.log(orderInfo);
  // console.log(shoppingCartItems)

  return (
    <div className="container">
      {orderInfo[0] ? 
      <div className="conditional">
        <h1 className={styles.mainHeading}>Thank you for your order</h1>
        <div className="row">
          <div className={`
              ${styles.confirmationBoxLeft}
              col-sm
              col-md-offset-5
              toPrint
              `}>
            <h3 className={styles.smallerHeading}>Order number: <span className={styles.textOrderNumber}>{orderInfo[0].orderNumber}</span> </h3>
            <hr className={styles.hrConfirmation} />
            <h3 className={styles.smallerHeading}>Delivery details</h3>
            <p className={styles.containerText}>We are currently processing your order and will email you with confirmation shortly. For your convenience you may want to save or print this order confirmation.</p>
            <hr className={styles.hrConfirmation} />
            <h4 className={styles.smallHeading}>Delivery for</h4>
            <p className={styles.containerText}>{orderInfo[0].firstName} {orderInfo[0].lastName}</p>
            <h4 className={styles.smallHeading}>Delivery address</h4>
            <p className={styles.containerText}>{orderInfo[0].address}, {orderInfo[0].postalnr} {orderInfo[0].city}</p>
            {/* <p className={styles.containerText}>{orderInfo[0].postalnr} {orderInfo[0].city}</p> */}
            <h4 className={styles.smallHeading}>Telephone</h4>
            <p className={styles.containerText}>{orderInfo[0].phone}</p>
            <h4 className={styles.smallHeading}>E-mail</h4>
            <p className={styles.containerTextLast}>{orderInfo[0].email}</p>
          </div>

          {/* Box right - Summary */}
          <div className={`
                ${styles.confirmationBoxRight}
                col
                col-lg-5
                col-md-offset-5
                col-mr-6
              `}>
            <h3 className={styles.smallerHeading}>Summary</h3>
            <hr className={styles.hrConfirmation} />

            {/* Map loop to show all the cars bought with this order */}
            {orderInfo[0].boughtCars.map((car) => (
              <div className="row" key={car.vin}>
                <div className={`
              ${styles.boldSummary}
              col
              `}>Item:
              <p className={styles.containerText}>{car.make} {car.model}</p>
                </div>
                <div className={`
              ${styles.boldSummary}
              col
              `}>Price:
              <p className={styles.containerText}>{formatSum(car.price)}</p>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col">
                <hr className={styles.hrConfirmation} />
                <p className={styles.boldSummary}>Total:</p>
              </div>
              <div className="col">
                <hr />
                <p className={styles.containerText}>{formatSum(orderInfo[0].price)}</p>
              </div>
              {/* Order Info */}
              <h4 className={styles.smallHeading}>Order info</h4>
              <p className={styles.boldSummary}>Order number: <br /> <span className={styles.containerText}>{orderInfo[0].orderNumber}</span> </p>
              <p className={styles.boldSummary}>Order date:<br /><span className={styles.containerText}>{orderInfo[0].orderDate[0]} {orderInfo[0].orderDate[1]}</span></p>
              <p className={styles.boldSummary}>Payment method: <br /><span className={styles.containerText}>{orderInfo[0].payment}</span></p>
              <p className={styles.boldSummary}>Delivery method: <br /><span className={styles.containerTextLast}>{orderInfo[0].delivery}</span></p>

            </div>

            {/* Buttons start */}
            <button type="button"
              className={`
                     ${styles.printButton}
                     btn 
                     btn-info`}
              onClick={() => window.print()}
            >Print</button>

            <NavLink exact to="/"><button type="button"
              className={`
                    ${styles.backButton}
                    btn 
                    btn-dark
                   `}>Back</button>
            </NavLink>
          </div>
        </div>
      </div> : history.push("/")}
    </div>
  );
}

export default Confirmation;