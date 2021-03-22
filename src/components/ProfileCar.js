import styles from '../css/ProfileCar.module.css'
import labrador_profile from './images/labrador_profile.jpg'

const ProfileCar = () => {
    return ( 
        <div>
           <div className={`
           ${styles.containerWrapper}
           container
           `}>
           <h3 className={styles.profileCarHeading}>My purchase history</h3>
           <div className={styles.profileCarWrapper}>
           <img src={labrador_profile} alt="Profile picture"   className={styles.profileImage}/>
             <h4 className={styles.profileCarSubHeading}>Order number</h4>
             <h4 className={styles.profileCarSubHeading}>Car make</h4>
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