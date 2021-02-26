import ShoppingCartContext from "./contexts/ShoppingCartContext";
import Checkout from "./pages/Checkout";

function App() {
  return <div className="App">
    <ShoppingCartContext>
      <Checkout />
    </ShoppingCartContext>
  </div>;
}

export default App;
