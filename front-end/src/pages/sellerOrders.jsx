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
    fetchSellerOrders(id, token);
  }, []);

  // eslint-disable-next-line sonarjs/no-redundant-boolean, no-self-compare
  return (
    <>
      <NavBar page="seller" />
      <Card orders={ orders } page="seller" />
    </>
  );
}

export default SellerOrders;
