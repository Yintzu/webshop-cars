import style from '../css/Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return ( 
        <div className={style.footer}>
            <div className={style.container}>
                <NavLink className={style.navlink} to="/About">About us</NavLink> 
                <address>
                    <p>Contact us:</p>
                    <a href="mailto:example@email.com" className={style.link}>example@email.com</a> 
                    <p>Drottninggatan 4B <br/> 212 11 <br/> Malmö </p>
                </address>
            </div>
        </div>
     );
}
 
export default Footer;