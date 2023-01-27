/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { SmileyXEyes } from 'phosphor-react';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import NavBar from '../components/NavBar';
import OrderCardSComponent from '../styles/orderCard.style';
import OrderStatus from '../components/OrderStatus';

function CustomerOrders() {
  const { orders, fetchUserOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();
  const FOUR = 4;

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
    <>
      <NavBar page="customer" />
      <OrderCardSComponent>
        { orders.length > 0 ? (
          orders.map((o) => (
            <Link
              className="card"
              to={ `/customer/orders/${o.id}` }
              key={ o.id }
            >
              <div
                className="order"
              >
                <p>Pedido</p>
                <p
                  className="order-number"
                  data-testid={ `customer_orders__element-order-id-${o.id}` }
                >
                  {o.id.toString().padStart(FOUR, '0')}
                </p>
              </div>
              <OrderStatus
                style={ { fontSize: '2.5rem', width: '7em', height: '100%' } }
                status={ o.status }
              />
              <div
                className="order-date-price"
              >
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
          <div
            className="no-orders"
          >
            <SmileyXEyes size={ 72 } />
            <h1>
              Você ainda não possui nenhum pedido
            </h1>
          </div>
        )}
      </OrderCardSComponent>
    </>
  );
}

export default CustomerOrders;
