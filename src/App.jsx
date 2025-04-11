import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import LoginSignUp from "./pages/LoginSignUp";
import Cart from "./pages/Cart";
import Footer from './components/Footer/Footer.jsx';
import women_banner from './assets/hero_image.png';
import men_banner from './assets/men_banner.png';
import kid_banner from './assets/kid_banner.png';


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path="/womens" element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category='kid' />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
