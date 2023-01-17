import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PropType from 'prop-types';
import ordersStore from '../store/orders.store';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import OrderDetailsSComponent from '../styles/orderDetails.style';

function OrderDetail({ page }) {
  const [orderDetail, setOrderDetail] = useState(ordersStore.getState().orderDetail);
  const { token } = getUserLocalStorage();

  useEffect(() => {
    const unsubscribe = ordersStore.subscribe(() => {
      setOrderDetail(ordersStore.getState().orderDetail);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setOrderDetail(orderDetail);
  }, [orderDetail]);

  const handleClick = async (newStatus) => {
    await makeRequest(`sales/${orderDetail.id}`, 'put', { status: newStatus }, token);
    // eslint-disable-next-line no-restricted-globals
    // location.reload(true);
  };

  const testId = `${page}_order_details__element-order-details-label-delivery-status`;
  return (
    <OrderDetailsSComponent>
      <p
        className="order-id"
        data-testid={ `${page}_order_details__element-order-details-label-order-id` }
      >
        {`PEDIDO: ${orderDetail.id}`}
      </p>
      { page === 'customer' && (
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
      <p
        className="status"
        data-testid={ testId }
      >
        {`${orderDetail.status}`}
      </p>
      { page === 'seller' && (
        <div>
          <button
            type="button"
            className="btn-set-status"
            data-testid="seller_order_details__button-preparing-check"
            disabled={ orderDetail.status !== 'Pendente' }
            onClick={ () => handleClick('Preparando') }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            className="btn-set-status"
            data-testid="seller_order_details__button-dispatch-check"
            disabled={ orderDetail.status !== 'Preparando' }
            onClick={ () => handleClick('Em Trânsito') }
          >
            SAIU PARA ENTREGA
          </button>
        </div>
      )}
      { page === 'customer' && (
        <div>
          <button
            type="button"
            className="btn-set-status"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ orderDetail.status !== 'Em Trânsito' }
            onClick={ () => handleClick('Entregue') }
          >
            MARCAR COMO ENTREGUE
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
