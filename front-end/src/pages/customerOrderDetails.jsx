/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import NavBar from '../components/NavBar';
import OrderDetail from '../components/OrderDetail';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';

function CustomerOrderDetail() {
  const { orderId } = useParams();
  const { token } = getUserLocalStorage();
  const { orderDetail, fetchOrderDetail } = ordersStore((state) => state);

  useEffect(() => {
    fetchOrderDetail(orderId, token);
  }, [orderDetail]);

  return (
    <div>
      <NavBar page="customer" />
      <h2>Detalhes do Pedido</h2>
      <OrderDetail page="customer" />
      <Details page="customer" />
    </div>
  );
}

export default CustomerOrderDetail;
