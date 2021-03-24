import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import style from '../css/EditProfile.module.css';


const EditProfile = () => {
    const { setIsClicked, loggedInUser, profilePics } = useContext(UserContext)

    const [emailMismatch, setEmailMismatch] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [thumbnailClickState, setThumbnailClickState] = useState(profilePics.indexOf(loggedInUser.pic));

    const backButton = (e) => {
        e.preventDefault();
        setIsClicked(false)
    }

    const editHandler = (e) => {
        e.preventDefault();
        const editProfileInputList = document.querySelectorAll("input");
        let error = false;

        if (editProfileInputList[2].value !== editProfileInputList[3].value) {
            editProfileInputList[3].classList.add(`${style.errorBorder}`);
            setEmailMismatch(true);
            error = true;
        }
        if (editProfileInputList[4].value !== editProfileInputList[5].value) {
            editProfileInputList[5].classList.add(`${style.errorBorder}`);
            setPasswordMismatch(true);
            error = true;
        }
        if (error) return

        editProfileInputList.forEach(element => {
            loggedInUser[element.name] = element.value;
        })
        loggedInUser.pic = profilePics[thumbnailClickState]
        setIsClicked(false);
    }

    const removeError = (e, setter) => {
        e.target.classList.remove(`${style.errorBorder}`)
        setter(false);
    }

    const thumbnailClick = (index) => {
        setThumbnailClickState(index)
        const thumbnailList = document.querySelectorAll(".thumbnail")
        thumbnailList.forEach(item => item.classList.remove(`${style.selectedThumbnail}`))
        thumbnailList[index].classList.add(`${style.selectedThumbnail}`)
    }

    return (
        <div>
            <h1 className={style.changeHeading}>Edit Profile</h1>
            <form onSubmit={editHandler}>
                <div className={`row ${style.changeForm}`}>
                    <div className={`col-12 col-md-6 ${style.changeContainer}`}>
                        <label htmlFor="changeFullName" className={style.changeText}>Full Name:</label>
                        <input className="form-control" type="text" id="changeFullName" name="fullName" defaultValue={loggedInUser.fullName} />

                        <label htmlFor="changePhoneNumber" className={style.changeText}>Phone Number:</label>
                        <input className="form-control" type="text" id="changePhoneNumber" name="phoneNumber" defaultValue={loggedInUser.phoneNumber} />
                  
                        <label htmlFor="changeEmail" className={style.changeText}>Email:</label>
                        <input className="form-control" type="text" id="changeEmail" name="email" defaultValue={loggedInUser.email} />
                    </div>

                    <div className={`col-12 col-md-6 ${style.changeContainer}`}>
                        <div className={style.inputDiv}>
                            <label htmlFor="changeConfirmEmail" className={style.changeText}>Confirm Email Address:</label>
                            <input className="form-control" type="text" id="changeConfirmEmail" name="confirmEmail" defaultValue={loggedInUser.email} onChange={(e) => removeError(e, setEmailMismatch)} />
                            {emailMismatch && <p className={style.errorText}>E-mail does not match</p>}
                        </div>

                        <label htmlFor="changePasssword" className={style.changeText}>Password:</label>
                        <input className="form-control" type="text" id="changePassword" name="password" defaultValue={loggedInUser.password} />

                        <div className={style.inputDiv}>
                            <label htmlFor="changeConfirmPassword" className={style.changeText}>Confirm Password:</label>
                            <input className="form-control" type="text" id="changeConfirmPassword" name="confirmPassword" defaultValue={loggedInUser.password} onChange={(e) => removeError(e, setPasswordMismatch)} />
                            {passwordMismatch && <p className={style.errorText}>Password does not match</p>}
                        </div>
                    </div>

                    <h2 className={style.h2}>Choose profile picture</h2>
                    <div className={`row ${style.pictureGrid}`}>
                        {profilePics.map((pic, index) =>
                            <div className={style.gridItem} key={index}>
                                <img className={`thumbnail ${style.thumbnail}`} src={`./assets/profilepics/Profile${pic}`} onClick={() => thumbnailClick(index)} />
                            </div>
                        )}
                    </div>

                    <div className={style.changeButtons}>
                        <button type="submit" className={`btn ${style.changeSubmitBtn}`}>Submit</button>
                        <button type="button" className={`btn ${style.changeBackBtn}`} onClick={backButton}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditProfile;