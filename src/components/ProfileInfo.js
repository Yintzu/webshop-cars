import styles from '../css/ProfileInfo.module.css'
import labrador_profile from './images/labrador_profile.jpg'

const ProfileInfo = () => {
    return ( 
    <div className={`
           ${styles.containerWrapper}
           container
           `}>
           <div className={styles.profileWrapper}>
             <img src={labrador_profile} alt="Profile picture"   className={styles.profileImage}/>
             <h3 className={styles.profileHeading}>Profile name</h3>
             <h4 className={styles.profileSubHeading}>City, Country</h4>
             <div className={styles.profileTextBox}>
             <p className={styles.profileText}>Description Lorem,   ipsum dolor sit amet consectetur adipisicing elit.</p>
               <p className={styles.profileText}>Age: 35</p>
               <p className={styles.profileText}>Telephone: 7070-234789</p>
               <p className={styles.profileText}>E-mail: doggy@doggyson.com</p>
               <button className={`
               ${styles.profileButton}
               btn
               `} type="submit">Edit profile</button>
             </div>
             
             </div>
         </div>
        
    );
}
 
export default ProfileInfo;

/* https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80 */