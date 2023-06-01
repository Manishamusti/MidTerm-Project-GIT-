import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminLogin from './Components/AdminLogin';
import ListRestautantComponent from './Components/AdminHome';
import AddRestaurant from './Components/AddRestaurant.jsx';
import UpdateRestaurant from './Components/UpdateRestaurant';
import DeleteRestaurant from './Components/DeleteRestautant';
import Try from './Components/Home';
import Cart from './Components/Cart';
import PaymentPage from './Components/Payment';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/adminhome" element={<ListRestautantComponent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/addrestaurant" element={<AddRestaurant />} />
            <Route path="/updaterestaurant" element={<UpdateRestaurant />} />
            <Route path="/deleterestaurant" element={<DeleteRestaurant />} />
            <Route path="/home" element={<Try />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage/>} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
