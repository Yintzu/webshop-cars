import { useState, useContext, useEffect } from 'react';
import style from '../css/Search.module.css';
import { SearchContext } from '../contexts/SearchContext';

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const { searchCars, resetRenderList, filterLists, saveFilters, searched, setSearched, saveSliders } = useContext(SearchContext);
    const [isClicked, setIsClicked] = useState(false);

    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000000)
    const [minMiles, setMinMiles] = useState("0")
    const [maxMiles, setMaxMiles] = useState("1000000")

    const [sliders, setSliders] = useState([
        [
            {name: "min price", value: minPrice},
            {name: "max price", value: maxPrice},
        ],[
            {name: "min miles", value: minMiles},
            {name: "max miles", value: maxMiles}
        ]
    ])

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
   
    const handleSlide = (e) => {
        let number = Number(e.target.value);
        let array;
        if (e.target.id.includes('price')) {
            array = [maxPrice, minPrice, setMaxPrice, setMinPrice];
        } else {
            array = [maxMiles, minMiles, setMaxMiles, setMinMiles];
        }

        if(e.target.id === "min price" && number <= maxPrice && number !== 1000000){
            setMinPrice(number)
            if (number >= maxPrice) {
                setMaxPrice(number + 50000);
            }
        }
        if(e.target.id === "max price" && number >= minPrice && number !== 0){
            setMaxPrice(number)
            if (number <= minPrice) {
                setMinPrice(number - 50000)
            }
        }
        if(e.target.id === "min miles"){
            setMinMiles(number)
        }
        if(e.target.id === "max miles"){
            setMaxMiles(number)
        }
    }

    useEffect(() => {
        setSliders(([
            [
                {name: "min price", value: minPrice},
                {name: "max price", value: maxPrice},
            ],[
                {name: "min miles", value: minMiles},
                {name: "max miles", value: maxMiles}
            ]
        ]))
    }, [maxPrice, minPrice, maxMiles, minMiles])

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
                    <div onClick={handleResetSearch} className={`btn btn-sm ${style.clearSearch} ${!searched && style.disabledBtn}`}>Clear search</div>
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
                        {sliders && sliders.map((list, index) => {
                            return (
                                <div key={index} className={`col-md-5 ${style.sliderColumn}`}>
                                    {list.map(listObject => {
                                        return (
                                            <div key={listObject.name} className={style.slideWrapper}>
                                                <div className={style.labels}>
                                                    <label className={style.label} htmlFor={listObject.name}>{listObject.name}</label>
                                                    <label htmlFor={listObject.name}>{listObject.value}</label>
                                                </div>
                                                <div className={style.slideContainer}>
                                                    <input className={style.slider} id={listObject.name} type="range" min="0" max="1000000" step="50000" value={listObject.value} onChange={handleSlide}></input> 
                                                </div>
                                            </div>
                                        )
                                    })}   
                                </div>
                            )
                        })}
                    </div>
                </div>}
            </form>
        </div>
    );
}
 
export default Search;