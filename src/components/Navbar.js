import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/Navbar.module.css';

const Navbar = () => {
    // Importing cart from ShoppingCartContext
    // Using its length in render of cart icon
    const { shoppingCartItems: cart } = useContext(ShoppingCartContext);

    return ( 
        <nav className={style.navbar}>
            <NavLink className={style.logo} exact to="/">A LOGO</NavLink>
            <div className={style.navLinks}>
                <NavLink className={style.links} activeClassName={style.active} exact to="/">Home</NavLink>
                <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
            </div> 
            <NavLink className={style.cartIcon} exact to="/checkout">
                    {/* numOfItems will be displayed based on cart-state length, if 0 it won't be displayed at all */}
                    { cart.length > 0 ? <div className={style.cartNumber}>{cart.length}</div> : ''}
                    <img className={style.img} src="./assets/icons/cart-icon.png"/>
            </NavLink>
        </nav>
     );
}
 
export default Navbar;