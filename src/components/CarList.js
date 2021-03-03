import style from '../css/CarList.module.css';
import { useContext, useEffect, useState } from 'react';
import { CarContext } from "../contexts/CarContext";
import CarCard from './CarCard';

const CarList = () => {
    const { cars } = useContext(CarContext);
    return (
        <div className="row">
            {cars.map((car) =>
                <CarCard car={car} key={car.vin}>
                </CarCard>
            )}
        </div>
    );
}

export default CarList;