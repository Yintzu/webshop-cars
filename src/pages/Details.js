import style from '../css/Details.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';


const Details = (props) => {

    const { cars } = useContext(CarContext);
    const [ car, setCar ] = useState(null);
    const { addToCart, formatSum } = useContext(ShoppingCartContext);

    useEffect(() => {
        if(cars) {
            setCar(
                cars.find((car) => props.match.params.id == car.vin)
            )
        }
    },[car]);

    const renderCar = () => {
        return ( 
            <div className={style.details}>
                <div className="row">
                    <div className={`col ${style.imageWrapper}`}>
                        <img src={car.carImg} alt={`${car.make} ${car.model} ${car.year}`}/>
                    </div>
                    <div className={`col-md-4 ${style.buy}`}>
                        <h3>{car.make} {car.model} {car.year}</h3>
                        <p>{car.city}</p>
                        <h4 className={style.price}>{formatSum(car.price)}</h4>
                        <button onClick={() => addToCart(car)} className="btn btn-dark btn-lg" >Buy Car</button>
                    </div>
                </div>
                <div className="row">
                    <div className={`col ${style.desc}`}>
                        <p>{car.descLong}</p>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Make: {car.make}</li>
                            <li>Model: {car.model}</li>
                            <li>Year: {car.year}</li>
                            <li>Miles: {car.miles} miles</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return car ? renderCar() : <div></div>;
}
 
export default Details;