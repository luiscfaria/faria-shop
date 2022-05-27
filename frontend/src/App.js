import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productscreen";
import CartScreen from "./screens/cartscreen";
import LoginScreen from './screens/loginscreen'
import RegisterScreen from './screens/registerScreen'
import ProfileScreen from './screens/profilescreen'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/product/:id" element={<ProductScreen />} />
        <Route exact path="/cart/" element={<CartScreen />} />
        <Route exact path="/cart/:id" element={<CartScreen />} />
        <Route exact path="/login" element={<LoginScreen />} />
        <Route exact path="/register" element={<RegisterScreen />} />
        <Route exact path="/profile" element={<ProfileScreen />} />
      </Routes>
    );
  }
}

export default App;
