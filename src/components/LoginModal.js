import style from "../css/LoginModal.module.css"

const LoginModal = (props) => {
    return (
        <div className={`${style.cover}`} onClick={() => props.setShowLoginModal(false)}>
            <div className={`${style.loginDiv}`}>
                <h2 className={style.h2}>Log in</h2>
                <form>
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