/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import NavBar from '../components/NavBar';

function CustomerOrders() {
  const { orders, fetchUserOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();

  useEffect(() => {
    try {
      fetchUserOrders(id, token);
    } catch (error) {
      console.error(error);
      // eslint-disable-next-line no-alert
      alert(`Ocorreu um erro ao carregar os pedidos.
      Por favor, tente novamente mais tarde.
      `);
    }
  }, []);

  return (
    <div>
      <NavBar page="customer" />
      { orders.length > 0 ? (
        orders.map((o) => (
          <Link to={ `/customer/orders/${o.id}` } key={ o.id }>
            <div>
              <p>Pedido</p>
              <p
                data-testid={ `customer_orders__element-order-id-${o.id}` }
              >
                {o.id}
              </p>
            </div>
            <p
              data-testid={ `customer_orders__element-delivery-status-${o.id}` }
            >
              {o.status}
            </p>
            <div>
              <p
                data-testid={ `customer_orders__element-order-date-${o.id}` }
              >
                {moment(o.saleDate).format('DD/MM/YYYY')}
              </p>
              <p
                data-testid={ `customer_orders__element-card-price-${o.id}` }
              >
                {`R$ ${o.totalPrice.replace(/\./g, ',')}`}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <p>Você não possui nenhum pedido</p>
      )}
    </div>
  );
}

export default CustomerOrders;
