import style from '../css/Details.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';


const Details = (props) => {

    const { cars, boughtCars } = useContext(CarContext);
    const [ car, setCar ] = useState(null);
    const { addToCart, formatSum, shoppingCartItems, removeFromCart } = useContext(ShoppingCartContext);

    useEffect(() => {
        if(cars) {
            setCar(
                cars.find((car) => props.match.params.id == car.vin)
            )
        }
    },[car]);

    const renderButton = () => {
        if (shoppingCartItems.includes(car)){
            return <button onClick={() => removeFromCart(car)} className={`btn btn-lg ${style.removeBtn}`}>Remove</button>
        } else if (boughtCars.includes(car)){
            return <button className={`btn btn-lg ${style.disabled}`}>Sold</button>
        } else {
            return <button onClick={() => addToCart(car)} className={`btn btn-lg ${style.addToCartBtn}`}>Add to cart</button>
        }
    }

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
                        { renderButton()
/*                         !shoppingCartItems.includes(car) ? 
                        <button onClick={() => addToCart(car)} className={`btn btn-lg ${style.addToCartBtn}`}>Add to cart</button> :
                        <button onClick={() => removeFromCart(car)} className={`btn btn-lg ${style.removeBtn}`}>Remove</button> */
                        }
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