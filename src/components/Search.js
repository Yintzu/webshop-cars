import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { filterCars } = useContext(CarContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        filterCars(inputValue);
        setInputValue('');
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    // useEffect(() => {
    //     let filteredCars = cars.filter(car => {
    //         let matchString = `${car.make} ${car.model} ${car.year}`;
    //         if (matchString.toLowerCase().includes(inputValue.toLowerCase())) {
    //             return true
    //         }
    //     })
    //     if (filteredCars.length) {
    //         setSearchResult(filteredCars);
    //     } else {
    //         setSearchResult(null);
    //     }
        
    // }, [inputValue]);

    // const filterCars = (inputValue) => {
    //     let filteredCars = cars.filter(car => {
    //         if (car.carImg.toLowerCase().includes(inputValue.toLowerCase())) {
    //             return true
    //         }
    //     })
    // }

    return (
        <div className={style.search}>
            {/* <form onSubmit={event => filterCars(event, inputValue)}> */}
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    <button type="submit"><img src="./assets/icons/search-icon.png" alt="search"/></button>
                </div>
            </form>
        </div>
    );
}
 
export default Search;