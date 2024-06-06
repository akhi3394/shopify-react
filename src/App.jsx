import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Payment from "./components/Payment";
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Wishlist from './components/Wishlist';
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import './App.css'

const App = () => {
  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
