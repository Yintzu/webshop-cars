import { NavLink } from 'react-router-dom';
import style from '../css/Navbar.module.css';

const Navbar = () => {
    return ( 
        <nav className={style.navbar}>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
        </nav>
     );
}
 
export default Navbar;