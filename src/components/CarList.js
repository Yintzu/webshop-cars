import style from '../css/CarList.module.css';
import { useContext, useEffect, useState } from 'react';
import {CarContext } from "../contexts/CarContext";
import CarCard from './CarCard';


const CarList = () => {
    return ( 
        <div>
            <CarCard>


            </CarCard>
        </div>
     );
}
 
export default CarList;