import { NavLink } from 'react-router-dom';
import { useState } from 'react';


const EditProfile = () => {
    return (
        <div>
            <h1>Edit Profile</h1>
            <form>
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <label htmlFor="changeFullName">Full Name:</label>
                        <input className="form-control" type="text" id="changeFullName" name="fullName" />

                        <label htmlFor="changeSocialSecurityNumber">Social Security Number:</label>
                        <input className="form-control" type="text" id="changeSocialSecurityNumber" name="socialSecurityNumber" />

                        <label htmlFor="changeUserName">Username:</label>
                        <input className="form-control" type="text" id="changeUsername" name="userName" />

                        <label htmlFor="changePhoneNumber">Phone Number:</label>
                        <input className="form-control" type="text" id="changePhoneNumber" name="phoneNumber" />
                    </div>

                    <div className="col-12 col-sm-6">
                        <label htmlFor="changeEmail">Email:</label>
                        <input className="form-control" type="text" id="changeEmail" name="email" />

                        <label htmlFor="changeConfirmEmail">Confirm Email:</label>
                        <input className="form-control" type="text" id="changeConfirmEmail" name="confirmEmail" />

                        <label htmlFor="changePasssword">Password:</label>
                        <input className="form-control" type="text" id="changePassword" name="password" />

                        <label htmlFor="changeConfirmPassword">Confirm Password:</label>
                        <input className="form-control" type="text" id="changeConfirmPassword" name="confirmPassword" />
                    </div>
                </div>


                <button type="button" className="btn btn-primary">Submit</button>
                <NavLink exact to="/profile">
                    <button type="button" className="btn btn-dark">Back</button>
                </NavLink>
            </form>
        </div>
    );
}

export default EditProfile;