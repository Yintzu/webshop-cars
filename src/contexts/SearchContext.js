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
        // console.log(inputArray);
        let filteredCars = []

        // Check each item in cars-array
        // Check each word in the inputArray to see if one or more matches the matchString
        let testArray = [0, []];
        cars.forEach(car => {
            let matchString = `${car.make} ${car.model} ${car.year}`.
            toLowerCase();
            let counter = 0;
            inputArray.forEach(word => {
                if (matchString.includes(word)) {
                    counter++;
                    if (!filteredCars.includes(car)) {
                        filteredCars.push(car);
                    }
                }
            })
            if (counter === 0) {
                return;
            }
            if (counter === testArray[0]) {
                testArray[1].push(car);
            } else if (counter > testArray[0]) {
                testArray[0] = counter;
                testArray[1] = [];
                testArray[1].push(car);
            }
        });
        filteredCars = [...testArray[1]];
        // console.log('testArray:', testArray);
        // console.log(filteredCars);

        if (filteredCars.length !== 0) {
            setRenderList(filteredCars);
        } else if (inputValue !== '' && filteredCars.length === 0) {
            setRenderList(null);
        }
    }

    // Filter search function
    const filterSearch = () => {
        let filterCarsArray = [...cars];

        // Clear free text search, if there is input in it
        
        // 1, check if make is selected select-input
        // Filter array based on make
        
        // 2, check if model is selected
        // Filter array based on model

        // 3, check if range is set for year
        // Filter array range in year (if car.year is higher than min && lower than max)

        // 4, check if range is set for price
        // Filter 

        // 5, check if range is set for miles
        // Filter

        // set renderList with the filtered cars array

    }

    // Resets the rendered list to all cars
    const resetRenderList = () => {
        setRenderList(cars);
        setMake('all');
        setModel('all');
    }

    const [make, setMake] = useState('all');
    const [model, setModel] = useState('all');
    // const [year, setYear] = useState(null);

    /* Filter search arrays */
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);
    // const [yearArray, setYearArray] = useState([]);
    const filterLists = [
        {listName: "make", list: makeArray, value: make}, 
        {listName: "model", list: modelArray, value: model}, 
        // {listName: "year", list: yearArray}
    ];

    const createFilterArrays = (list) => {
        let tempArray = []
        cars.forEach(car => {
            if (!tempArray.includes(car[list]))
            tempArray.push(car[list])
        })
        // if(list === 'year') {
        //     return tempArray.sort().reverse()
        // }
        return tempArray.sort()
    }

    useEffect(() => {
        setMakeArray(createFilterArrays("make"))
        setModelArray(createFilterArrays("model"))
        // setYearArray(createFilterArrays("year"))
    },[cars])

    

    const saveFilters = (value) => {
        if(value !== 'all'){
            if(makeArray.includes(value)){
                setMake(value)
            }if(modelArray.includes(value)){
                setModel(value)
            }
            // if(yearArray.includes(Number(value))){
            //     setYear(Number(value))
            // }
        } else {
            setMake(null)
            setModel(null)
            // setYear(null)
        }
    }
    useEffect(() => {
        saveFilters();
    },[make, model])

    /*  Filter sliders */
    const [minPrice, setMinPrice] = useState("0")
    const [maxPrice, setMaxPrice] = useState("1000000")
    const [minMiles, setMinMiles] = useState("0")
    const [maxMiles, setMaxMiles] = useState("1000000")

    const sliders = [
        [
            {name: "min price", value: minPrice},
            {name: "max price", value: maxPrice},
        ],[
            {name: "min miles", value: minMiles},
            {name: "max miles", value: maxMiles}
        ]
    ]
   
    const saveSliders = (e) => {
        if(e.target.id === "min price"){
            setMinPrice(e.target.value)
        }
        if(e.target.id === "max price"){
            setMaxPrice(e.target.value)
        }
        if(e.target.id === "min miles"){
            setMinMiles(e.target.value)
        }
        if(e.target.id === "max miles"){
            setMaxMiles(e.target.value)
        }
    }
  
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
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
