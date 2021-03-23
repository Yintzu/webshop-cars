import ProfileInfo from '../components/ProfileInfo';
import ProfileCar from '../components/ProfileCar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import styles from '../css/ProfilePage.module.css'
import EditProfile from '../components/EditProfile';


const Profile = () => {
  const { loggedInUser, isClicked } = useContext(UserContext);
  const history = useHistory();

  return (
    <div className={`${styles.containerWrapper}`}>
      {loggedInUser ?
        <div>
          <div className={styles.flexItem1}>
            
              <ProfileInfo />
            </div>
            <div className={styles.flexItem2}>
              {isClicked ? <EditProfile /> : <ProfileCar />}
            </div>
          </div>
        
        : history.push("/")}
    </div>
  );
}

export default Profile;