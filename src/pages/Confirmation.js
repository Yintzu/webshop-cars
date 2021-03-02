import styles from '../css/Confirmation.module.css';
import { NavLink } from 'react-router-dom';

const Confirmation = () => {
    return ( 
        <div className="container">
          <h1 className={styles.mainHeading}>Thank you for your order</h1>
            <div className="row"> 
              <div className={`
              ${styles.confirmationBox}
              col-sm
              col-md-offset-2
              `}>                 
                <h3 className={styles.smallerHeading}>Order number: 1275758489</h3>
                  <p className={styles.containerText}>Delivery details</p>
                    <hr/>
                    <h4 className={styles.smallHeading}>Delivery for</h4>
                    <p className={styles.containerText}>Ms Sara Persson</p>
                    <h4 className={styles.smallHeading}>Delivery address</h4>
                    <p className={styles.containerText}>Storgatan 6</p>
                    <p className={styles.containerText}>217 57 Malmö</p>
                    <h4 className={styles.smallHeading}>Telephone</h4>  
                    <p className={styles.containerText}>+46704123456</p>

                    {/* Order Info */}
                    <h4 className={styles.smallHeading}>Order info</h4>
                    <p className={styles.containerText}>Order number: 1275758489</p>
                    <p className={styles.containerText}>Order date: 2021-03-02</p>
                    <p className={styles.containerText}>Payment method: VISA</p>
                    <p className={styles.containerTextLast}>Delivery method: Pick up at store</p>

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
                     onClick={window.print}
                     >Print</button>
              </div>

              {/* Box right - Summary */}
              <div className={`
                ${styles.confirmationBox}
                mx-md-2
                col
                col-lg-4
                col-md-offset-5
              `}> 
                <h3 className={styles.smallerHeading}>Summary</h3>
                <hr/>
                <div className="row">
                  <div className="col">
                    <p className={styles.containerText}>Car 1</p>
                    <p className={styles.containerText}>Car 2</p>
                    <hr/>
                 </div>
                 <div className="col">
                    <p className={styles.containerText}>$200 000</p>
                    <p className={styles.containerText}>$450 000</p>
                    <hr/> 
                 </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className={styles.containerText}>Total:</p>
                 </div>
                 <div className="col">
                    <p className={styles.containerText}>$650 000</p>
                 </div>
                </div>
              </div> 
            </div> 
        </div>
     );
}
 
export default Confirmation;