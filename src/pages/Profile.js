import ProfileInfo from '../components/ProfileInfo';
import ProfileCar from '../components/ProfileCar';

const Profile = () => {
    return ( 
        <div className="container">
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
            
        </div>
     );
}
 
export default Profile;