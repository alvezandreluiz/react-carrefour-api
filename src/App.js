import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
    setCartItems(prevItems => [...prevItems, product]);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} cartItems={cartItems} />
      <Content addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
