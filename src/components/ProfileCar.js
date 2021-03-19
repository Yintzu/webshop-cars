import styles from '../css/ProfileCar.module.css'
import labrador_profile from './images/labrador_profile.jpg'

const ProfileCar = () => {
    return ( 
        <div className={`
        ${styles.wrapper}
        `}>
           <p className={`${styles.profileCarSubHeading}`}>Ordernumber</p>
             <p className={`${styles.profileCarSubheading}`}>Date/Time</p>
           <div className={`
           ${styles.containerCarWrapper}
           `}>
           <div className={`${styles.profileCarWrapper}`}>
           <img src="https://via.placeholder.com/100x50.png" alt="Profile picture" className={`${styles.profileImage} ${styles.gridItem1}`}/>
          
             <p className={`${styles.profileText} ${styles.gridItem2}`}>Car make</p>
             <p className={`${styles.profileText} ${styles.gridItem3}`}>Price</p>
             <p className={`${styles.profileText} ${styles.gridItem4}`}>Year</p>
             {/* <p className={`${styles.profileText} ${styles.gridItem5}`}>Car make</p> */}
           
         </div>
         </div>
         <p className={`${styles.profileCarSubheading}`}>Total price</p>
         <button type="button"
            className={`
                     ${styles.infoButton}
                     btn 
                     btn-info`}
          >Print</button>
        </div>
     );
}
 
export default ProfileCar;