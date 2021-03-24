import React from 'react'
import { useHistory } from "react-router-dom";
import { CarContext } from "../contexts/CarContext"
import { ShoppingCartContext } from "../contexts/ShoppingCartContext"
import { useContext } from "react";
import style from "../css/DiscountCarousel.module.css";

const Carouselslide =()=> {
    const history = useHistory();
    const { discountedCars, checkCarDiscount } = useContext(CarContext)

    return (   
        <div>
            {discountedCars.map((discountedcar,index) => ( 
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={discountedcar.vin}>
                    <div className={style.overlay}></div>
                    <img src={discountedcar.carImg} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={() => history.push(`/details/${discountedcar.vin}`)} />
                    <div className={`${style.carouselcaptioned}  d-md-block ${style.captionWrapper}`}>
                        <h5 className={`${style.carTitle}`}>{discountedcar.make} {discountedcar.model} {discountedcar.year}</h5>
                        <p className={`${style.carPrice}`}>{checkCarDiscount(discountedcar)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Carouselslide;