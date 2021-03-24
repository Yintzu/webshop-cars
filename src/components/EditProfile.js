import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';


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
            <h1>Edit Profile</h1>
            <form onSubmit={editHandler}>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <label htmlFor="changeFullName">Full Name:</label>
                        <input className="form-control" type="text" id="changeFullName" name="fullName" defaultValue={loggedInUser.fullName} />

                        <label htmlFor="changeSocialSecurityNumber">Social Security Number:</label>
                        <input className="form-control" type="text" id="changeSocialSecurityNumber" name="socialSecurityNumber" defaultValue={loggedInUser.socialSecurityNumber} />

                        <label htmlFor="changeUserName">Username:</label>
                        <input className="form-control" type="text" id="changeUsername" name="userName" defaultValue={loggedInUser.userName} />

                        <label htmlFor="changePhoneNumber">Phone Number:</label>
                        <input className="form-control" type="text" id="changePhoneNumber" name="phoneNumber" defaultValue={loggedInUser.phoneNumber} />
                    </div>

                    <div className="col-12 col-sm-6">
                        <label htmlFor="changeEmail">Email:</label>
                        <input className="form-control" type="text" id="changeEmail" name="email" defaultValue={loggedInUser.email} />

                        <label htmlFor="changeConfirmEmail">Confirm Email:</label>
                        <input className="form-control" type="text" id="changeConfirmEmail" name="confirmEmail" />

                        <label htmlFor="changePasssword">Password:</label>
                        <input className="form-control" type="text" id="changePassword" name="password" defaultValue={loggedInUser.password}/>

                        <label htmlFor="changeConfirmPassword">Confirm Password:</label>
                        <input className="form-control" type="text" id="changeConfirmPassword" name="confirmPassword" />
                    </div>
                </div>
                <button type="submit" className="button blue-button mx-2">Submit</button>
                <button type="button" className="button orange-button" onClick={backButton}>Back</button>
            </form>
        </div>
    );
}

export default EditProfile;