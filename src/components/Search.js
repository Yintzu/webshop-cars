import { useState, useContext } from 'react';
import style from '../css/Search.module.css';
import { SearchContext } from '../contexts/SearchContext';
import { FilterSearchContext } from '../contexts/FilterSearchContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const { searchCars, searched, setSearched, resetRenderList} = useContext(SearchContext);
    const { formatSum } = useContext(ShoppingCartContext);

    const { selectLists, saveSelects, sliders, saveSliders, filtered, setFiltered, removeFilters } = useContext(FilterSearchContext);
    
    const [isClicked, setIsClicked] = useState(false);

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
        removeFilters()
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
                    <div onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch} ${!searched && style.disabledBtn}`}>Clear search</div>

                    {/* Fiter button */}
                    <button className="btn btn-lg mr-3" type="button" onClick={() => setIsClicked(isClicked ? false : true)}>
                        Filter
                        {isClicked ? <div className={style.arrowUp}></div> : <div className={style.arrowDown}></div>}
                    </button>
                    
                </div>
            </form>
                {/* Drop down */}
                {isClicked && <div className={`rounded-bottom py-1 px-5 ${style.dropDown}`}>
                    <form>
                        {/* Select lists */}
                        <div className={`row ${style.selects}`}>
                            {selectLists.map(listObject => {
                                return (
                                    <div className={`col-md ${style.selectWrapper}`} key={listObject.listName}>
                                        <label htmlFor={listObject.listName}>Select {listObject.listName}</label>
                                        <div className={`customSelect ${style.customSelect}`}>
                                            <select name={listObject.listName} id={listObject.listName} onChange={handleSelect} value={listObject.value}>
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
                            {sliders && sliders.map((list, index) => {
                                return (
                                    <div className={`col-md-4 ${style.sliderColumn}`} key={index}>
                                        {list.map(listObject => {
                                            return (
                                                <div key={listObject.name} className={style.slideWrapper}>
                                                    <div className={style.labels}>
                                                        <label className={style.label} htmlFor={listObject.name}>{listObject.name}</label>
                                                        <label htmlFor={listObject.name}>
                                                            {listObject.name.includes("price") ? formatSum(listObject.value) : listObject.value}
                                                            </label>
                                                    </div>
                                                    <div className={style.slideContainer}>
                                                        <input className={style.slider} id={listObject.name} type="range" min={listObject.minValue} max={listObject.maxValue} step={listObject.steps} value={listObject.value} onChange={handleSlide}></input> 
                                                    </div>
                                                </div>
                                        )})}   
                                    </div>
                            )})}
                        </div>
                            {/*  Remove filters button  */}
                            <div className="text-end"><div onClick={handleRemoveFilter} className={`btn btn-sm ${style.clearSearch} ${!filtered && style.disabledBtn} ${style.btn}`}>Remove filters</div></div>
                    </form>
                </div>}
        </div>
    );
}
 
export default Search;