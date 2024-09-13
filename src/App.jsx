import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./styles/main.scss";

const App = () => {
  return (
    <ShopProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
};

export default App;
