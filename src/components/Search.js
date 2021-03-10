import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
/* import { CarContext } from '../contexts/CarContext'; */
import { SearchContext } from '../contexts/SearchContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    /* const { cars } = useContext(CarContext); */
    const { searchCars, resetRenderList, filterLists, saveFilters } = useContext(SearchContext);
    const [searched, setSearched] = useState(false);
    const [isClicked, setIsClicked] = useState(true);
    const [btnDisable, setBtnDisable] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchCars(inputValue);
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

    const handleSelect = (e) => {
        saveFilters(e.target.value)
    }
 const [maxPrice, setMaxPrice] = useState("10")
    const [minPrice, setMinPrice] = useState("0")
    const [maxMiles, setMaxMiles] = useState("10")
    const [minMiles, setMinMiles] = useState("0")

    const priceSlides = [
        {name: "min", value: minPrice},
        {name: "max", value: maxPrice},
    ]
    const milesSlides = [
        {name: "min", value: minMiles},
        {name: "max", value: maxMiles}
    ]

   
    const handleSlide = (e) => {
        setMinPrice(e.target.value)
        console.log(minPrice)
    }

    return (
        <div className={style.search}>
            <form onSubmit={handleSubmit}>
                <div className={style.input}>
                    <input className={style.searchInput} type="text" placeholder="Search..." value={inputValue} onChange={handleChange}/>
                    <button type="submit" className={style.searchIcon}><img src="./assets/icons/search-icon.png" alt="search"/></button>
                    {/* Fiter button */}
                    <button className="btn btn-lg" type="button" onClick={() => setIsClicked(isClicked ? false : true)}>
                        Filter
                        {isClicked ? <div className={style.arrowUp}></div> : <div className={style.arrowDown}></div>}
                    </button>

                    {/* Reset list button */}
                    <div onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch} ${!searched && style.disabledBtn}`}>Reset list</div>
                </div>

                {/* Drop down */}
                {isClicked && <div className={style.dropDown}>

                    {/* Select lists */}
                    <div className={`row ${style.selects}`}>
                        {filterLists.map(listObject => {
                                return (
                                <div className={`col-md ${style.selectWrapper}`} key={listObject.listName}>
                                    <label htmlFor={listObject.listName}>Select {listObject.listName}</label>
                                    <div className={`customSelect ${style.customSelect}`}>
                                        <select name={listObject.listName} id={listObject.listName} defaultValue="all" onChange={handleSelect}>
                                            <option value="all">All</option>
                                            {listObject.list.length && listObject.list.map(listItem => {
                                                return (
                                                <option key={listItem}>{listItem}</option>
                                                )
                                            })}
                                        </select>
                                        <span className="focus"></span>
                                    </div>
                                </div>
                                )
                            })}
                    </div>

                    {/* Range sliders */}
                    <div className="row justify-content-around mt-3">
                        <div className={`col-md-5 ${style.sliderColumn}`}>
                            {priceSlides.map(listObject => {
                            return (
                                <div key={listObject.name} className={style.slideWrapper}>
                                    <div className={style.labels}>
                                        <label htmlFor={listObject.name}>{listObject.name} price</label>
                                        <label htmlFor={listObject.name}>{listObject.value}</label>
                                    </div>
                                    <div className={style.slideContainer}>
                                        <input className={style.slider} id={listObject.name} type="range" min="0" max="10" value={listObject.value} onChange={handleSlide}></input> 
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                        <div className={`col-md-5 ${style.sliderColumn}`}>
                            {milesSlides.map(listObject => {
                            return (
                                <div key={listObject.name} className={style.slideWrapper}>
                                    <div className={style.labels}>
                                        <label htmlFor={listObject.name}>{listObject.name} miles</label>
                                        <label htmlFor={listObject.name}>{listObject.value}</label>
                                    </div>
                                    <div className={style.slideContainer}>
                                        <input className={style.slider} id={listObject.name} type="range" min="0" max="10" value={listObject.value} onChange={handleSlide}></input> 
                                    </div>
                                </div>
                            )
                        })}
                        </div>

                    </div>

                </div>}
                
            </form>


        </div>
    );
}
 
export default Search;