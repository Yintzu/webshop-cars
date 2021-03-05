import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { CarContext } from '../contexts/CarContext';
import { SearchContext } from '../contexts/SearchContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { cars } = useContext(CarContext);
    const { filterCars, resetRenderList } = useContext(SearchContext);
    const [searched, setSearched] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);
    const [yearArray, setYearArray] = useState([]);
    
    const filterLists = [{listName: "make", list: makeArray}, {listName: "model", list: modelArray}, {listName: "year", list: yearArray}];


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
/*     useEffect(() => {

    },[makeArray, modelArray, yearArray]) */
  

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
                        {filterLists.map(listObject => {
                                return (
                                <div className="col-md" key={listObject.listName}>
                                    <label htmlFor={listObject.listName}>Select {listObject.listName}</label>
                                    <select name={listObject.listName} id={listObject.listName} defaultValue="all">
                                        <option value="all">All</option>
                                        {listObject.list.length && listObject.list.map(listItem => {
                                            return (
                                            <option key={listItem}>{listItem}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                )
                            })}
                    </div>
                    {/* <div className="row">
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
                        
                    </div> */}
                </div>}
                
            </form>
            { searched && 
             <button onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch}`}>See all cars</button>}


        </div>
    );
}
 
export default Search;