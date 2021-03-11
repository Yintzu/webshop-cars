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
          return <button onClick={() => removeFromCart(car)} className={`btn btn-danger ${style.removeButton}`} id="addRemove">Remove</button>
        } else if (bought){
          return <button className={`btn btn-secondary ${style.disabled} ${style.btnCustom}`} id="addRemove">Sold</button>
        } else {
          return <button onClick={() => addToCart(car)} className={`btn btn-primary ${style.addButton}`} id="addRemove">Add To Cart</button> 
        }
      }


    return (
        <div className={`${style.carCard}`}>
            <div className={style.topRow}>
                <div className={style.imgWrapper}>
                  <img src={props.car.carImg} className={`${style.carImg}`}alt="A good affordable car" />
                </div>
                <div className={style.infoRow}>
                  <h5 className={`${style.cardTitle}`}>{props.car.make} {props.car.model} </h5>
                  <p className={style.carDetailText}><span className={style.boldText}>Price:</span> {formatSum(props.car.price)} <span className={style.boldText}>Year:</span> {props.car.year}</p>
                  <hr className={style.hrCard}/>
                  <p className={`${style.cardDesc}`}>{props.car.descShort}</p>
                </div>
            </div>
            <div className={style.buyRow}>
            
              <div className={style.priceWrapper}>
                {/* <h5 className={`${style.cardPrice}`}>{formatSum(props.car.price)} </h5> */}
              </div>
              {/* <button className={`btn btn-secondary ${style.readMore} ${style.btnReadMore}`}>Read more</button> */}
              { renderButtons(props.car) }
            </div>
        </div>
    );
}

export default CarCard;