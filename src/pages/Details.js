import style from '../css/Details.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';


const Details = (props) => {

    const { cars, boughtCars } = useContext(CarContext);
    const [car, setCar] = useState(null);
    const { addToCart, formatSum, shoppingCartItems, removeFromCart } = useContext(ShoppingCartContext);

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

    const renderButton = (car) => {
        let inCart = false;
        let bought = false;
        shoppingCartItems.forEach(cartItem => {
            if (cartItem.vin === car.vin) {
                inCart = true;
            }
        });
        boughtCars.forEach(boughtItem => {
            if (boughtItem.vin === car.vin) {
                bought = true;
            }
        });
        if (inCart) {
            return <button onClick={() => removeFromCart(car)} className={`btn btn-lg ${style.removeBtn} ${style.btnWidth}`}>Remove</button>
        } else if (bought) {
            return <button className={`btn btn-lg ${style.disabled} ${style.btnWidth}`}>Sold</button>
        } else {
            return <button onClick={() => addToCart(car)} className={`btn btn-lg ${style.addToCartBtn} ${style.btnWidth}`}>Add to cart</button>
        }
    }

    const renderCar = () => {
        return (
            <div className={style.details}>
                <h1 className={`mt-0 ${style.mainHeading}`}>Car details</h1>
                <div className="row g-0">
                    <div className={`col ${style.imageWrapper}`}>
                        <img src={car.carImg} alt={`${car.make} ${car.model} ${car.year}`} />
                    </div>
                    <div className={`col-md-4 ${style.buy}`}>
                        <h3>{car.make} {car.model} {car.year}</h3>
                        <p>{car.city}</p>
                        <h4 className={style.price}>{formatSum(car.price)}</h4>
                        {renderButton(car)}
                    </div>
                </div>
                <div className={`row ${style.descContainer}`}>
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