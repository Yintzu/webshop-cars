import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Footer from './components/Footer';
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import CarContextProvider from './contexts/CarContext';
import UserContext from './contexts/UserContext';
import SearchContext from './contexts/SearchContext';
import FilterSearchContext from './contexts/FilterSearchContext';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <UserContext>
          <ShoppingCartContext>
            <SearchContext>
              <FilterSearchContext>
                <BrowserRouter>
                  <ScrollToTop />
                  <Navbar />
                  <Route exact path="/" component={Hero}/>
                  <div className="site-container">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    {/* <Route exact path="/testpage" component={TestPage} /> */}
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/confirmation" component={Confirmation} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/details/:id" component={Details} />
                    <Route exact path="/register" component={CreateAccount}/>
                  </div>
                  <Footer />
                </BrowserRouter>
              </FilterSearchContext>
            </SearchContext>
          </ShoppingCartContext>
        </UserContext>
      </CarContextProvider>
    </div>
  );
}

export default App;
