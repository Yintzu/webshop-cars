import style from '../css/NoPurchases.module.css';
import { NavLink } from "react-router-dom";

const NoPurchases = () => {
    return ( 
        <div className={style.noPurchases}>
            <div>
                <img src="/assets/app-components/logo.gif" alt="car logo"/>
                <h4>No purchase history</h4>
                <p>You have not purchased any cars yet. <br/> Explore our great car deals and check back here after your next shopping trip.</p>
                <NavLink exact to="/">
                    <button className="btn">Explore our great deals!</button>
                </NavLink>
                </div>
        </div>
     );
}
 
export default NoPurchases;