
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Basket from './Components/Basket';
import Signin from './Components/Signin';
import data from './data';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { products } = data;
  const [cartItems, setCartItem] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) =>x.id === product.id);
    if (exist) {
      setCartItem(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x )
      );
    } else {
      setCartItem([...cartItems, { ...product, qty: 1}]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) =>x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(
        cartItems.filter((x) => x.id !== product.id )
      );
    } else{
      setCartItem(
        cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x )
      );
    }
  };
  return (
    <Router>
      <Header countCartItems={cartItems.length} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="row">
              <Main onAdd={onAdd} products={products} />
              <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems} />
            </div>
          }
        />

        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Router>
  );
}

export default App
