import style from "../css/DiscountCarousel.module.css";

const Carousel = () => {

  let discountedCars = [
    {
      "make": "Panoz",
      "model": "Esperante",
      "year": 2006,
      "vin": "WAUKF98E25A286122",
      "city": "Lanxi",
      "descShort": "congue risus semper porta volutpat",
      "descLong": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
      "price": 232476,
      "miles": 24263,
      "carImg": "../assets/car-pictures/Panoz-Esperante-2006.jpg"
    },
    {
      "make": "Chevrolet",
      "model": "Camaro",
      "year": 1973,
      "vin": "1D4PT5GK0BW487259",
      "city": "Santa Rosa",
      "descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
      "descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      "price": 554963,
      "miles": 15432,
      "carImg": "../assets/car-pictures/Chevrolet-Camaro-1973.jpg"
    },
    {
      "make": "Oldsmobile",
      "model": "98",
      "year": 1992,
      "vin": "WAUVT68E95A768929",
      "city": "Tagana-an",
      "descShort": "ultrices enim lorem ipsum dolor",
      "descLong": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "price": 509536,
      "miles": 45262,
      "carImg": "../assets/car-pictures/Oldsmobile-98-1992.jpg"
    }
  ];

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className={`carousel-inner ${style.carouselWrapper}`}>
        <div className={`carousel-item active`}>
          {/* <div className={style.overlay}></div> */}
          <img src={"../assets/carousel/PanozCarousel.jpg"} className="d-block w-100 carouselImg" alt="Discounted Carousel" />
          <div className={`carousel-caption d-none d-md-block ${style.captionWrapper}`}>
            {/* <h5>{discountedCars[0].make} {discountedCars[0].model} {discountedCars[0].year}</h5>
            <p>{discountedCars[0].descShort}</p> */}
          </div>
        </div>
        <div className="carousel-item">
          {/* <div className={style.overlay}></div> */}
          <img src={"../assets/carousel/ChevroletCarousel.jpg"} className="d-block w-100 carouselImg" alt="Discounted Carousel" />
          <div className={`carousel-caption d-none d-md-block ${style.captionWrapper}`}>
            {/* <h5>{discountedCars[1].make} {discountedCars[1].model} {discountedCars[1].year}</h5>
            <p>{discountedCars[1].descShort}</p> */}
          </div>
        </div>
        <div className="carousel-item">
          {/* <div className={style.overlay}></div> */}
          <img src={"../assets/carousel/OldsmobileCarousel.jpg"} className="d-block w-100 carouselImg" alt="Discounted Carousel" />
          <div className={`carousel-caption d-none d-md-block ${style.captionWrapper}`}>
            {/* <h5>{discountedCars[2].make} {discountedCars[2].model} {discountedCars[2].year}</h5>
            <p>{discountedCars[2].descShort}</p> */}
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