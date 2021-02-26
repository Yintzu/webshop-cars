import { NavLink } from 'react-router-dom';
import style from '../css/Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={style.navbar}>
            <NavLink exact to="/">A LOGO</NavLink>
            <div className={style.navLinks} activeClassName={style.active}>
                <NavLink exact to="/">Home</NavLink>
                <NavLink exact to="/about">About</NavLink>
            </div> 
            <NavLink className={style.cartIcon} exact to="/checkout">CART</NavLink>
        </nav>
     );
}
 
export default Navbar;