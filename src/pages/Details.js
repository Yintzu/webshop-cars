import style from '../css/Details.module.css';
import { useContext } from 'react';
import { CarContext } from '../contexts/CarContext';

const Details = () => {

    const { } = useContext(CarContext);

    return ( 
        <div className={style.details}>
            <div className="row">
                <div className={`col ${style.imageWrapper}`}>
                    <img src="./assets/car-pictures/Chevrolet-Camaro-1973.jpg" alt="make model year"/>
                </div>
                <div className={`col-4 ${style.buy}`}>
                    <h3>Chevrolet Camaro 1973</h3>
                    <p>Santa Rosa</p>
                    <h4 className={style.price}>554 963 kr</h4>
                    <button className="btn btn-dark btn-lg">Buy Car</button>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul>
                        <li>make</li>
                        <li>model</li>
                        <li>year</li>
                        <li>vin</li>
                        <li>miles</li>
                    </ul>
                    <p>description description description description description description</p>
                </div>
                <div className="col-4">
                    
                </div>
            </div>
        </div>
     );
}
 
export default Details;