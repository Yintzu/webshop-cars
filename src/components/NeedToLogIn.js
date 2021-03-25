import style from '../css/NoPurchases.module.css';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const NeedToLogIn = () => {

    const { setShowLoginModal } = useContext(UserContext);

    return (
        <div className={style.noPurchases}>
            <div>
                <h4 className="mb-3">You need to log in first</h4>
                <p className="mb-4">Placing an order requires you to log in.</p>
                <button className="button blue-button" onClick={() => setShowLoginModal(true)}>Log in</button>
                <NavLink exact to={"/"} className={style.link}>
                    <p className={style.link}>Or click here to create a new account.</p>
                </NavLink>
            </div>
        </div>
    );
}

export default NeedToLogIn;