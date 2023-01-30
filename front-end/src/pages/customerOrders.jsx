/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import NavBar from '../components/NavBar';
import Card from '../components/Card';

function CustomerOrders() {
  const { orders, fetchUserOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();

  useEffect(() => {
    try {
      fetchUserOrders(id, token);
    } catch (error) {
      console.error(error);
      alert(`Ocorreu um erro ao carregar os pedidos.
      Por favor, tente novamente mais tarde.
      `);
    }
  }, []);

  return (
    <>
      <NavBar page="customer" />
      <Card orders={ orders } page="customer" />
    </>
  );
}

export default CustomerOrders;
