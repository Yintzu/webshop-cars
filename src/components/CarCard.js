import style from '../css/CarCard.module.css';
import {useContext } from "react";
import {CarContext } from "../contexts/CarContext";

const CarCard = () => {
    const {cars} = useContext(CarContext); 
    console.log(cars);   
    let carorder;
    return (
        <div className="row">
            <div class="col-sm-6">
                <div class="card mt-2 mx-2">
                    <img src={cars[0].carImg} className="card-img-top" alt="A good affordable car" />
                    <div className="card-body">
                        <h5 className="card-title">{cars[0].make} {cars[0].model} {cars[0].year}</h5>
                        <p className="card-text">{cars[0].descShort}</p>
                        <a href="#" className="btn btn-primary float-end">Buy</a>
                    </div>
                </div>
            </div>
        </div>
        
    );
    
}

export default CarCard;