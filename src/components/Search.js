import { useState, useContext } from 'react';
import style from '../css/Search.module.css';
import { SearchContext } from '../contexts/SearchContext';
import { FilterSearchContext } from '../contexts/FilterSearchContext';
import { CarContext } from '../contexts/CarContext';

const Search = () => {
    const { formatSum } = useContext(CarContext);
    const { searchCars, searched, setSearched, resetRenderList} = useContext(SearchContext);
    const { selectLists, saveSelects, sliders, saveSliders, filtered, setFiltered, removeFilters } = useContext(FilterSearchContext);
    
    const [searchInput, setSearchInput] = useState('');
    const [isDroppedDown, setIsDroppedDown] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFiltered(false);
        removeFilters();
        searchCars(searchInput);
        setSearchInput('');
        setSearched(true);   
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleResetSearch = () => {
        setSearched(false);
        resetRenderList();
    }

    const handleRemoveFilter = () => {
        removeFilters();
        setFiltered(false);
    }

    const handleSelect = (e) => {
        saveSelects(e.target.value, e.target.id)
        setFiltered(true)
        setSearched(false);
    }  
   
    const handleSlide = (e) => {
        setSearched(false);
        saveSliders(e)
        setFiltered(true)
    }

    return (
        <div className={style.search}>
            <form onSubmit={handleSubmit}>
                <div className="text-center py-3 px-1">

                    {/*  Search input  */}
                    <input className={style.searchInput} type="text" placeholder="Search..." value={searchInput} onChange={handleChange}/>
                    <button type="submit" className={style.searchIcon}><img src="./assets/icons/search-icon.png" alt="search"/></button>
                
                    {/* Reset list button */}
                    <div onClick={handleResetSearch} className={`btn button blue-button ${style.clearBtn} ${!searched && style.disabledBtn}`}>Clear search</div>

                    {/* Fiter button */}
                    <button className="btn btn-lg mr-3" type="button" onClick={() => setIsDroppedDown(isDroppedDown ? false : true)}>
                        Filter
                        {isDroppedDown ? <div className={style.arrowUp}></div> : <div className={style.arrowDown}></div>}
                    </button>
                    
                </div>
            </form>
                {/* Drop down */}
                {isDroppedDown && <div className={`rounded-bottom py-1 px-5 ${style.dropDown}`}>
                    <form>
                        {/* Select lists */}
                        <div className={`row ${style.selects}`}>
                            {selectLists.map(listObject => {
                                return (
                                    <div className={`col-md ${style.selectWrapper}`} key={listObject.name}>
                                        <label htmlFor={listObject.name}>Select {listObject.name}</label>
                                        <div className={`customSelect ${style.customSelect}`}>
                                            <select name={listObject.name} id={listObject.name} onChange={handleSelect} value={listObject.value}>
                                                <option value="all">All</option>
                                                {listObject.list.length && listObject.list.map(listItem => {
                                                    return (
                                                        <option key={listItem}>{listItem}</option>
                                                )})}
                                            </select>
                                            <span className="focus"></span>
                                        </div>
                                    </div>
                            )})}
                        </div>

                        {/* Range sliders */}
                        <div className="row justify-content-between mt-3">
                            {/*  Loop sliders in pairs in columns, min and max  */}
                            {sliders && sliders.map((sliderPair, index) => {
                                return (
                                    <div className={`col-md-4 ${style.sliderColumn}`} key={index}>
                                        {/*  Loop each min and max, slider  */}
                                        {sliderPair.map(slider => {
                                            return (
                                                <div key={slider.name} className={style.slideWrapper}>
                                                    <div className={style.labels}>
                                                        <label className={style.label} htmlFor={slider.name}>{slider.name}</label>
                                                        <label htmlFor={slider.name}>
                                                            {slider.name.includes("price") ? formatSum(slider.value) : slider.value}
                                                        </label>
                                                    </div>
                                                    <div className={style.slideContainer}>
                                                        <input className={style.slider} id={slider.name} type="range" min={slider.minValue} max={slider.maxValue} step={slider.steps} value={slider.value} onChange={handleSlide}></input> 
                                                    </div>
                                                </div>
                                        )})}   
                                    </div>
                            )})}
                        </div>
                            {/*  Remove filters button  */}
                            <div className="text-end"><div onClick={handleRemoveFilter} className={`btn button blue-button ${!filtered && style.disabledBtn} ${style.btn}`}>Remove filters</div></div>
                    </form>
                </div>}
        </div>
    );
}
 
export default Search;