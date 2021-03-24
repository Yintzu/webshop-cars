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
    const [discountedCars, setDiscountedCars] = useState([
        {
            "make": "Panoz",
            "model": "Esperante",
            "year": 2006,
            "vin": "WAUKF98E25A286122",
            "city": "Lanxi",
            "descShort": "congue risus semper porta volutpat",
            "descLong": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
            "price": 232476,
            "discount":0.6,
            "discountedprice":function () {
                return Math.round(this.price*this.discount)
            },
            "miles": 24263,
            "carImg": "../assets/car-pictures/Panoz-Esperante-2006.jpg"
          },
          {
            "make": "Chevrolet",
            "model": "Camaro",
            "year": 1973,
            "vin": "1D4PT5GK0BW487259",
            "city": "Santa Rosa",
            "descShort": "in lectus pellentesque at nulla suspendisse potenti cras in purus eu",
            "descLong": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
            "price": 554963,
            "discount":0.6,
            "discountedprice":function () {
                return Math.round(this.price*this.discount)
            },
            "miles": 15432,
            "carImg": "../assets/car-pictures/Chevrolet-Camaro-1973.jpg"
          },
          {
            "make": "Oldsmobile",
            "model": "98",
            "year": 1992,
            "vin": "WAUVT68E95A768929",
            "city": "Tagana-an",
            "descShort": "ultrices enim lorem ipsum dolor",
            "descLong": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
            "price": 509536,
            "discount":0.6,
            "discountedprice":function () {
                return Math.round(this.price*this.discount)
            },
            "miles": 45262,
            "carImg": "../assets/car-pictures/Oldsmobile-98-1992.jpg"
          }
    ]);

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

    // Formats sum into $123.123
    const formatSum = (sum) => `$${new Intl.NumberFormat('de-DK', { currency: 'EUR', style: 'decimal', minimumFractionDigits: 0 }).format(Math.round(sum / 10))}`;

    // Check if car is in discount array and apply price and red color
    const checkCarDiscount = (car) => {
      let discountedCar = discountedCars.find(discountCar => discountCar.vin === car.vin);
    
      return discountedCar ? <span style={{color: 'red'}}>{formatSum(discountedCar.discountedprice())}</span> : formatSum(car.price);
    }
    
    // Direction to details page
    const viewCar = (clickedCar, history) => {
        history.push(`/details/${clickedCar.vin}`)
    }

    const values={
      cars,
      viewCar,
      boughtCars,
      setBoughtCars,
      boughtCheck,
      discountedCars,
      checkCarDiscount,
      formatSum,
    }

    return (
        <CarContext.Provider value={values}>
            {props.children}
        </CarContext.Provider>
    );
}

export default CarContextProvider;