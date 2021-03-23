import style from '../css/Details.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import Modal from '../components/Modal.js'
import BuyButtons from '../components/BuyButtons';

    


const Details = (props) => {

    const { cars } = useContext(CarContext);
    const [car, setCar] = useState(null);
    const { formatSum} = useContext(ShoppingCartContext);

    useEffect(() => {
        findCar()
    }, [car]);

    useEffect(() => {
        findCar()
    }, [props.match.params.id]);

    const findCar = () => {
        if (cars) {
            setCar(
                cars.find((car) => props.match.params.id == car.vin)
            )
        }
    }

    const renderCar = () => {
        return (
            <div className={style.details}>
                <Modal />
                <h1 className={`mt-0 ${style.mainHeading}`}>Car details</h1>
                <div className="row g-0">
                    <div className={`col ${style.imageWrapper}`}>
                        <img src={car.carImg} alt={`${car.make} ${car.model} ${car.year}`} />
                    </div>
                    <div className={`col-md-4 ${style.buy}`}>
                        <h3>{car.make} {car.model} {car.year}</h3>
                        <p>{car.city}</p>
                        <h4 className={style.price}>{formatSum(car.price)}</h4>
                        <div className={style.buttonWrapper}>
                            <BuyButtons car={car} />
                        </div>
                    </div>
                </div>
                <div className={`row ${style.descContainer}`}>
                    <div className={`col ${style.desc}`}>
                        <h5>Description</h5>
                        <p>{car.descLong}</p>
                    </div>
                    <div className="col-md-4">
                        <ul>
                            <li>Make: {car.make}</li>
                            <li>Model: {car.model}</li>
                            <li>Year: {car.year}</li>
                            <li>Miles: {car.miles}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return car ? renderCar() : <div></div>;
}

export default Details;

