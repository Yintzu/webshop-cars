import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Details from './pages/Details';
import Footer from './components/Footer';
import TestPage from './pages/TestPage';
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import CarContextProvider from './contexts/CarContext';
import UserContext from './contexts/UserContext';
import CarCard from './components/CarCard';
import CarList from './components/CarList';

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <UserContext>
          <ShoppingCartContext>
            <BrowserRouter>
              <Navbar />
              <div className="site-container">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/testpage" component={TestPage} />
                <Route exact path="/checkout" component={Checkout} />
                <Route exact path="/confirmation" component={Confirmation} />
                <Route exact path="/:id" component={Details} />
              </div>
              <CarList></CarList>
              <Footer />
            </BrowserRouter>
          </ShoppingCartContext>
        </UserContext>
      </CarContextProvider>
    </div>
  );
}

export default App;
