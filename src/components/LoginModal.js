import { useContext, useState } from "react"
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"
import style from "../css/LoginModal.module.css"

const LoginModal = (props) => {
    const { users, setLoggedInUser } = useContext(UserContext);
    const [userNotFound, setUserNotFound] = useState(false);
    const [wrongPassword, setWrongPassword] = useState(false);

    const closeModal = (e) => {
        if (e.target.id === "modalBackground" || e.target.classList.contains("closeButton")) {
            props.setShowLoginModal(false)
        }
    }

    const loginHandler = (e) => {
        e.preventDefault()
        let loginEmail = document.getElementById("loginEmail");
        let loginPassword = document.getElementById("loginPassword");
        let foundUser = users.find(user => user.email == loginEmail.value)
        if (!foundUser){
            setUserNotFound(true);
            loginEmail.classList.add(`${style.errorBorder}`)
        } else if (foundUser.password === loginPassword.value){
            setLoggedInUser(foundUser)
            props.setShowLoginModal(false)
        } else {
            setWrongPassword(true);
            loginPassword.classList.add(`${style.errorBorder}`)
        }
    }

    const removeError = (e, setter) => {
        e.target.classList.remove(`${style.errorBorder}`)
        setter(false);
    }

    return (
        <div className={`${style.cover}`} id="modalBackground" onClick={closeModal}>
            <div className={`${style.loginDiv}`}>
                <div className={`${style.closeButton} closeButton`}>
                    <div className={`${style.xbar1} closeButton`}></div>
                    <div className={`${style.xbar2} closeButton`}></div>
                </div>
                <h2 className={style.h2}>Log in</h2>
                <form onSubmit={loginHandler}>
                    <div className={`${style.inputDiv}`}>
                        <label htmlFor="loginEmail">E-mail</label>
                        <input type="text" className={`form-control ${style.input}`} id="loginEmail" onChange={(e)=>removeError(e, setUserNotFound)} required></input>
                        {userNotFound && <p className={style.errorText}>E-mail does not match any user</p>}
                    </div>
                    <div className={`${style.inputDiv}`}>
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" className={`form-control ${style.input}`} id="loginPassword" onChange={(e)=>removeError(e, setWrongPassword)} required></input>
                        {wrongPassword && <p className={style.errorText}>Wrong password</p>}
                    </div>
                    <button className={`button blue-button ${style.button}`}>Log in</button>
                </form>
                <NavLink exact to="/register" className={`${style.a}`} onClick={()=>props.setShowLoginModal(false)}>Click here to register a new account</NavLink>
            </div>
        </div>
    );
}

export default LoginModal;