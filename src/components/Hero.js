import style from '../css/Hero.module.css';
import Carousel from './DiscountCarousel.js';
import Salesign from "../components/Salesign"

const Hero = () => {


    return (
        <div className={style.hero}>
            <div className={`${style.heroCenterDiv} ${style.flexCenter}`}>
                <div className={`row ${style.flexCenter}`}>
                    <div className={`col-11 col-md-4`}>
                        <h1 className={`${style.h1} text-center`}>Welcome to the most reliable car shop</h1>
                        <p className={`${style.p}`}>A car is special. It reflects who you are. Here on Richard Ryan's Reliable Rides we offer you realiable vessels that will last many years and accompany you through life's many adventures.</p>
                        {/* <p className={`${style.p} text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium pretium lectus, non semper felis.</p> */}
                    </div>
                    <div className={`col-11 col-md-7`}>
                        <div className={`${style.gradient} ${style.carousel}`}>
                            <Carousel/>
                            <Salesign className="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;