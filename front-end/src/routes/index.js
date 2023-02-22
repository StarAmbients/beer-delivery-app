import { Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import CustomerProducts from '../pages/customerProducts';
import Login from '../pages/login';
import Register from '../pages/register';
import CustomerCheckout from '../pages/customerCheckout';
import CustomerOrderDetails from '../pages/customerOrderDetails';
import CustomerOrders from '../pages/customerOrders';
import SellerOrders from '../pages/sellerOrders';
import SellerOrderDetails from '../pages/sellerOrderDetails';
import AdminManage from '../pages/adminManage';
import SellerProducts from '../pages/sellerProducts';

function IndexRouter() {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/login" replace /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="/customer/orders" element={ <CustomerOrders /> } />
      <Route path="/customer/orders/:orderId" element={ <CustomerOrderDetails /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/seller/newproduct" element={ <SellerProducts /> } />
      <Route path="/seller/orders/:orderId" element={ <SellerOrderDetails /> } />
      <Route path="/admin/manage" element={ <AdminManage /> } />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default IndexRouter;
