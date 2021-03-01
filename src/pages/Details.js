import style from '../css/Details.module.css';
import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';


const Details = () => {

    const { clickedCar } = useContext(CarContext);
    const { addToCart } = useContext(ShoppingCartContext);

    return ( 
        <div className={style.details}>
            <div className="row">
                <div className={`col ${style.imageWrapper}`}>
                    <img src={clickedCar.carImg} alt="make model year"/>
                </div>
                <div className={`col-md-4 ${style.buy}`}>
                    <h3>{clickedCar.make} {clickedCar.model} {clickedCar.year}</h3>
                    <p>{clickedCar.city}</p>
                    <h4 className={style.price}>{clickedCar.price} kr</h4>
                    <button onClick={() => addToCart(clickedCar)} className="btn btn-dark btn-lg" >Buy Car</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul>
                        <li>{clickedCar.make}</li>
                        <li>{clickedCar.model}</li>
                        <li>{clickedCar.year}</li>
                        <li>{clickedCar.miles} miles</li>
                    </ul>
                    <p>{clickedCar.descLong}</p>
                </div>
                <div className="col-md-4">
                    Place some images here
                </div>
            </div>
        </div>
     );
}
 
export default Details;