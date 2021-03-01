import styles from '../css/Confirmation.module.css';

const Confirmation = () => {
    return ( 
        <div className="container">
          <h1 className={styles.confirmationHeading}>Thank you for your order</h1>
            <div className="row"> 
              <div className={`
              ${styles.confirmationBox}
              col-sm
              col-md-offset-2
              `}>                 
                <h3>Order number: 1275758489</h3>
                  <p>Delivery details</p>
                  
              </div>
              <div className={`
                ${styles.confirmationBox}
                mx-md-2
                col
                col-lg-4
                col-md-offset-5
              `}>  
                <h3>Summary</h3>
                <hr/>
                <div className="row">
                  <div className="col">
                    <p>Car 1</p>
                    <p>Car 2</p>
                    <hr/>
                 </div>
                 <div className="col">
                    <p>$200 000</p>
                    <p>$450 000</p>
                    <hr/> 
                 </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p>Total:</p>
                 </div>
                 <div className="col">
                    <p>$650 000</p>
                 </div>
                </div>
              </div>
                     
            </div>
            <button type="button" className="btn btn-secondary">Back</button>
        </div>
  
     );
}
 
export default Confirmation;