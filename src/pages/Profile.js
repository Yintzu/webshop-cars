import ProfileInfo from '../components/ProfileInfo';
import ProfileCar from '../components/ProfileCar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styles from '../css/ProfilePage.module.css'

const Profile = () => {
const {loggedInUser} = useContext(UserContext);

  return (
    <div className={`
    ${styles.containerWrapper}
    container
  `}>
      {loggedInUser ?

        <div>
          <div className="row">
          <h3 className={styles.profileCarHeading}>My purchase history</h3>
            <div className="col col-sm-4">
              <ProfileInfo />
            </div>
            <div className="col
                col-sm-8">
              <ProfileCar />
            </div>
          </div>
        </div>

        : <div>Brb</div>}

    </div>
  );
}

export default Profile;