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
                carImg:`./assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`
            }
        })
        console.log(carlists);
        setcars(carlists)
    }
    useEffect(()=>{
        createCarList();
    },[])
    
    
    const viewCar = (clickedCar, history) => {
        history.push(`/details/${clickedCar.vin}`) 
    }

    /* Search function */
    const [searchResult, setSearchResult] = useState([]);
    const [renderList, setRenderList] = useState(cars);
    const filterCars = (inputValue) => {
        let filteredCars = []
        filteredCars = cars.filter(car => {
            let matchString = `${car.make} ${car.model} ${car.year}`;
            if (matchString.toLowerCase().includes(inputValue.toLowerCase())) {
                return true
            }
        })
        console.log(filteredCars)  
    }


    const values={
      cars,
      viewCar,
      searchResult,
      filterCars,
      setSearchResult,
      renderList,
    }
    return (
        <CarContext.Provider value={values}>
            {props.children}

        </CarContext.Provider>
    );
}

export default CarContextProvider;