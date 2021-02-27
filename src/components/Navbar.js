import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/Navbar.module.css';

const Navbar = () => {
    // Importing cart from ShoppingCartContext
    // Using its length in render of cart icon
    const { shoppingCartItems: cart, createTimeStamp, cartTotal } = useContext(ShoppingCartContext);
    const [onCartUpdate, setOnCartUpdate] = useState(false);

    // On change in cart, set onCartUpdate to true and then back to false after a short duration
    // While true, the div in render will have a css-class with animation
    useEffect(() => {
        setOnCartUpdate(true);
        setTimeout(() => {
            setOnCartUpdate(false);
        }, 400)
    }, [cart])

    return ( 
        <div className={style.navContainer}>
            <nav className={style.navbar}>
                <NavLink className={style.logo} exact to="/">A LOGO</NavLink>
                <div className={style.navLinks}>
                    <NavLink className={style.links} activeClassName={style.active} exact to="/">Home</NavLink>
                    <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
                </div> 
                <NavLink className={style.cartIcon} exact to="/checkout">
                        {/* Div with numbers will be displayed based on cart length, if 0 it won't be displayed at all */}
                        { cart.length > 0 ? <div className={`${style.cartNumber} ${onCartUpdate ? style.cartUpdate : ''}`}><span>{cart.length}</span></div> : ''}
                        <img className={style.img} src="./assets/icons/cart-icon.png"/>
                </NavLink>
            </nav>
            <div className={style.infoBar}>
                <div className={style.dateTime}>
                    <span>This is only a test: </span>
                    <span>{`${createTimeStamp()[2]} ${createTimeStamp()[0]}`}</span>
                </div>
                <span>{cartTotal}</span>
            </div>
        </div>
     );
}
 
export default Navbar;