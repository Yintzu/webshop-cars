import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import style from "../css/LoginModal.module.css"

const LoginModal = (props) => {
    const { users } = useContext(UserContext);

    const closeModal = (e) => {
        if (e.target.id === "modalBackground") {
            props.setShowLoginModal(false)
        }
    }

    const loginHandler = (e) => {
        e.preventDefault()
        let loginEmail = document.getElementById("loginEmail").value;
        let loginPassword = document.getElementById("loginPassword").value;
        users.find(user => user.email == loginEmail)
        console.log(users.find(user => user.email == loginEmail));
    }

    return (
        <div className={`${style.cover}`} id="modalBackground" onClick={closeModal}>
            <div className={`${style.loginDiv}`}>
                <h2 className={style.h2}>Log in</h2>
                <form onSubmit={loginHandler}>
                    <div className={`${style.inputDiv}`}>
                        <label htmlFor="loginEmail">E-mail</label>
                        <input type="text" className={`form-control ${style.input}`} id="loginEmail"></input>
                    </div>
                    <div className={`${style.inputDiv}`}>
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" className={`form-control ${style.input}`} id="loginPassword"></input>
                    </div>
                    <button className={`btn ${style.button}`}>Log in</button>
                </form>
                <p className={`${style.p}`}>Click here to register a new account</p>
            </div>
        </div>
    );
}

export default LoginModal;