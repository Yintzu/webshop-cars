import styles from '../css/Confirmation.module.css';

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
                <h3 className={styles.smallHeading}>Order number: 1275758489</h3>
                  <p className={styles.containerText}>Delivery details</p>
                    <hr/>
                    <h4 className={styles.smallerHeading}>Delivery for</h4>
                    <p className={styles.containerText}>Mrs Susanne Eneroth</p>
                    <h4 className={styles.smallerHeading}>Delivery address</h4>
                    <p className={styles.containerText}>Storgatan 6</p>
                    <p className={styles.containerText}>217 57 Malmö</p>
                    <h4 className={styles.smallerHeading}>Telephone</h4>  
                    <p className={styles.containerTextLast}>+46707171929</p>
                    <button type="button" 
                    className={`
                    ${styles.backButton}
                    btn 
                    btn-dark
                   `}>Back</button>
                    <button type="button" className="btn btn-info">Print</button>
              </div>

              {/* Start box right - Summary */}
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