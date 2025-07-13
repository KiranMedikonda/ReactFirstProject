import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MainLayout from './MainLayout';
// import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* Placeholder routes for sidebar */}
            <Route path="/orders" element={<div style={{ padding: '2rem' }}><h2>Orders</h2><p>Your orders will appear here.</p></div>} />
            <Route path="/buy-again" element={<div style={{ padding: '2rem' }}><h2>Buy Again</h2><p>Items you can buy again will appear here.</p></div>} />
            <Route path="/account" element={<div style={{ padding: '2rem' }}><h2>Account</h2><p>Manage your account here.</p></div>} />
            <Route path="/lists" element={<div style={{ padding: '2rem' }}><h2>Lists</h2><p>Your lists will appear here.</p></div>} />
          </Route>
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
