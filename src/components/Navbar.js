import { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import style from '../css/Navbar.module.css';
import PopupCart from './PopupCart';

const Navbar = () => {
    // Importing cart from ShoppingCartContext
    // Using its length in render of cart icon
    const { shoppingCartItems: cart, createTimeStamp, cartTotal, formatSum } = useContext(ShoppingCartContext);
    const [onCartUpdate, setOnCartUpdate] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const history = useHistory();

    let timer;
    const mouseLeaveHandler = () => {
        timer = setTimeout(() => {
            setCartVisible(false);
        }, 500)
    }

    const mouseOverHandler = () => {
        if (!matchMedia('(pointer:coarse)').matches) {
            if (timer) {
                clearTimeout(timer)
            };
            setCartVisible(true);
        }   
    }

    const cartClickHandler = () => {
        if (!matchMedia('(pointer:coarse)').matches) {
            history.push('/checkout');
        } else if (cartVisible) {
            setCartVisible(false);
        }  else if (!cartVisible) {
            setCartVisible(true);
        }
    }

    // On change in cart, set onCartUpdate to true and then back to false after a short duration
    // While true, the div in render will have a css-class with animation
    useEffect(() => {
        setOnCartUpdate(true);
        setTimeout(() => {
            setOnCartUpdate(false);
        }, 400)
    }, [cart])

    let itemS = cart.length === 1 ? 'item' : 'items';

    return ( 
        <div className={style.navContainer}>
            <nav className={style.navbar}>
                <div className={style.leftWrapper}>
                    <NavLink className={style.rrrrlogo} exact to="/"><img className={style.rrrrlogoImg} src="./assets/app-components/webshop-logo.png"/></NavLink>
                    <div className={style.navLinks}>
                        <NavLink className={style.links} activeClassName={style.active} exact to="/">Home</NavLink>
                        <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
                        <NavLink className={style.links} activeClassName={style.active} exact to="/testpage">Test</NavLink>
                    </div> 
                </div>
                    <div className={style.iconsWrapper}>
                    <div onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler} className={style.cartIconWrapper} onClick={cartClickHandler}>
                            {/* Div with numbers will be displayed based on cart length, if 0 it won't be displayed at all */}
                            { cart.length > 0 ? <div className={`${style.cartNumber} ${onCartUpdate ? style.cartUpdate : ''}`}><span>{cart.length}</span></div> : ''}
                            <img className={style.img} src="./assets/icons/shopping-cart-web.png"/>
                    </div>
                    { cartVisible ? 
                        <div className={style.popupWrapper}
                            onMouseEnter={() => clearTimeout(timer)}
                            onMouseLeave={() => setCartVisible(false)}>
                            <PopupCart />
                        </div> 
                        : ''}
                    <NavLink className={ style.acctContact} exact to="/">
                    <img className={style.acctContactImg} src="./assets/icons/account-contact-circle.png"/>
                    </NavLink>
                    </div>
            </nav>
            <div className={style.infoBar}>
                <div className={style.dateTime}>
                    <span>This is only a test: </span>
                    <span>{`${createTimeStamp()[2]} ${createTimeStamp()[0]}`}</span>
                </div>
                <span className={style.totalSum}>
                    {`${cart.length} ${itemS} in cart: ${formatSum(cartTotal)}`}
                </span>
            </div>
        </div>
     );
}
 
export default Navbar;