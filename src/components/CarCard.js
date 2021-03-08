import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../css/CarCard.module.css';

const CarCard = (props) => {
    const history = useHistory();
    const { addToCart, removeFromCart, shoppingCartItems, formatSum } = useContext(ShoppingCartContext);
    const { viewCar, boughtCars } = useContext(CarContext);

    const renderButtons = (car) => {
        let inCart = false;
        let bought = false;
        shoppingCartItems.forEach(cartItem => {
          if (cartItem.vin === car.vin) {
            inCart = true;
          } 
        });
        boughtCars.forEach(boughtItem => {
          if (boughtItem.vin === car.vin){
            bought = true;
          }
        });
        if (inCart) {
          return <button onClick={() => removeFromCart(car)} className="btn btn-danger float-end" id="addRemove">Remove</button>
        } else if (bought){
          return <button className={`btn btn-secondary float-end ${style.disabled}`} id="addRemove">Sold</button>
        } else {
          return <button onClick={() => addToCart(car)} className="btn btn-primary float-end" id="addRemove">Add To Cart</button> 
        }
      }


    return (
        <div className={`col-sm-6 ${style.carCard}`}>
            <div className={`card mt-2 mx-2 ${style.carClick}`} onClick={(e) => {
                if (e.target.id !== "addRemove") {
                    viewCar(props.car, history)
                }
            }}>
                <img src={props.car.carImg} className="card-img-top" alt="A good affordable car" />
                <div className="card-body">
                    <h5 className="card-title">{props.car.make} {props.car.model} {props.car.year}</h5>
                    <p className="card-text">{formatSum(props.car.price)}</p>
                    <p className={`card-text ${style.desc}`}>{props.car.descShort}</p>
                    { renderButtons(props.car) }
                </div>
            </div>
        </div>
    );
}

export default CarCard;