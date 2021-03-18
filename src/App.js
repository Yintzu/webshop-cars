import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Profile from './pages/Profile';
import Details from './pages/Details';
import Footer from './components/Footer';
import TestPage from './pages/TestPage';
import ShoppingCartContext from "./contexts/ShoppingCartContext";
import CarContextProvider from './contexts/CarContext';
import UserContext from './contexts/UserContext';
import SearchContext from './contexts/SearchContext';
import ScrollToTop from './components/ScrollToTop';
import Hero from './components/Hero';
import CreateAccount from './pages/CreateAccount';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <UserContext>
          <ShoppingCartContext>
            <SearchContext>
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
                  <Route exact path="/userpage" component={UserPage} />
                </div>
                <Footer />
              </BrowserRouter>
            </SearchContext>
          </ShoppingCartContext>
        </UserContext>
      </CarContextProvider>
    </div>
  );
}

export default App;
