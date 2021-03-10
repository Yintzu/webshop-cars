import { useContext, useEffect, useState } from 'react';
import { CarContext } from "../contexts/CarContext";
import { SearchContext } from "../contexts/SearchContext";
import CarCard from './CarCard';
import style from '../css/CarList.module.css'

const CarList = () => {
    const { cars } = useContext(CarContext);
    const { renderList } = useContext(SearchContext);
    return (
        <div className="row">
            {renderList ? 
            renderList.map((car) =>
                <CarCard car={car} key={car.vin} data={car}></CarCard>
            )
        : <div className={style.noResult}>No results...</div>}
        
        </div>
       
        
    );
}

export default CarList;