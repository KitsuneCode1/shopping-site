import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Home from "./components/Pages/Home";
import ProductDetails from "./components/Pages/ProductDetails";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import About from "./components/Pages/About";
import Shop from "./components/Pages/Shop";
import Blog from "./components/Pages/Blog";
import FAQ from "./components/Pages/FAQ";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer/Footer";

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
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
