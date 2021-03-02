import style from '../css/CarCard.module.css';

const CarCard = () => {
    return (
        <div className="row">
            <div class="col-sm-6">
                <div class="card mt-2 mx-2">
                    <img src="assets/car-pictures/Volvo-XC70-2006.jpg" className="card-img-top" alt="A good affordable car" />
                    <div className="card-body">
                        <h5 className="card-title">Bilnamn och modell</h5>
                        <p className="card-text">Shortdesc</p>
                        <a href="#" className="btn btn-primary float-end">Buy</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div className="card mt-2 mx-2">
                    <img src="assets/car-pictures/Volvo-XC70-2006.jpg" className="card-img-top" alt="A good affordable car" />
                    <div className="card-body">
                        <h5 className="card-title">Bilnamn och modell</h5>
                        <p className="card-text">Shortdesc</p>
                        <a href="#" className="btn btn-primary float-end">Buy</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div className="card mt-2 mx-2">
                    <img src="assets/car-pictures/Volvo-XC70-2006.jpg" className="card-img-top" alt="A good affordable car" />
                    <div className="card-body">
                        <h5 className="card-title">Bilnamn och modell</h5>
                        <p className="card-text">Shortdesc</p>
                        <a href="#" className="btn btn-primary float-end">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarCard;