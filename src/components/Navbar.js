import { NavLink } from 'react-router-dom';
import style from '../css/Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={style.navbar}>
            <NavLink className={style.logo} exact to="/">A LOGO</NavLink>
            <div className={style.navLinks}>
                <NavLink className={style.links} activeClassName={style.active} exact to="/">Home</NavLink>
                <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
            </div> 
            <NavLink className={style.cartIcon} exact to="/checkout">CART</NavLink>
        </nav>
     );
}
 
export default Navbar;