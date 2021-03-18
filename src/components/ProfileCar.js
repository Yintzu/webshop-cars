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
           <img src={labrador_profile} alt="Profile picture" className={`${styles.profileImage} ${styles.gridItem1}`}/>
             <h4 className={`${styles.profileCarSubHeading} ${styles.gridItem2}`}>Order number</h4>
             <h4 className={`${styles.profileCarSubHeading} ${styles.gridItem3}`}>Car make</h4>
             <p className={`${styles.profileText} ${styles.gridItem4}`}>Time</p>
             <p className={`${styles.profileText} ${styles.gridItem5}`}>Detail button?</p>
           
         </div>
         </div>
        </div>
     );
}
 
export default ProfileCar;