import {
    createContext,
    useState,
    useEffect
} from "react";

export const CarContext = createContext()

const CarContextProvider = (props) => {
    const [cars, setcars]= useState([])
    const [boughtCars, setBoughtCars] = useState([]);

    const createCarList  =() =>{
        const carlist=require("../json/cars.json")
        const carlists=carlist.map(car=>{ 
            return {
                ...car,
                carImg:`../assets/car-pictures/${car.make}-${car.model}-${car.year}.jpg`
            }
        })
        // console.log(carlists);
        setcars(carlists)
    }
    useEffect(()=>{
        createCarList();
    },[])
    
    /* Direction to  details page */
    const viewCar = (clickedCar, history) => {
        history.push(`/details/${clickedCar.vin}`)
    }

    const values={
      cars,
      viewCar,
      boughtCars,
      setBoughtCars
    }

    return (
        <CarContext.Provider value={values}>
            {props.children}
        </CarContext.Provider>
    );
}

export default CarContextProvider;