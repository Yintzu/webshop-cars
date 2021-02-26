import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Details from './pages/Details';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/confirmation" component={Confirmation}/>
        <Route exact path="/details" component={Details}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
 