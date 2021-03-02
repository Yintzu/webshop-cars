import { useState, useContext } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const {filterCars} = useContext(CarContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue("");
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
        filterCars(inputValue);
    }


    return (
        <div className={style.search}>
            {/* <form onSubmit={event => filterCars(event, inputValue)}> */}
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    {/* <input type="text" placeholder="Search..." value={inputValue} onChange={e => setInputValue(e.target.value)}/> */}
                    <button type="submit"><img src="./assets/icons/search-icon.png" alt="search"/></button>
                </div>
            </form>
        </div>
    );
}
 
export default Search;