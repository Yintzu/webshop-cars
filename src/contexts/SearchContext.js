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
        console.log(inputArray);
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
        console.log('testArray:', testArray);
        console.log(filteredCars);

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
    const filterLists = [{listName: "make", list: makeArray}, {listName: "model", list: modelArray}, {listName: "year", list: yearArray}];

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

  
    const values={
      searchResult,
      searchCars,
      setSearchResult,
      renderList,
      resetRenderList,
      filterLists,
      saveFilters,
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
