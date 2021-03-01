import styles from '../css/Confirmation.module.css';
import Navbar from '../components/Navbar';

const Confirmation = () => {
    return ( 
        <div className="container">
          <h1>Tack för ditt köp</h1>
            <div className="row"> 
              <div className={`
              ${styles.confirmation}
              col-sm
              col-md-offset-2
              `}>                 
                <h3>Order number: 1275758489</h3>
                  <p>Delivery details</p>
                  
              </div>
              <div className={`
                ${styles.confirmation}
                mx-md-2
                col-sm
                col-md-offset-5
              `}>  
                <h3>Summary</h3>
                <p>Totalbelopp</p>
              </div>
                
                
            </div>
        </div>
  
     );
}
 
export default Confirmation;