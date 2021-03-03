import style from '../css/CarCard.module.css';
import {useContext } from "react";
import {CarContext } from "../contexts/CarContext";

const CarCard = (props) => {

    
    return (
        
            <div class="col-sm-6">
                <div class="card mt-2 mx-2">
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