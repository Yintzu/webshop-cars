import { createContext, useState, useEffect, useContext } from "react";
import { CarContext } from "../contexts/CarContext";

export const UserContext = createContext();


const UserContextProvider = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const { boughtCars, setBoughtCars } = useContext(CarContext)

  const [orderInfo, setOrderInfo] = useState([]);

  const [users, setUsers] = useState(
    () => {
      const usersLocalData = localStorage.getItem('users');
      return usersLocalData ? JSON.parse(usersLocalData) : []
    }
  );

  const [loggedInUser, setLoggedInUser] = useState(
    () => {
      const loggedInUserLocalData = JSON.parse(localStorage.getItem('loggedInUser'));
      if (loggedInUserLocalData) {
        return users.find(user => user.email == loggedInUserLocalData)
      } else { return null }
    }
  );

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [
    () => {
      if (loggedInUser.orders) {
        return loggedInUser.orders
      } else return null
    }
  ]);

  useEffect(() => {
    if (loggedInUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser.email))
    }
  }, [
    () => {
      if (loggedInUser.email) {
        return loggedInUser.email
      } else return loggedInUser
    }
  ]);

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