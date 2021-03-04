import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { useContext } from 'react';

const CarCard = (props) => {
    const { addToCart, removeFromCart,shoppingCartItems } = useContext(ShoppingCartContext);

    return (
        <div className="col-sm-6" >
            <div className="card mt-2 mx-2">
                <img src={props.car.carImg} className="card-img-top" alt="A good affordable car" />
                <div className="card-body">
                    <h5 className="card-title">{props.car.make} {props.car.model} {props.car.year}</h5>
                    <p className="card-text">{props.car.price}kr</p>
                    <p className="card-text">{props.car.descShort}</p>
                    <button onClick={() => addToCart(props.car) }className="btn btn-primary float-end">Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default CarCard;