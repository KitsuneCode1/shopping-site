import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Pages/Home";
import ProductDetails from "./components/Pages/ProductDetails";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
