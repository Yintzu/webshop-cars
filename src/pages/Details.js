import style from '../css/Details.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';


const Details = (props) => {

    const { cars } = useContext(CarContext);
    const [ car, setCar ] = useState(null);
    const { addToCart } = useContext(ShoppingCartContext);

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
                        <h4 className={style.price}>{car.price} kr</h4>
                        <button onClick={() => addToCart(car)} className="btn btn-dark btn-lg" >Buy Car</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul>
                            <li>{car.make}</li>
                            <li>{car.model}</li>
                            <li>{car.year}</li>
                            <li>{car.miles} miles</li>
                        </ul>
                        <p>{car.descLong}</p>
                    </div>
                    <div className="col-md-4">
                        Place some images here
                    </div>
                </div>
            </div>
        );
    }

    return car ? renderCar() : <div></div>;
}
 
export default Details;