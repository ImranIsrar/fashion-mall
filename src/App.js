import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import 'react-owl-carousel2/src/owl.theme.default.css';
import Footer from "./components/Footer";
import CartSidebar from "./components/CartSidebar";
import SingleProduct from "./components/SingleProduct";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";


function App() {
  
  const [currentCart, setCurrentCart] = useState(false);
  // Open CartSidebar
  const cartHandle = () => {
    setCurrentCart(true);
    document.getElementsByTagName("body")[0].classList.add('remove-scrollbar');
  }

  // Close CartSidebar
  const cartCloseHandle = () => {
    setCurrentCart(false);
    document.getElementsByTagName("body")[0].classList.remove('remove-scrollbar');
  }

  return (
    <div className="app">
      <Router>
        <Header cartHandle={cartHandle} />
        {currentCart && <CartSidebar cartCloseHandle={cartCloseHandle} />}
        <Routes>
          <Route path="/" element={<Home OwlCarousel={OwlCarousel}/>} />
          <Route path="/products/categories/:category" element={<Category />} />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
