import { useHistory } from "react-router-dom";
import style from "../css/DiscountCarousel.module.css";

const Carousel = () => {
  const history = useHistory();

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
          <img src={"../assets/carousel/PanozCarousel.jpg"} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/WAUKF98E25A286122")}/>
          <div className={`carousel-caption d-none d-md-block ${style.captionWrapper}`}>
            <h5>{this.state.discountedCars[0].make} {this.state.discountedCars[0].model} {this.state.discountedCars[0].year}</h5>
            <p>{this.state.discountedCars[0].descShort}</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <div className={style.overlay}></div> */}
          <img src={"../assets/carousel/ChevroletCarousel.jpg"} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/1D4PT5GK0BW487259")}/>
          <div className={`carousel-caption d-none d-md-block ${style.captionWrapper}`}>
          <h5>{this.state.discountedCars[1].make} {this.state.discountedCars[1].model} {this.state.discountedCars[1].year}</h5>
            <p>{this.state.discountedCars[1].descShort}</p>
          </div>
        </div>
        <div className="carousel-item">
          {/* <div className={style.overlay}></div> */}
          <img src={"../assets/carousel/OldsmobileCarousel.jpg"} className={`d-block w-100 ${style.carouselImg}`} alt="Discounted Carousel" onClick={()=>history.push("/details/WAUVT68E95A768929")}/>
          <div className={`carousel-caption d-none d-md-block ${style.captionWrapper}`}>
          <h5>{this.state.discountedCars[2].make} {this.state.discountedCars[2].model} {this.state.discountedCars[2].year}</h5>
            <p>{this.state.discountedCars[2].descShort}</p>
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