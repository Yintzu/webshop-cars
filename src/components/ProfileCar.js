import styles from '../css/ProfileCar.module.css'
import labrador_profile from './images/labrador_profile.jpg'

const ProfileCar = () => {
    return ( 
        <div>
           <div className={`
           ${styles.containerWrapper}
           `}>
           <h3 className={styles.profileCarHeading}>My purchase history</h3>
           <div className={`${styles.profileCarWrapper}`}>
           <img src="https://via.placeholder.com/100x50.png" alt="Profile picture" className={`${styles.profileImage} ${styles.gridItem1}`}/>
             <p className={`${styles.profileText} ${styles.gridItem2}`}>Ordernumber</p>
             <p className={`${styles.profileText} ${styles.gridItem3}`}>Time</p>
             <p className={`${styles.profileText} ${styles.gridItem4}`}>Car make</p>
             <p className={`${styles.profileText} ${styles.gridItem5}`}>Price</p>
           
         </div>
         </div>
        </div>
     );
}
 
export default ProfileCar;