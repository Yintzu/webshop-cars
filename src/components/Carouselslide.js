import React from 'react'
import { useHistory } from "react-router-dom";
import { CarContext } from "../contexts/CarContext"
import { useContext, useEffect, useState } from "react";
import style from "../css/DiscountCarousel.module.css";

const Carouselslide = (props) => {
    const history = useHistory();
    const { discountedCars, checkCarDiscount, boughtCheck } = useContext(CarContext)

    return (
        <div>
            {discountedCars.map((discountedcar, index) => (
                <div className={`carousel-item ${style.clickable} ${index === 0 ? "active" : ""}`} key={discountedcar.vin} onClick={() => history.push(`/details/${discountedcar.vin}`)}>
                    <div className={style.imageWrapper}>
                        <div className={style.overlay}></div>
                        <img src={discountedcar.carImg} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" />
                        {boughtCheck(discountedcar) && <img src="/assets/app-components/soldout.png" className={`${style.soldOverlay}`} />}
                    </div>
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