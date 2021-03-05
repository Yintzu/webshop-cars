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

    const filterCars = (inputValue) => {
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

    const values={
      searchResult,
      filterCars,
      setSearchResult,
      renderList,
      resetRenderList,
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;
