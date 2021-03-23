import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import style from '../css/EditProfile.module.css';


const EditProfile = () => {
    const { setIsClicked, loggedInUser } = useContext(UserContext)

    const backButton = (e) => {
        e.preventDefault();
        setIsClicked(false)
    }

    const editHandler = (e) => {
        e.preventDefault();
        console.log("submitting");
        const editProfileInputList = document.querySelectorAll("input");
        editProfileInputList.forEach(element => {
            loggedInUser[element.name] = element.value;
        })
        setIsClicked(false);
    }

    return (
        <div>
            <h1 className={style.changeHeading}>Edit Profile</h1>
            <form onSubmit={editHandler}>
                <div className={`row ${style.changeForm}`}>
                    <div className={`col-12 col-sm-6 ${style.changeContainer}`}>
                        <label htmlFor="changeFullName" className={style.changeText}>Full Name:</label>
                        <input className="form-control" type="text" id="changeFullName" name="fullName" defaultValue={loggedInUser.fullName} />

                        <label htmlFor="changeSocialSecurityNumber" className={style.changeText}>SSN:</label>
                        <input className="form-control" type="text" id="changeSocialSecurityNumber" name="socialSecurityNumber" defaultValue={loggedInUser.socialSecurityNumber} />

                        <label htmlFor="changeUserName" className={style.changeText}>Username:</label>
                        <input className="form-control" type="text" id="changeUsername" name="userName" defaultValue={loggedInUser.userName} />

                        <label htmlFor="changePhoneNumber" className={style.changeText}>Phone Number:</label>
                        <input className="form-control" type="text" id="changePhoneNumber" name="phoneNumber" defaultValue={loggedInUser.phoneNumber} />
                    </div>

                    <div className={`col-12 col-sm-6 ${style.changeContainer}`}>
                        <label htmlFor="changeEmail" className={style.changeText}>Email:</label>
                        <input className="form-control" type="text" id="changeEmail" name="email" defaultValue={loggedInUser.email} />

                        <label htmlFor="changeConfirmEmail" className={style.changeText}>Confirm Email:</label>
                        <input className="form-control" type="text" id="changeConfirmEmail" name="confirmEmail" />

                        <label htmlFor="changePasssword" className={style.changeText}>Password:</label>
                        <input className="form-control" type="text" id="changePassword" name="password" defaultValue={loggedInUser.password}/>

                        <label htmlFor="changeConfirmPassword" className={style.changeText}>Confirm Password:</label>
                        <input className="form-control" type="text" id="changeConfirmPassword" name="confirmPassword" />
                    </div>
                </div>

                <div className={style.changeButtons}> 
                <button type="submit" className={`btn ${style.changeSubmitBtn}`}>Submit</button>
                <button type="button" className={`btn ${style.changeBackBtn}`} onClick={backButton}>Back</button>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;