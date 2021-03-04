import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../css/CarCard.module.css';

const CarCard = (props) => {
    const history = useHistory();
    const { addToCart, removeFromCart,shoppingCartItems, formatSum } = useContext(ShoppingCartContext);
    const { viewCar } = useContext(CarContext);

    return (
        <div className={`col-sm-6 ${style.carCard}`}>
            <div className="card mt-2 mx-2">
                <img src={props.car.carImg} className="card-img-top" alt="A good affordable car" onClick={() => viewCar(props.car, history)}/>
                <div className="card-body">
                    <h5 className="card-title">{props.car.make} {props.car.model} {props.car.year}</h5>
                    <p className="card-text">{formatSum(props.car.price)}</p>
                    <p className={`card-text ${style.desc}`}>{props.car.descShort}</p>
                    <button onClick={() => addToCart(props.car) }className="btn btn-primary float-end">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CarCard;