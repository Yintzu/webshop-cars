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

    // Resets the rendered list to all cars
    const resetRenderList = () => {
        setRenderList(cars);
    }


    /* Filter search arrays */
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);
    const [yearArray, setYearArray] = useState([]);
    const filterLists = [
        {listName: "make", list: makeArray}, 
        {listName: "model", list: modelArray}, 
        {listName: "year", list: yearArray}
    ];

    const createFilterArrays = (list) => {
        let tempArray = []
        cars.forEach(car => {
            if (!tempArray.includes(car[list]))
            tempArray.push(car[list])
        })
        if(list === 'year') {
            return tempArray.sort().reverse()
        }
        return tempArray.sort()
    }

    useEffect(() => {
        setMakeArray(createFilterArrays("make"))
        setModelArray(createFilterArrays("model"))
        setYearArray(createFilterArrays("year"))
    },[cars])

    const [make, setMake] = useState(null);
    const [model, setModel] = useState(null);
    const [year, setYear] = useState(null);

    const saveFilters = (value) => {
        if(value !== 'all'){
            if(makeArray.includes(value)){
                setMake(value)
            }if(modelArray.includes(value)){
                setModel(value)
            }if(yearArray.includes(Number(value))){
                setYear(Number(value))
            }
        } else {
            setMake(null)
            setModel(null)
            setYear(null)
        }
    }
    useEffect(() => {
        saveFilters();
    },[make, model, year])

    /*  Filter sliders */
    const [minPrice, setMinPrice] = useState("0")
    const [maxPrice, setMaxPrice] = useState("10")
    const [minMiles, setMinMiles] = useState("0")
    const [maxMiles, setMaxMiles] = useState("10")

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
        if(e.target.id === "min price") {
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
      saveSliders
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
