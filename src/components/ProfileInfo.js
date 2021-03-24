import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import styles from '../css/ProfileInfo.module.css'
import labrador_profile from './images/labrador_profile.jpg'

const ProfileInfo = () => {
  const { loggedInUser, setLoggedInUser, isClicked, setIsClicked } = useContext(UserContext);
  const history = useHistory();

  /*   {if(!loggedInUser){
      return <div></div>
    }} */

  const logOutHandler = () => {
    history.push("/");
    setLoggedInUser(null)
    localStorage.setItem('loggedInUser', null)
  }

  useEffect(() => {
    console.log("logged in user:");
    console.log(loggedInUser);
  }, [loggedInUser])



  return (
    <div>
      
      <div className={styles.profileWrapper}>
        <img src={`./assets/profilepics/Profile${loggedInUser.pic}`} alt="Profile picture" className={styles.profileImage} />
        <h3 className={styles.profileHeading}>{loggedInUser.fullName}</h3>
        {/* <h4 className={styles.profileSubHeading}>City, Country</h4> */}
        <div className={styles.profileTextBox}>
          
          {/* <p className={styles.profileText}>Age: 35</p> */}
          <p className={styles.profileText}>Telephone: {loggedInUser.phoneNumber}</p>
          <p className={styles.profileText}>E-mail: {loggedInUser.email}</p>
          <button className="button blue-button" onClick={() => setIsClicked(!isClicked)}>
            Edit profile
          </button>
          <button className={`button orange-button ${styles.logOutButton}`} onClick={logOutHandler}>
            Log out
          </button>
        </div>

      </div>
    </div>

  );
}

export default ProfileInfo;

/* https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80 */