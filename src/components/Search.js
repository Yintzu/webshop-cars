import { useState, useContext } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const {filterCars} = useContext(CarContext);

    return (
        <div className={style.search}>
            <form onSubmit={event => filterCars(event, inputValue)}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." onChange={e => setInputValue(e.target.value)}/>
                    <button type="submit"><img src="./assets/icons/search-icon.png" alt="search"/></button>
                </div>
            </form>
        </div>
    );
}
 
export default Search;