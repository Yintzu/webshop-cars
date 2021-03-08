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

    // Handle onMouseLeave event
    // Set timer to hide cart when mouse leave cart-icon
    let timer;
    const mouseLeaveHandler = () => {
        timer = setTimeout(() => {
            setCartVisible(false);
        }, 500)
    }

    // Clear timer to close cart if mouse enters cart div
    // Only if pointer is not coarse
    const mouseOverHandler = () => {
        if (!matchMedia('(pointer:coarse)').matches) {
            if (timer) {
                clearTimeout(timer)
            };
            setCartVisible(true);
        }
    }

    // Handle cart visibility on click of cart icon
    // Will show cart on click on touch screen
    // Will go to checkout on click of pointer is not coarse
    const cartClickHandler = () => {
        if (!matchMedia('(pointer:coarse)').matches) {
            history.push('/checkout');
        } else if (cartVisible) {
            setCartVisible(false);
        } else if (!cartVisible) {
            setCartVisible(true);
        }
    }

    // Hide cart if route changes
    useEffect(() => {
        history.listen(() => {
            setCartVisible(false);
        })
    }, [history]);

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
                    <NavLink className={style.rrrrlogo} exact to="/">
                        <img className={style.rrrrlogoImg} src="/assets/app-components/logo.gif" />
                        <img className={style.rrrrlogoImg} src="/assets/app-components/logo-text.png" />
                    </NavLink>
                    <div className={style.navLinks}>
                        <NavLink className={style.links} activeClassName={style.active} exact to="/">Home</NavLink>
                        <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
                        <NavLink className={style.links} activeClassName={style.active} exact to="/testpage">Test</NavLink>
                    </div>
                </div>
                <div className={style.iconsWrapper}>
                    <div onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler} className={style.cartIconWrapper} onClick={cartClickHandler}>
                        {/* Div with numbers will be displayed based on cart length, if 0 it won't be displayed at all */}
                        {cart.length > 0 ? <div className={`${style.cartNumber} ${onCartUpdate ? style.cartUpdate : ''}`}><span>{cart.length}</span></div> : ''}
                        <img className={style.img} src="/assets/icons/shopping-cart-web.png" />
                    </div>
                    {cartVisible ?
                        <div className={style.popupWrapper}
                            onMouseEnter={() => clearTimeout(timer)}
                            onMouseLeave={() => setCartVisible(false)}>
                            <PopupCart />
                        </div>
                        : ''}
                    <NavLink className={style.acctContact} exact to="/">
                        <img className={style.acctContactImg} src="/assets/icons/account-contact-circle.png" />
                    </NavLink>
                </div>
            </nav>
            <aside className={style.infoBar}>
                <div className={style.dateTime}>
                    {/* <span>This is only a test: </span>
                    <span>{`${createTimeStamp()[2]} ${createTimeStamp()[0]}`}</span> */}
                </div>
                <span className={style.totalSum}>
                    {/* {`${cart.length} ${itemS} in cart: ${formatSum(cartTotal)}`} */}
                </span>
            </aside>
        </div>
    );
}

export default Navbar;