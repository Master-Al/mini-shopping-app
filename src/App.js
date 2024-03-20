import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Item from "./pages/Product";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";

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
            <Route path="/product/:productId" element={<Item />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
