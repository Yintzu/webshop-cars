import ProfileInfo from '../components/ProfileInfo';
import ProfileCar from '../components/ProfileCar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const Profile = () => {
const {loggedInUser} = useContext(UserContext);

  return (
    <div className="container">
      {loggedInUser ?

        <div>
          <div className="row">
            <div className="col-5">
              <ProfileInfo />
            </div>
            <div className="col-6">
              <ProfileCar />
            </div>
          </div>
        </div>

        : <div>Brb</div>}

    </div>
  );
}

export default Profile;