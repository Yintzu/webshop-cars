import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import style from "../css/CreateAccount.module.css"

const CreateAccount = () => {

    const { users, setUsers, setLoggedInUser } = useContext(UserContext);
    const history = useHistory();
    const [emailExists, setEmailExists] = useState(false);
    const [emailMismatch, setEmailMismatch] = useState(false);
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const registerHandler = (e) => {
        e.preventDefault();
        let inputList = document.querySelectorAll("input");
        let error = false;

        if (users.some((user) => user.email == inputList[4].value)) {
            inputList[4].classList.add(`${style.errorBorder}`);
            setEmailExists(true);
            error = true;
        }
        if (inputList[4].value !== inputList[5].value) {
            inputList[5].classList.add(`${style.errorBorder}`);
            setEmailMismatch(true);
            error = true;
        }
        if (inputList[6].value !== inputList[7].value) {
            inputList[7].classList.add(`${style.errorBorder}`);
            setPasswordMismatch(true);
            error = true;
        }
        if (error) {
            return
        }


        let newUserObject = {};

        inputList.forEach((input) => {
            if (input.name) {
                newUserObject[input.name] = input.value;
            }
        })
        setUsers([...users, newUserObject])
        setLoggedInUser(newUserObject)

        history.push("/profile")
    }

    const removeError = (e, setter) => {
        e.target.classList.remove(`${style.errorBorder}`)
        setter(false);
    }

    useEffect(() => {
        console.log(users);
    }, [users])

    return (
        <div>
            <h1 className={style.h1}>Create new account</h1>
            <form onSubmit={registerHandler}>
                <div className={`row ${style.spaceAround}`}>
                    <div className={`col-12 col-sm-6 ${style.registerContainer}`}>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerFullName">Full name</label>
                            <input className={`form-control`} type="text" id="registerFullName" name="fullName" required></input>
                        </div>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerPersonalNumber">Social security number</label>
                            <input className={`form-control`} type="text" id="registerPersonalNumber" name="personalNumber" required></input>
                        </div>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerUserName">User name</label>
                            <input className={`form-control`} type="text" id="registerUserName" name="userName" required></input>
                        </div>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerPhone">Phone number</label>
                            <input className={`form-control`} type="text" id="registerPhone" name="phoneNumber" required></input>
                        </div>
                    </div>
                    <div className={`col-12 col-sm-6 ${style.registerContainer}`}>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerEmail">E-mail address</label>
                            <input className={`form-control`} type="text" id="registerEmail" name="email" onChange={(e) => removeError(e, setEmailExists)} required></input>
                            {emailExists && <p className={`${style.errorText}`}>This e-mail address is already in use.</p>}
                        </div>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerConfirmEmail">Confirm e-mail address</label>
                            <input className={`form-control`} type="text" id="registerConfirmEmail" onChange={(e) => removeError(e, setEmailMismatch)} required></input>
                            {emailMismatch && <p className={`${style.errorText}`}>E-mail address does not match.</p>}
                        </div>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerPassword">Password</label>
                            <input className={`form-control`} type="password" id="registerPassword" name="password" required></input>
                        </div>
                        <div className={style.positionRelative}>
                            <label htmlFor="registerConfirmPassword">Confirm password</label>
                            <input className={`form-control`} type="password" id="registerConfirmPassword" onChange={(e) => removeError(e, setPasswordMismatch)} required></input>
                            {passwordMismatch && <p className={`${style.errorText}`}>Passwords does not match.</p>}
                        </div>
                    </div>
                </div>

                <button className={`btn ${style.registerButton}`}>Register</button>
            </form>
        </div>
    );
}

export default CreateAccount;