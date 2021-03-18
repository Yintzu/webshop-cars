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

    const values={
      searchResult,
      setSearchResult,
      searchCars,
      searched,
      setSearched,
      renderList,
      setRenderList,
      resetRenderList,
    }

    return (
        <SearchContext.Provider value={values}>
            {props.children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;