import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { cars, filterCars, resetRenderList } = useContext(CarContext);
    const [searched, setSearched] = useState(false);
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);
    const [yearArray, setYearArray] = useState([]);
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
    const createYearArray = () => {
        let tempArray = []
        cars.forEach(car => {
            if (!tempArray.includes(car.year))
            tempArray.push(car.year)
        })
        setYearArray(tempArray.sort().reverse());
    }

    useEffect(() => {
        createMakeArray();
        createModelArray();
        createYearArray();

    },[cars])

    return (
        <div className={style.search}>
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    <button type="submit" className={style.searchIcon}><img src="./assets/icons/search-icon.png" alt="search"/></button>
                    <button className="btn btn-lg" type="button" onClick={() => setIsClicked(isClicked ? false : true)}>
                        Filter
                        {isClicked ? <i className={style.arrowUp}></i> : <i className={style.arrowDown}></i>} 
                    </button>
                </div>
                {isClicked && <div className={style.dropDown}>
                    <div className={`row ${style.selects}`}>
                        <div className="col">
                            <label htmlFor="make">Select make</label>
                            <select name="make" id="make" defaultValue="all">
                                <option value="all" >All</option>
                                {makeArray.length && makeArray.map(make => {
                                    return (<option key={make}>{make}</option>)
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="model">Select model</label>
                            <select name="model" id="model" defaultValue="all">
                                <option value="all">All</option>
                                {modelArray.length && modelArray.map(model => {
                                    return (<option key={model}>{model}</option>)
                                })}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="year">Select year</label>
                            <select name="year" id="year" defaultValue="all">
                                <option value="all">All</option>
                                {yearArray.length && yearArray.map(year => {
                                    return (<option key={year}>{year}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div>
                                <label htmlFor="min-price">Min price</label>
                                <input id="min-price" type="range" min="0" max="1000000" value="0"></input> 
                            </div>
                            <div>
                                <label htmlFor="max-price">Max price</label>
                                <input id="max-price" type="range" min="0" max="1000000" value="1000000"></input> 
                            </div>
                        </div>
                        <div className="col">
                            <div>
                                <label htmlFor="min-price">Min </label>
                                <input id="min-price" type="range" min="0" max="1000000" value="0"></input> 
                            </div>
                            <div>
                                <label htmlFor="max-price">Max price</label>
                                <input id="max-price" type="range" min="0" max="1000000" value="1000000"></input> 
                            </div>
                            
                        </div>
                        
                    </div>
                </div>}
                
            </form>
            { searched && 
             <button onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch}`}>See all cars</button>}


        </div>
    );
}
 
export default Search;