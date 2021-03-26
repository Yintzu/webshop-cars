import { useContext } from 'react';
import { SearchContext } from "../contexts/SearchContext";
import { FilterSearchContext } from "../contexts/FilterSearchContext";
import CarCard from './CarCard';
import style from '../css/CarList.module.css'

const CarList = () => {
    const { renderList, setSearched, resetRenderList } = useContext(SearchContext);
    const { setFiltered, removeFilters } = useContext(FilterSearchContext);

    const handleClick = () => {
        setFiltered(false);
        removeFilters();
        setSearched(false);
        resetRenderList();
    }

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
                <img src="/assets/app-components/logo.gif" alt="car logo"/>
                <h3>No results found</h3>
                <p>Sorry, we could not find any cars matching your search.</p>
                <button className="button blue-button" onClick={handleClick}>See all cars</button>
            </div> 
            }
        </div>
        
    );
}

export default CarList;