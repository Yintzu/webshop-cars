import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import style from "../css/CreateAccount.module.css"

const CreateAccount = () => {

    const {users, setUsers} = useContext(UserContext);

    const registerHandler = (e) => {
        e.preventDefault();
        let inputList = document.querySelectorAll("input");
        let newUserObject = {};

        inputList.forEach((input)=>{
            if (input.name){
                newUserObject[input.name] = input.value;
            }
        })

        setUsers([...users, newUserObject])
    }

/*     useEffect(()=>{
        console.log(users);
    },[users]) */

    return (
        <div>
            <h1 className={style.h1}>Create new account</h1>
            <form onSubmit={registerHandler}>
                <div className={`row ${style.spaceAround}`}>
                    <div className={`col-12 col-sm-6 ${style.registerContainer}`}>
                        <label htmlFor="registerFullName">Full name</label>
                        <input className={`form-control`} type="text" id="registerFullName" name="fullName"></input>

                        <label htmlFor="registerPersonalNumber">Personal number</label>
                        <input className={`form-control`} type="text" id="registerPersonalNumber" name="personalNumber"></input>

                        <label htmlFor="registerUserName">User name</label>
                        <input className={`form-control`} type="text" id="registerUserName" name="userName"></input>

                        <label htmlFor="registerPhone">Phone number</label>
                        <input className={`form-control`} type="text" id="registerPhone" name="phoneNumber"></input>
                    </div>
                    <div className={`col-12 col-sm-6 ${style.registerContainer}`}>
                        <label htmlFor="registerEmail">E-mail address</label>
                        <input className={`form-control`} type="text" id="registerEmail" name="email"></input>

                        <label htmlFor="registerConfirmEmail">Confirm e-mail address</label>
                        <input className={`form-control`} type="text" id="registerConfirmEmail"></input>

                        <label htmlFor="registerPassword">Password</label>
                        <input className={`form-control`} type="text" id="registerPassword" name="password"></input>

                        <label htmlFor="registerConfirmPassword">Confirm password</label>
                        <input className={`form-control`} type="text" id="registerConfirmPassword"></input>
                    </div>
                </div>

                <button className={`btn ${style.registerButton}`}>Register</button>
            </form>
        </div>
    );
}

export default CreateAccount;