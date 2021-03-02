import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { filterCars, resetRenderList } = useContext(CarContext);
    const [searched, setSearched] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        filterCars(inputValue);
        setInputValue('');
        setSearched(true);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleResetSearch = () => {
        setSearched(false);
        resetRenderList();
    }

    return (
        <div className={style.search}>
            {/* <form onSubmit={event => filterCars(event, inputValue)}> */}
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    <button type="submit"><img src="./assets/icons/search-icon.png" alt="search"/></button>
                </div>
            </form>
            { searched ? 
             <button onClick={handleResetSearch} className={style.clearSearch}>See all cars</button> : <div></div>}
        </div>
    );
}
 
export default Search;