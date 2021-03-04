import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { cars, filterCars, resetRenderList } = useContext(CarContext);
    const [searched, setSearched] = useState(false);
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);
    /* const [priceValue, setPriceValue] = useState('1000000'); */
    const [isClicked, setIsClicked] = useState(false);


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
        setMakeArray(tempArray.sort());
    }
    const createModelArray = () => {
        let tempArray = []
        cars.forEach(car => {
            if (!tempArray.includes(car.model))
            tempArray.push(car.model)
        })
        setModelArray(tempArray.sort());
    }

    useEffect(() => {
        createMakeArray();
        createModelArray();

    },[cars])

    return (
        <div className={style.search}>
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    <button type="submit" className={style.searchIcon}><img src="./assets/icons/search-icon.png" alt="search"/></button>
                    <button className="btn btn-lg dropdown-toggle" type="button" onClick={() => setIsClicked(isClicked ? false : true)}>Filter</button>
                </div>
                {isClicked && <div className={style.dropDown}>
                    <div className={`row ${style.selects}`}>
                        <select className="col" name="make" id="">
                            <option value="select-make" selected disabled>Select Make</option>
                            {makeArray.length && makeArray.map(make => {
                                return (<option key={make}>{make}</option>)
                            })}
                        </select>
                        <select className="col" name="model" id="">
                            <option value="" selected disabled>Select Model</option>
                            {modelArray.length && modelArray.map(model => {
                                return (<option key={model}>{model}</option>)
                            })}
                        </select>
                    </div>
                </div>}
                
            </form>
            { searched && 
             <button onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch}`}>See all cars</button>}
        </div>
    );
}
 
export default Search;