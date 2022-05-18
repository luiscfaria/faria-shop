import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productscreen";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/product/:id" element={<ProductScreen />} />
      </Routes>
    );
  }
}

export default App;
