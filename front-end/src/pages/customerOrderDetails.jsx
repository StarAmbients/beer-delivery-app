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
  const { fetchOrderDetail } = ordersStore((state) => state);

  useEffect(() => {
    fetchOrderDetail(orderId, token);
  }, []);

  return (
    <div>
      <NavBar page="customer" />
      <div>
        <h2
          style={ { 'padding-left': '130px',
            'margin-top': '40px' } }
        >
          Detalhes do Pedido

        </h2>
      </div>
      <OrderDetail page="customer" />
      <Details page="customer" />
    </div>
  );
}

export default CustomerOrderDetail;
