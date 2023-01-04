/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';
import NavBar from '../components/NavBar';
import OrderDetail from '../components/OrderDetail';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import PersonOrderDetailsSComponent from '../styles/personOrderDetails.style';

function CustomerOrderDetail() {
  const { orderId } = useParams();
  const { token } = getUserLocalStorage();
  const { fetchOrderDetail } = ordersStore((state) => state);

  useEffect(() => {
    fetchOrderDetail(orderId, token);
  }, []);

  return (
    <PersonOrderDetailsSComponent>
      <NavBar page="customer" />
      <div
        className="title_detalhes_pedido"
      >
        <h3>Detalhe do Pedido</h3>
      </div>
      {/* <div>
        <h2
          style={ { 'padding-left': '130px',
            'margin-top': '40px' } }
        >
          Detalhes do Pedido

        </h2>
      </div> */}
      <container>
        <OrderDetail page="customer" />
        <table-container>
          <Details page="customer" />
        </table-container>
      </container>
    </PersonOrderDetailsSComponent>
  );
}

export default CustomerOrderDetail;
