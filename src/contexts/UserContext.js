import { createContext, useState, useEffect, useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export const UserContext = createContext();


const UserContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { boughtCars, setBoughtCars } = useContext(CarContext)
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [users, setUsers] = useState(
    () => {
      const usersLocalData = localStorage.getItem('users');
      return usersLocalData ? JSON.parse(usersLocalData) : []
    }
  );
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users]);

  const values = {
    boughtCars,
    setBoughtCars,
    orderInfo,
    setOrderInfo,
    loggedInUser,
    setLoggedInUser,
    users,
    setUsers,
    setIsClicked,
    isClicked
  }
  return (
    <UserContext.Provider value={values}>
      {props.children}
    </UserContext.Provider>);
}

export default UserContextProvider;