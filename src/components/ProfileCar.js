import styles from '../css/ProfileCar.module.css'

const ProfileCar = () => {
    return ( 
        <div>
           <div className={`
           ${styles.containerWrapper}
           container
           `}>
           <div className={styles.profileWrapper}>
             <h3 className={styles.profileHeading}>My purchase history</h3>
             <h4 className={styles.profileSubHeading}>Order number</h4>
             <h4 className={styles.profileSubHeading}>Car make</h4>
             <div className={styles.profileTextBox}>
             <p className={styles.profileText}>Time and date of purchase</p>
             <p className={styles.profileText}>Description Lorem,   ipsum dolor sit amet consectetur adipisicing elit.</p>
             </div>
             
             </div>
         </div>
        </div>
     );
}
 
export default ProfileCar;