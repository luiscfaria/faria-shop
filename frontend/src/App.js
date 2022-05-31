import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/homescreen";
import ProductScreen from "./screens/productscreen";
import CartScreen from "./screens/cartscreen";
import LoginScreen from './screens/loginscreen'
import RegisterScreen from './screens/registerScreen'
import ProfileScreen from './screens/profilescreen'
import ShippingScreen from './screens/shippingscreen'
import PaymentScreen from './screens/paymentscreen'
import PlaceOrderScreen from './screens/placeorderscreen'
import OrderScreen from "./screens/orderscreen";
import UserListScreen from "./screens/userlistscreen";
import UserEditScreen from "./screens/usereditscreen";
import ProductListScreen from "./screens/productlistscreen";
import ProductEditScreen from "./screens/producteditscreen";
import OrderListScreen from "./screens/orderlistscreen";


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
        <Route exact path="/shipping" element={<ShippingScreen />} />
        <Route exact path="/payment" element={<PaymentScreen />} />
        <Route exact path="/placeorder" element={<PlaceOrderScreen />} />
        <Route exact path="/orders/:id" element={<OrderScreen />} />
        <Route exact path="/admin/userlist" element={<UserListScreen />} />
        <Route exact path="/admin/user/:id/edit" element={<UserEditScreen />} />
        <Route exact path="/admin/productlist" element={<ProductListScreen />} />
        <Route exact path="/admin/product/:id/edit" element={<ProductEditScreen />} />
        <Route exact path="/admin/orderlist" element={<OrderListScreen />} />
      </Routes>
    );
  }
}

export default App;
