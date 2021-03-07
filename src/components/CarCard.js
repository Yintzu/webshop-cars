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
            <div className={`card mt-2 mx-2 ${style.carClick}`} onClick={(e) => {
                if (e.target.id !== "addBtn") {
                    viewCar(props.car, history)
                }
            }}>
                <img src={props.car.carImg} className="card-img-top" alt="A good affordable car" />
                <div className="card-body">
                    <h5 className="card-title">{props.car.make} {props.car.model} {props.car.year}</h5>
                    <p className="card-text">{formatSum(props.car.price)}</p>
                    <p className={`card-text ${style.desc}`}>{props.car.descShort}</p>
                    <button onClick={() => addToCart(props.car) }className="btn btn-primary float-end" id="addBtn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CarCard;