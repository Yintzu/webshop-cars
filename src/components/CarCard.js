import { CarContext } from "../contexts/CarContext";
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import style from '../css/CarCard.module.css';
import BuyButtons from './BuyButtons';

const CarCard = (props) => {
  const history = useHistory();
  const { viewCar, boughtCheck, checkCarDiscount } = useContext(CarContext);

  return (
    <div className={`${style.carCard}`} onClick={(e) => {
      if (e.target.id !== 'addRemove') {
        viewCar(props.car, history);
      }
    }}>
      <div className={style.topRow}>
        <div className={style.imgWrapper}>
          <img src={props.car.carImg} className={`${style.carImg}`} alt="A good affordable car" />
          {/* Runs boughtCheck to see if soldout.png should render */}
          {boughtCheck(props.car) && <img src="/assets/app-components/soldout.png" className={`${style.soldOverlay}`} />}
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
            {/* Checks which price to render with checkCarDiscount (from CarContext) */}
            <span className={style.largePrice}>{checkCarDiscount(props.car)}</span>
            <div className={style.buttonWrapper}>
              <BuyButtons className={style.buttonWrapper} car={props.car} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarCard;