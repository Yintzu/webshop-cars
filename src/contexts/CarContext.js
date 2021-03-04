import {
    createContext,
    useState,
    useEffect
} from "react";

export const CarContext = createContext()

const CarContextProvider = (props) => {
    const [cars, setcars]= useState([])

    const createCarList  =() =>{
        const carlist=require("../json/cars.json")
        const carlists=carlist.map(car=>{ 
            return {
                ...car,
                carImg:`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`
            }
        })
        console.log(carlists);
        setcars(carlists)
    }
    useEffect(()=>{
        createCarList();
    },[])
    
    /* Direction to  details page*/
    const viewCar = (clickedCar, history) => {
        history.push(`/details/${clickedCar.vin}`) 
    }

    /* Search function */
    const [searchResult, setSearchResult] = useState([]);
    const [renderList, setRenderList] = useState([]);

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

        // filteredCars = cars.filter(car => {
        //     let matchString = `${car.make} ${car.model} ${car.year}`.toLowerCase();
        //     // let matchArray = [car.make.toLowerCase(), car.model.toLowerCase(), car.year];

        //     if (matchString.includes(inputValue.toLowerCase())) {
        //         return true
        //     }

        //     // if (inputValue.includes(matchArray[0]) || inputValue.includes(matchArray[1]) || inputValue.includes(matchArray[2]) ) {
        //     //     return true
        //     // }
        // })

        // Checks if something is in the filtered array
        // Checks if there is nothing in the array but input is not empty
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
      cars,
      viewCar,
      searchResult,
      filterCars,
      setSearchResult,
      renderList,
      resetRenderList,
    }

    return (
        <CarContext.Provider value={values}>
            {props.children}
        </CarContext.Provider>
    );
}

export default CarContextProvider;