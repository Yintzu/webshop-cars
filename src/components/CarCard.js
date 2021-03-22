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
      if (boughtItem.vin === car.vin) {
        bought = true;
      }
    });
    if (inCart) {
      return <button onClick={() => removeFromCart(car)} className={`${style.btnsWidth} ${style.removeButton}`} id="addRemove">Remove</button>
    } else if (bought) {
      return <button className={`${style.btnsWidth} ${style.disabled} ${style.btnCustom}`} id="addRemove">Sold</button>
    } else {
      return <button onClick={() => addToCart(car)} className={`${style.btnsWidth} ${style.addButton}`} id="addRemove">Buy</button>
    }
  }


  return (
    <div className={`${style.carCard}`} onClick={(e) => {
      if (e.target.id !== 'addRemove') {
        viewCar(props.car, history);
      }
    }}>
      <div className={style.topRow}>
        <div className={style.imgWrapper}>
          <img src={props.car.carImg} className={`${style.carImg}`} alt="A good affordable car" />
          {/* <img src="/assets/app-components/soldout.png" className={`${style.soldOverlay}`} /> */}
        </div>
        <div className={style.infoRow}>
          <h5 className={`${style.cardTitle}`}>{props.car.make} {props.car.model} </h5>
          <div className={style.carDetailText}>
            <div>
              <span className={`${style.boldText} ${style.yearLabel}`}>Year:</span> {props.car.year}
            </div>
            <div className={style.milesWrapper}>
              <span className={`${style.boldText} ${style.milesLabel}`}>Miles:</span> {props.car.miles}
            </div>
          </div>
          <hr className={`${style.hrCard} ${style.topHr}`} />
          <p className={style.cardSmallText}>{props.car.descShort}</p>
          <hr className={style.hrCard} />
          <div className={style.cardBtns}>
            <span className={style.largePrice}>{formatSum(props.car.price)}</span>
            {renderButtons(props.car)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;