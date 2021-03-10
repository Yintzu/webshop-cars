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
          return <button onClick={() => removeFromCart(car)} className={`${style.removeButton}
          btn 
          btn-primary 
          float-end
          `} id="addRemove">Remove</button>
        } else if (bought){
          return <button className={`btn btn-secondary float-end ${style.disabled}`} id="addRemove">Sold</button>
        } else {
          return <button onClick={() => addToCart(car)} className={`${style.addButton}
          btn 
          btn-primary 
          float-end
          `} id="addRemove">Add To Cart</button> 
        }
      }


    return (
        <div className="container">
          <div className="row">
            <div className="col-sm-6">

               <div className={`${style.carCard}`} onClick={(e) => {
                if (e.target.id !== "addRemove") {
                    viewCar(props.car, history)
                }
            }}>
           
                  <img src={props.car.carImg} className={`${style.carImg}`}alt="A good affordable car" />
                  <div className={`${style.desc}`}>
                    <h5 className={`${style.carHeading}`}>{props.car.make} {props.car.model}</h5>
                    <p className={`${style.desc}`}><span className={style.boldText}>Price:</span> {formatSum(props.car.price)} <span className={style.boldText}>Year:</span> {props.car.year}</p>
                    <hr className={style.hrCard}/>
                    <p className={`${style.desc}`}>{props.car.descShort}</p>
                    { renderButtons(props.car) }
                  </div>

    
              </div>         
            </div>
          </div>
        </div>
    );
}

export default CarCard;