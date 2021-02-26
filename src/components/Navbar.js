import { NavLink } from 'react-router-dom';
import style from '../css/Navbar.module.css';

const Navbar = () => {
    // numOfItemsInCart-varible will collect its data by checking the length of the cart-state in ShoppingCartContext
    let numOfItemsInCart = 1;

    return ( 
        <nav className={style.navbar}>
            <NavLink className={style.logo} exact to="/">A LOGO</NavLink>
            <div className={style.navLinks}>
                <NavLink className={style.links} activeClassName={style.active} exact to="/">Home</NavLink>
                <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
            </div> 
            <NavLink className={style.cartIcon} exact to="/checkout">
                    {/* numOfItems will be displayed based on cart-state length, if 0 it won't be displayed at all */}
                    { numOfItemsInCart > 0 ? <div className={style.cartNumber}>1</div> : ''}
                    <img className={style.img} src="./assets/icons/cart-icon.png"/>
            </NavLink>
        </nav>
     );
}
 
export default Navbar;