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

    const saveFilters = (value) => {
        if(value !== 'all'){
            if(makeArray.includes(value)){
                setMake(value)
            }if(modelArray.includes(value)){
                setModel(value)
            }
        } else {
            setMake('all')
            setModel('all')
        }
    }
    useEffect(() => {
        saveFilters();
    },[make, model])

    /*  Filter sliders */
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

    useEffect(() => {
        setSliders([
            [
                {name: "min price", value: minPrice},
                {name: "max price", value: maxPrice},
            ],[
                {name: "min miles", value: minMiles},
                {name: "max miles", value: maxMiles}
            ]
        ])

    }, [minPrice, maxPrice, minMiles, maxMiles])
    
    
const saveSliders = (e) => {
        let value = Number(e.target.value);

        if(e.target.id === "min price" && value !== 1000000) {
            setMinPrice(value)
            if(value >= maxPrice){
                setMaxPrice(value + 50000)
            }
        }
        if(e.target.id === "max price" && value !== 0){
            setMaxPrice(e.target.value)
            if(value <= minPrice){
                setMinPrice(value - 50000) 
            }
        }
        if(e.target.id === "min miles" && value !== 1000000){
            setMinMiles(e.target.value)
            if(value >= maxMiles){
                setMaxMiles(value + 50000)
            }
        }
        if(e.target.id === "max miles" && value !== 0){
            setMaxMiles(e.target.value)
            if(value <= minMiles){
                setMinMiles(value - 50000)
            }
        }
    }
        
    const removeFilters = () => {
        setMinPrice(0)
        setMaxPrice(1000000)
        setMinMiles(0)
        setMaxMiles(1000000)
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
      setFiltered
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
