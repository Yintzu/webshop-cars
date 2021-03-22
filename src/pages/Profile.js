import ProfileInfo from '../components/ProfileInfo';
import ProfileCar from '../components/ProfileCar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import styles from '../css/ProfilePage.module.css'

const Profile = () => {
const {loggedInUser} = useContext(UserContext);
const history = useHistory();

  return (
    <div className={`
    ${styles.containerWrapper}
    container
  `}>
      {loggedInUser ?

        <div>
          <div className="row">
            <div className="col col-sm-4">
              <ProfileInfo />
            </div>
            <div className="col
                col-sm-8">
              <ProfileCar />
            </div>
          </div>
        </div>

        : history.push("/")}

    </div>
  );
}

export default Profile;