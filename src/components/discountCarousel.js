import { useHistory } from "react-router-dom";
import style from "../css/DiscountCarousel.module.css";
import { CarContext } from "../contexts/CarContext"
import { useContext } from "react";

const Carousel = () => {
  const history = useHistory();

    const {discountedCars}=useContext(CarContext)
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className={`carousel-inner ${style.carouselWrapper}`}>
        <div className={`carousel-item active`}>
          { <div className={style.overlay}></div> }
          <img src={discountedCars[0].carImg} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/WAUKF98E25A286122")}/>
          <div className={`carousel-caption  ${style.captionWrapper}`}>
            <h5>{discountedCars[0].make} {discountedCars[0].model} {discountedCars[0].year}</h5>
            <p className="text-danger" >{discountedCars[0].discountedprice()}kr</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <div className={style.overlay}></div> */}
          <img src={discountedCars[1].carImg} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/1D4PT5GK0BW487259")}/>
          <div className={`carousel-caption  ${style.captionWrapper}`}>
          <h5>{discountedCars[1].make} {discountedCars[1].model} {discountedCars[1].year}</h5>
            <p className="text-danger">{discountedCars[1].discountedprice()}kr</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <div className={style.overlay}></div> */}
          <img src={discountedCars[2].carImg} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/WAUVT68E95A768929")}/>
          <div className={`carousel-caption  ${style.captionWrapper}`}>
          <h5>{discountedCars[2].make} {discountedCars[2].model} {discountedCars[2].year}</h5>
            <p className="text-danger" >{discountedCars[2].discountedprice()}kr</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;