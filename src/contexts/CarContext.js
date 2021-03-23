import {
    createContext,
    useState,
    useEffect
} from "react";

export const CarContext = createContext()

const CarContextProvider = (props) => {
    const [cars, setCars]= useState([])
    const [boughtCars, setBoughtCars] = useState(
        () => {
            const boughtCarsLocalData = localStorage.getItem('boughtCars');
            return boughtCarsLocalData ? JSON.parse(boughtCarsLocalData) : []
          }
    );

    const createCarList = () => {
        const carlist=require("../json/cars.json")
        const carlists=carlist.map(car=>{ 
            return {
                ...car,
                carImg:`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`
            }
        })
        // console.log(carlists);
        setCars(carlists)
    }

    // Create the list of cars with img-link on start of app
    useEffect(()=>{
        createCarList();
    }, [])

    useEffect(() => {
        localStorage.setItem('boughtCars', JSON.stringify(boughtCars))
      }, [boughtCars]);

    // Check the boughtCars-array to see if a car is bought
    const boughtCheck = (car) => {
        let bought = false
        boughtCars.forEach(boughtItem => {
          if (boughtItem.vin === car.vin) {
            bought = true;
          }
        })
        if (bought){return true} else {return false}
      }
    
    /* Direction to  details page */
    const viewCar = (clickedCar, history) => {
        history.push(`/details/${clickedCar.vin}`)
    }

    const values={
      cars,
      viewCar,
      boughtCars,
      setBoughtCars,
      boughtCheck,
    }

    return (
        <CarContext.Provider value={values}>
            {props.children}
        </CarContext.Provider>
    );
}

export default CarContextProvider;