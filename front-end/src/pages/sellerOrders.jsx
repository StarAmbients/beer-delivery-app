/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import Card from '../components/Card';

function SellerOrders() {
  const { orders, fetchSellerOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();

  useEffect(() => {
    try {
      fetchSellerOrders(id, token);
    } catch (error) {
      console.error(error);
      alert(`Ocorreu um erro ao carregar os pedidos.
      Por favor, tente novamente mais tarde.
      `);
    }
  }, []);

  return (
    <>
      <NavBar page="seller" />
      <Card orders={ orders } page="seller" />
    </>
  );
}

export default SellerOrders;
