const CarCard = (props) => {
    return (
        <div className="col-sm-6" >
            <div className="card mt-2 mx-2">
                <img src={props.car.carImg} className="card-img-top" alt="A good affordable car" />
                <div className="card-body">
                    <h5 className="card-title">{props.car.make} {props.car.model} {props.car.year}</h5>
                    <p className="card-text">{props.car.descShort}</p>
                    <a href="#" className="btn btn-primary float-end">Buy</a>
                </div>
            </div>
        </div>
    );
}

export default CarCard;