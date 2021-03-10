import style from '../css/Hero.module.css';
import Carousel from './discountCarousel';

const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={`${style.heroCenterDiv} ${style.flexCenter}`}>
                <div className={`row ${style.flexCenter}`}>
                    <div className="col-4">
                        <h1 className={`${style.textWhite}`}>Welcome to the most reliable</h1>
                        <p className={`${style.textWhite}`}>You probably haven't heard of them sriracha hoodie authentic kogi, banh mi lo-fi af heirloom la croix disrupt meditation roof party. Cold-pressed thundercats yuccie, swag VHS pop-up everyday carry intelligentsia lyft iceland.</p>
                    </div>
                    <div className="col-8">
                        <Carousel/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;