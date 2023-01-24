/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NavBar from '../components/NavBar';
import { getUserLocalStorage } from '../helpers/localStorage';
import ordersStore from '../store/orders.store';
import OrderCardSComponent from '../styles/orderCard.style';
import OrderStatus from '../components/OrderStatus';

function SellerOrders() {
  const { orders, fetchSellerOrders } = ordersStore((state) => state);
  const { id, token } = getUserLocalStorage();
  const FOUR = 4;

  useEffect(() => {
    fetchSellerOrders(id, token);
  }, []);

  return (
    <>
      <NavBar page="seller" />
      <OrderCardSComponent>
        { orders.length > 0 ? (
          orders.map((o) => (
            <Link
              className="card"
              to={ `/seller/orders/${o.id}` }
              key={ o.id }
            >
              <div
                className="order"
              >
                <p>Pedido</p>
                <p
                  className="order-number"
                  data-testid={ `seller_orders__element-order-id-${o.id}` }
                >
                  {o.id.toString().padStart(FOUR, '0')}
                </p>
              </div>
              <div
                className="right"
              >
                <div
                  className="superior"
                >
                  <OrderStatus
                    style={ { fontSize: '40px', width: '7em', height: '100%' } }
                    status={ o.status }
                  />

                  <div
                    className="order-date-price"
                  >
                    <p
                      data-testid={ `seller_orders__element-order-date-${o.id}` }
                    >
                      {moment(o.saleDate).format('DD/MM/YYYY')}
                    </p>
                    <p
                      data-testid={ `seller_orders__element-card-price-${o.id}` }
                    >
                      {`R$ ${o.totalPrice.replace(/\./g, ',')}`}
                    </p>
                  </div>
                </div>
                <span
                  className="ship-to-address"
                  data-testid={ `seller_orders__element-card-address-${o.id}` }
                >
                  {`${o.deliveryAddress}, ${o.deliveryNumber}`}
                </span>
              </div>
            </Link>
          ))
        ) : (
          <p>Você não possui nenhum pedido</p>
        )}
      </OrderCardSComponent>
    </>
  );
}

export default SellerOrders;
