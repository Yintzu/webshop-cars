import ProfileInfo from '../components/ProfileInfo';
import ProfileCar from '../components/ProfileCar';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useState } from 'react';
import EditProfile from '../components/EditProfile';


const Profile = () => {
  const { loggedInUser, isClicked } = useContext(UserContext);

  return (
    <div className="container">
      {loggedInUser ?
        <div>
          <div className="row">
            <div className="col-5">
              <ProfileInfo />
            </div>
            <div className="col-6">
              {isClicked ? <EditProfile /> : <ProfileCar />}
            </div>
          </div>
        </div>

        : <div>Brb</div>}
    </div>

  );
}

export default Profile;