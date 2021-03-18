import {
    createContext,
    useState,
    useEffect,
    useContext
} from "react";
import { CarContext } from './CarContext';


export const SearchContext = createContext();

const SearchContextProvider = (props) => {
    const [searchResult, setSearchResult] = useState([]);
    const [renderList, setRenderList] = useState([]);
    const [searched, setSearched] = useState(false);
    const { cars } = useContext(CarContext);
    
    useEffect(() => {
        setRenderList(cars);
    }, [cars]);

    const searchCars = (inputValue) => {
        // Split the input-string into an array
        let inputArray = inputValue.toLowerCase().split(' ');
        // let carsArray;
        // if (filtered) {
        //     carsArray = [...renderList];
        // } else {
        //     carsArray = [...cars];
        // }

        // Check each item in cars-array
        // Check each word in the inputArray to see if one or more matches the matchString created for each car
        let freeSearchResults = [0, []];
        cars.forEach(car => {
            let matchString = `${car.make} ${car.model} ${car.year}`.
            toLowerCase();
            let matches = 0;
            inputArray.forEach(word => {
                if (matchString.includes(word)) {
                    matches++;
                }
            })

            if (matches === 0) {
                return;
            } else if (matches === freeSearchResults[0]) {
                // If this car matches the same amount of words as before, add this to current array
                freeSearchResults[1].push(car);
            } else if (matches > freeSearchResults[0]) {
                // If this car matches more words than previous cars, start new list and push this car first
                freeSearchResults[0] = matches;
                freeSearchResults[1] = [];
                freeSearchResults[1].push(car);
            }
        });

        if (freeSearchResults[1].length !== 0) {
            setRenderList(freeSearchResults[1]);
        } else if (inputValue !== '' && freeSearchResults[1].length === 0) {
            setRenderList(null);
        }
    }

    // Resets the rendered list to all cars
    const resetRenderList = () => {
        setRenderList(cars);
    }

    /* Filter search arrays */

    const [make, setMake] = useState('all');
    const [model, setModel] = useState('all');
  
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);

    const filterLists = [
        {listName: "make", list: makeArray, value: make}, 
        {listName: "model", list: modelArray, value: model}
    ];

    // Function to create lists of makes and models, used for rendering out options in selects in the JSX in Search.js
    const createFilterArrays = (list) => {
        let tempArray = []
        cars.forEach(car => {
            if (!tempArray.includes(car[list]))
            tempArray.push(car[list])
        })
        return tempArray.sort()
    }

    useEffect(() => {
        setMakeArray(createFilterArrays("make"))
        setModelArray(createFilterArrays("model"))
    },[cars])

    // Re-render the list of models depending on what make is chosen
    useEffect(() => {
        let modelArrayFilter = cars.filter(car => car.make === make);
        let tempArray = []
        if (make !== 'all') {
            modelArrayFilter.forEach(car => {
                if (!tempArray.includes(car.model))
                tempArray.push(car.model)
            })
            setModel('all');
            setModelArray(tempArray);
        } else {
            setModelArray(createFilterArrays("model"));
        }
    }, [make]);

    // Saving value in selects (make and model)
    // Setting state depending on what is clicked
    const saveFilters = (value, id) => {
        if (id === 'make' && value === 'all') {
            setMake(value);
            setModel(value);
        } else if (id === 'make') {
            setMake(value);
        } else if (id === 'model') {
            setModel(value);
        }
        // if(value !== 'all'){
        //     if(makeArray.includes(value)){
        //         setMake(value)
        //     }if(modelArray.includes(value)){
        //         setModel(value)
        //     }
        // } else {
        //     setMake('all')
        //     setModel('all')
        // }
    }

    // useEffect(() => {
    //     saveFilters();
    // },[make, model]);

    /*  Filter sliders */
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(1000000)
    const [minMiles, setMinMiles] = useState("0")
    const [maxMiles, setMaxMiles] = useState("100000")
    const [minYears, setMinYears] = useState(1960)
    const [maxYears, setMaxYears] = useState(2021)

    const [sliders, setSliders] = useState(null);

    // This array contains some of the states that are watched in useEffect
    const filterWatch = [minPrice, maxPrice, minMiles, maxMiles, minYears, maxYears];
    
    // This data is used to render the sliders in the JSX
    // Is updated when value connected to the sliders is updated
    useEffect(() => {
        setSliders([
            [
                {name: "min year", value: minYears, minValue: "1960", maxValue: "2021", steps: "1"},
                {name: "max year", value: maxYears, minValue: "1960", maxValue: "2021", steps: "1"}
            ],
            [
                {name: "min price", value: minPrice, minValue: "0", maxValue: "1000000", steps: "50000"},
                {name: "max price", value: maxPrice, minValue: "0", maxValue: "1000000", steps: "50000"},
            ],[
                {name: "min miles", value: minMiles, minValue: "0", maxValue: "100000", steps: "5000"},
                {name: "max miles", value: maxMiles, minValue: "0", maxValue: "100000", steps: "5000"}
            ],
        ])

    }, [...filterWatch]);
    
    // Check which slider is pulled and update the value
    const saveSliders = (e) => {
        let value = Number(e.target.value);

        // Reusable functions to set min/max sliders depnding on make, model or year
        const sliderCheckMin = (id, maxCheck, setMin, setMax, stopValue, step) => {
            if(e.target.id === id && value !== stopValue) {
                setMin(value)
                if(value >= maxCheck){
                    setMax(value + step)
                }
            }
        }

        const sliderCheckMax = (id, minCheck, setMax, setMin, stopValue, step) => {
            if(e.target.id === id && value !== stopValue) {
                setMax(value)
                if(value <= minCheck){
                    setMin(value - step)
                }
            }
        }

        // Using function for each slider
        sliderCheckMin('min price', maxPrice, setMinPrice, setMaxPrice, 1000000, 50000);
        sliderCheckMax('max price', minPrice, setMaxPrice, setMinPrice, 0, 50000);

        sliderCheckMin('min miles', maxMiles, setMinMiles, setMaxMiles, 100000, 5000);
        sliderCheckMax('max miles', minMiles, setMaxMiles, setMinMiles, 0, 5000);

        sliderCheckMin('min year', maxYears, setMinYears, setMaxYears, 2021, 1);
        sliderCheckMax('max year', minYears, setMaxYears, setMinYears, 1960, 1);
    }


    // Filter search function
    const filterSearch = () => {
        let filterCarsArray = [...cars];
        
        // Filter based on make
        if (make !== 'all' && model === 'all') {
            filterCarsArray = filterCarsArray.filter(car => car.make === make);
        }
        
        // Filter based on model
        if (model !== 'all') {
            filterCarsArray = filterCarsArray.filter(car => car.model === model);
        }

        // Reusable function for each slider
        const sliderFilter = (slider, min, max) => {
            filterCarsArray = filterCarsArray.filter(car => car[slider] >= min && car[slider] <= max);
        }

        sliderFilter('year', minYears, maxYears);
        sliderFilter('price', minPrice, maxPrice);
        sliderFilter('miles', minMiles, maxMiles);

        // set renderList with the filtered cars array
        setRenderList(filterCarsArray);
    }

    useEffect(() => {
        if (!searched) {
            filterSearch();
        }   
    }, [make, model, searched, ...filterWatch]);
   
    const removeFilters = () => {
        setMinPrice(0)
        setMaxPrice(1000000)
        setMinMiles(0)
        setMaxMiles(100000)
        setMinYears(1960)
        setMaxYears(2021)
        setMake('all')
        setModel('all')
    }
    
    const [filtered, setFiltered] = useState(false)

    const values={
      searchResult,
      searchCars,
      setSearchResult,
      renderList,
      resetRenderList,
      filterLists,
      saveFilters,
      sliders,
      saveSliders,
      searched,
      setSearched,
      removeFilters,
      filtered,
      setFiltered,
      filterSearch,
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
