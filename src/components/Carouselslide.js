import React from 'react'
import { useHistory } from "react-router-dom";
import { CarContext } from "../contexts/CarContext"
import { ShoppingCartContext } from "../contexts/ShoppingCartContext"
import { useContext } from "react";
import style from "../css/DiscountCarousel.module.css";

const Carouselslide =()=> {
    const history = useHistory();
    const { discountedCars } = useContext(CarContext)
    const { formatSum } = useContext(ShoppingCartContext)

    return (   
        <div>
            {discountedCars.map((discountedcar,index) => ( 
                <div className={`carousel-item ${index===0&& 'active' ? "active" : ""}`} key={discountedcar.vin}>
                    <div className={style.overlay}></div>
                    {/* <img src={"../assets/carousel/PanozCarousel.jpg"} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/WAUKF98E25A286122")}/> */}
                    <img src={discountedcar.carImg} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={() => history.push("/details/WAUKF98E25A286122")} />
                    <div className={`${style.carouselcaptioned}  d-md-block ${style.captionWrapper}`}>
                        <h5 className={`${style.carTitle}`}>{discountedcar.make} {discountedcar.model} {discountedcar.year}</h5>
                        <p className={`${style.carPrice}`}>{formatSum(discountedcar.discountedprice())}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default Carouselslide;