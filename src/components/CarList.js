import { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import CarCard from './CarCard';
import style from '../css/CarList.module.css'

const CarList = () => {
    const { renderList } = useContext(SearchContext);


    return (
        <div>
            {renderList ? 
            <div className={style.carsContainer}>
                {renderList.map((car) =>
                <CarCard car={car} key={car.vin} data={car}></CarCard>
                )}
            </div> 
            : 
            <div className={style.noResult}>
                <p>No results...</p>
            </div> 
            }
        </div>
        
    );
}

export default CarList;