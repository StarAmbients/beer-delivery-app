/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
// https://www.npmjs.com/package/react-s-alert/v/1.4.0
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
      alert(`<h1>Ocorreu um erro ao carregar os pedidos.
      Por favor, tente novamente mais tarde.</h1>
      `, {
        position: 'bottom-right',
        effect: 'slide',
        html: true,
      });
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
