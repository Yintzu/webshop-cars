import { useContext } from "react"
import { NavLink } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"
import style from "../css/LoginModal.module.css"

const LoginModal = (props) => {
    const { users, setLoggedInUser } = useContext(UserContext);

    const closeModal = (e) => {
        if (e.target.id === "modalBackground" || e.target.classList.contains("closeButton")) {
            props.setShowLoginModal(false)
        }
    }

    const loginHandler = (e) => {
        e.preventDefault()
        let loginEmail = document.getElementById("loginEmail").value;
        let loginPassword = document.getElementById("loginPassword").value;
        let foundUser = users.find(user => user.email == loginEmail)
        if (!foundUser){
            console.log("user does not exist");
        } else if (foundUser.password === loginPassword){
            console.log("info matches. logging in");
            setLoggedInUser(foundUser)
            props.setShowLoginModal(false)
        } else {
            console.log("wrong password");
        }
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
                        <input type="text" className={`form-control ${style.input}`} id="loginEmail" required></input>
                    </div>
                    <div className={`${style.inputDiv}`}>
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" className={`form-control ${style.input}`} id="loginPassword" required></input>
                    </div>
                    <button className={`btn ${style.button}`}>Log in</button>
                </form>
                <NavLink exact to="/register" className={`${style.a}`} onClick={()=>props.setShowLoginModal(false)}>Click here to register a new account</NavLink>
            </div>
        </div>
    );
}

export default LoginModal;