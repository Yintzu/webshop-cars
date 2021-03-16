import style from "../css/CreateAccount.module.css"

const CreateAccount = () => {
    return (
        <div>
            <h1 className={style.h1}>Create new account</h1>
            <div className={`row ${style.spaceAround}`}>
                <div className={`col-12 col-sm-6 ${style.registerContainer}`}>
                    <label htmlFor="registerFullName">Full name</label>
                    <input className={`form-control`} type="text" id="registerFullName"></input>

                    <label htmlFor="registerPersonalNumber">Personal number</label>
                    <input className={`form-control`} type="text" id="registerPersonalNumber"></input>

                    <label htmlFor="registerUserName">User name</label>
                    <input className={`form-control`} type="text" id="registerUserName"></input>

                    <label htmlFor="registerPhone">Phone number</label>
                    <input className={`form-control`} type="text" id="registerPhone"></input>
                </div>
                <div className={`col-12 col-sm-6 ${style.registerContainer}`}>
                    <label htmlFor="registerEmail">E-mail address</label>
                    <input className={`form-control`} type="text" id="registerEmail"></input>

                    <label htmlFor="registerConfirmEmail">Confirm e-mail address</label>
                    <input className={`form-control`} type="text" id="registerConfirmEmail"></input>

                    <label htmlFor="registerPassword">Password</label>
                    <input className={`form-control`} type="text" id="registerPassword"></input>

                    <label htmlFor="registerConfirmPassword">Confirm password</label>
                    <input className={`form-control`} type="text" id="registerConfirmPassword"></input>
                </div>
            </div>

            <button className={`btn ${style.registerButton}`}>Register</button>
        </div>
    );
}

export default CreateAccount;