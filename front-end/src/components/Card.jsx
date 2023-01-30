import moment from 'moment';
import { SmileyXEyes } from 'phosphor-react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import OrderCardSComponent from '../styles/orderCard.style';
import OrderStatus from './OrderStatus';

function Card({ orders, page }) {
  const FOUR = 4;
  console.log(orders);

  return (
    <OrderCardSComponent
      user={ page }
    >
      { orders.length > 0 ? (
        orders
          .sort((a, b) => new Date(b.saleDate) - new Date(a.saleDate))
          .map((o) => (
            <Link
              className="card"
              to={ `/${page}/orders/${o.id}` }
              key={ o.id }
            >
              <div
                className="order"
              >
                <p>Pedido</p>
                <p
                  className="order-number"
                  data-testid={ `${page}_orders__element-order-id-${o.id}` }
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
                    style={ { width: '7em',
                      height: '7rem' } }
                    status={ o.status }
                  />

                  <div
                    className="order-date-price"
                  >
                    <p
                      data-testid={ `${page}_orders__element-order-date-${o.id}` }
                    >
                      {moment(o.saleDate).format('DD/MM/YYYY')}
                    </p>
                    <p
                      data-testid={ `${page}_orders__element-card-price-${o.id}` }
                    >
                      {`R$ ${o.totalPrice.replace(/\./g, ',')}`}
                    </p>
                  </div>
                </div>
                {
                  page === 'seller' && (
                    <span
                      className="ship-to-address"
                      data-testid={ `${page}_orders__element-card-address-${o.id}` }
                    >
                      {`${o.deliveryAddress}, ${o.deliveryNumber}`}
                    </span>
                  )
                }
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
  );
}

Card.propTypes = {
  orders: PropType.instanceOf(Object).isRequired,
  page: PropType.string.isRequired,
};

export default Card;
