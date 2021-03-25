import { useContext, useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { UserContext } from '../contexts/UserContext';
import style from '../css/Navbar.module.css';
import LoginModal from './LoginModal';
import PopupCart from './PopupCart';

const Navbar = () => {
    // Importing cart from ShoppingCartContext
    // Using its length in render of cart icon
    const { shoppingCartItems: cart } = useContext(ShoppingCartContext);
    const {loggedInUser, showLoginModal, setShowLoginModal} = useContext(UserContext);
    const [onCartUpdate, setOnCartUpdate] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const history = useHistory();

    // Handle onMouseLeave event
    // Set timer to hide cart when mouse leave cart-icon
    let timer;
    const mouseLeaveHandler = () => {
        if (!matchMedia('(pointer:coarse)').matches) {
            timer = setTimeout(() => {
                setCartVisible(false);
            }, 500)
        } else {
            timer = setTimeout(() => {
                setCartVisible(false);
            }, 10)
        }
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
    // Will go to checkout on click if pointer is not coarse
    const cartClickHandler = () => {
        if (!matchMedia('(pointer:coarse)').matches) {
            history.push('/checkout');
        } else if (cartVisible) {
            setCartVisible(false);
        } else {
            setCartVisible(true);
            setMobileMenuOpen(false);
        }
    }

    // Open login modal if not logged in already
    const loginClickHandler = () => {
        if (!loggedInUser){
            setShowLoginModal(true);
        } else {
            console.log("you are already logged in");
        }
    }

    // Set mobile menu to opposite when clicked, open and close
    const handleHamburgerClick = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    // Hide cart if route changes
    useEffect(() => {
        history.listen(() => {
            clearTimeout(timer);
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

    return (
        <div className={style.navContainer}>
            {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal}/>}
            <nav className={style.navbar}>
                <div className={style.hamburgerClickBox} onClick={handleHamburgerClick} />
                <div className={style.hamburgerWrapper}>
                    <div className={`${style.hamburgerLine} ${mobileMenuOpen && style.openBurger}`} />
                </div>
                <div className={style.leftWrapper} onClick={() => history.push('/')}>
                    <img className={style.rrrrlogoImg} src="/assets/app-components/logo.gif" />
                    <img className={style.rrrrlogoText} src="/assets/app-components/logo-text.png" />
                </div>
                <div className={`${style.navLinks} ${mobileMenuOpen && style.slideIn}`} onClick={() => setMobileMenuOpen(false)}>
                    <NavLink className={style.links} activeClassName={style.active} exact to="/">Cars</NavLink>
                    <NavLink className={style.links} activeClassName={style.active} exact to="/about">About</NavLink>
                </div>
                <div className={style.iconsWrapper}>
                    <div onMouseOver={mouseOverHandler} onMouseLeave={mouseLeaveHandler} className={`${style.cartIconWrapper} ${cart.length && style.cartMoveDown}`} onClick={cartClickHandler}>
                        {/* Div with numbers will be displayed based on cart length, if 0 it won't be displayed at all */}
                        {cart.length > 0 && <div className={`${style.cartNumber} ${onCartUpdate && style.cartUpdate}`}><span className={style.cartNumSpan}>{cart.length}</span></div>}
                        <img className={style.img} src="/assets/icons/shopping-cart-web-empty.png" />
                    </div>
                    {cartVisible &&
                        <div className={style.popupWrapper}
                            onMouseEnter={() => clearTimeout(timer)}
                            onMouseLeave={() => setCartVisible(false)}>
                            <PopupCart />
                            <div className={style.cartShadow} />
                        </div>}
                    {!loggedInUser ? <span className={`${style.loginSpan}`} onClick={loginClickHandler}>Log in</span> : 
                    <div className={style.acctContact} onClick={()=>history.push("/profile")}>
                        <img className={style.acctContactImg} src="/assets/icons/account-contact-circle.png" />
                    </div>}
                </div>
            </nav>
            <aside className={style.infoBar}></aside>
        </div>
    );
}

export default Navbar;