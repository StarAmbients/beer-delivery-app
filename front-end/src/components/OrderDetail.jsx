import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropType from 'prop-types';
import ordersStore from '../store/orders.store';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import OrderDetailsSComponent from '../styles/orderDetails.style';

function OrderDetail({ page }) {
  const statusDatabase = ordersStore.getState().orderDetail;
  const [orderDetail, setOrderDetail] = useState(statusDatabase);
  const { token } = getUserLocalStorage();

  const handleClick = async () => {
    let newStatus;
    if (page === 'seller') {
      if (orderDetail.status === 'Pendente') {
        newStatus = 'Preparando';
      } else if (orderDetail.status === 'Preparando') {
        // eslint-disable-next-line sonarjs/no-duplicate-string
        newStatus = 'Em Trânsito';
      }
    // eslint-disable-next-line sonarjs/no-collapsible-if
    } else if (page === 'customer') {
      if (orderDetail.status === 'Pendente' || orderDetail.status === 'Em Trânsito') {
        newStatus = 'Entregue';
      }
    }
    await makeRequest(`sales/${orderDetail.id}`, 'put', { status: newStatus }, token);
    setOrderDetail({ ...orderDetail, status: newStatus });
  };

  useEffect(() => {
    const unsubscribe = ordersStore.subscribe(() => {
      setOrderDetail(ordersStore.getState().orderDetail);
    });
    return () => unsubscribe();
  }, []);

  const testId = `${page}_order_details__element-order-details-label-delivery-status`;
  return (
    <OrderDetailsSComponent>
      <div className="main-title">
        <p
          className="order-id"
          data-testid={ `${page}_order_details__element-order-details-label-order-id` }
        >
          {`PEDIDO: ${orderDetail.id}`}
        </p>
        {page === 'customer' && (
          <p
            className="name"
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${orderDetail.seller?.name}`}
          </p>
        )}
        <p
          className="saleDate"
          data-testid={ `${page}_order_details__element-order-details-label-order-date` }
        >
          {`${moment(orderDetail.saleDate).format('DD/MM/YYYY')}`}
        </p>
        <p className="status" data-testid={ testId }>
          {`${orderDetail.status}`}
        </p>
      </div>
      {(page === 'seller' || page === 'customer')
      && orderDetail.status !== 'Entregue'
      && ((orderDetail.status !== 'Em Trânsito' && page === 'seller')
          || (orderDetail.status === 'Em Trânsito' && page === 'customer'))
      && (
        <div>
          <button
            type="button"
            className="btn-set-status"
            data-testid="seller_order_details__button-change-status"
            onClick={ handleClick }
          >
            {
            // eslint-disable-next-line no-nested-ternary
              page === 'seller'
                ? (orderDetail.status === 'Pendente'
                  ? 'INICIAR PREPARAÇÃO'
                  : 'SAIU PARA ENTREGA')
                : 'CONFIRMAR ENTREGA'
            }
          </button>
        </div>
      )}
    </OrderDetailsSComponent>
  );
}

OrderDetail.propTypes = {
  page: PropType.string.isRequired,
};

export default OrderDetail;
