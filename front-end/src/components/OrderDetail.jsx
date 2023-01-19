/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import moment from 'moment';
import PropType from 'prop-types';
import ordersStore from '../store/orders.store';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import OrderDetailsSComponent from '../styles/orderDetails.style';
import OrderStatus from './OrderStatus';

function OrderDetail({ page }) {
  const statusDatabase = ordersStore.getState().orderDetail;
  const [orderDetail, setOrderDetail] = useState(statusDatabase);
  const { token } = getUserLocalStorage();

  const handleClick = async () => {
    let newStatus;
    if (page === 'seller') {
      if (orderDetail.status === 'PENDENTE') {
        newStatus = 'PREPARANDO';
      } else if (orderDetail.status === 'PREPARANDO') {
        // eslint-disable-next-line sonarjs/no-duplicate-string
        newStatus = 'EM TRÂNSITO';
      }
    // eslint-disable-next-line sonarjs/no-collapsible-if
    } else if (page === 'customer') {
      if (orderDetail.status === 'PENDENTE' || orderDetail.status === 'EM TRÂNSITO') {
        newStatus = 'ENTREGUE';
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
        <OrderStatus
          status={ orderDetail.status }
          testId={ testId }
        />
      </div>
      {(page === 'seller' || page === 'customer')
      && orderDetail.status !== 'ENTREGUE'
      && ((orderDetail.status !== 'EM TRÂNSITO' && page === 'seller')
          || (orderDetail.status === 'EM TRÂNSITO' && page === 'customer'))
      && (
        <button
          type="button"
          className="btn-set-status"
          data-testid="seller_order_details__button-change-status"
          onClick={ handleClick }
        >
          {
            page === 'seller'
              ? (orderDetail.status === 'PENDENTE'
                ? 'INICIAR PREPARAÇÃO'
                : 'SAIU PARA ENTREGA')
              : 'CONFIRMAR ENTREGA'
          }
        </button>
      )}
    </OrderDetailsSComponent>
  );
}

OrderDetail.propTypes = {
  page: PropType.string.isRequired,
};

export default OrderDetail;
