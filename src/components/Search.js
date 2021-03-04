import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { cars, filterCars, resetRenderList } = useContext(CarContext);
    const [searched, setSearched] = useState(false);
    let [makeArray, setMakeArray] = useState([]);

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
    const createMakeArray = () => {
        let tempArray = []
        cars.forEach(car => {
            if (!tempArray.includes(car.make))
            tempArray.push(car.make)
        })
        setMakeArray(tempArray);
    }

    useEffect(() => {
        createMakeArray();
        
    },[])

    return (
        <div className={style.search}>
            {console.log(makeArray)}
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    <button type="submit" className={style.searchIcon}><img src="./assets/icons/search-icon.png" alt="search"/></button>
                    <button className="btn btn-lg dropdown-toggle" type="button">Filter</button>
                </div>
                <div className={style.dropDown}>
                    <select name="Make" id="" placeholder="make">
                        {makeArray.length && makeArray.map(make => {
                            
                            return (<option>{make}</option>)
                        })}
                        
                    </select>
                    <input type="range" id="price" min="0" max="1000000"/>
                    <output></output>
                </div>
            </form>
            { searched ? 
             <button onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch}`}>See all cars</button> : <div></div>}
        </div>
    );
}
 
export default Search;