import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productscreen";
import CartScreen from "./screens/cartscreen";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/product/:id" element={<ProductScreen />} />
        <Route exact path="/cart/" element={<CartScreen />} />
        <Route exact path="/cart/:id" element={<CartScreen />} />
      </Routes>
    );
  }
}

export default App;
