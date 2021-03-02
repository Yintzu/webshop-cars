import style from '../css/Footer.module.css';
import { NavLink } from 'react-router-dom';


const Footer = () => {
    return ( 
        <div className={style.footer}>
            <div>
                <NavLink className={style.navlink} to="/About">About us</NavLink> 
                <address>
                    <p>Contact us:</p>
                    <a href="mailto:example@email.com" className={style.link}>example@email.com</a> 
                    <p>Drottninggatan 4B <br/> 212 11 <br/> Malmö </p>
                </address>
            </div>
            <div className={style.socialmedia}>
                <a href="https://www.facebook.com/"><img src="./assets/icons/facebook.png" alt="facebook"/></a>
                <a href="https://www.instagram.com/"><img src="./assets/icons/instagram.png" alt="instagram"/></a>
                <a href="https://www.twitter.com/"><img src="./assets/icons/twitter.png" alt="twitter"/></a>
            </div>
        </div>
     );
}
 
export default Footer;