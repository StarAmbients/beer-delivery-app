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
  const [pending, setPending] = useState(false);
  const [inPreparation, setInPreparation] = useState(false);
  const [inTransit, setInTransit] = useState(false);

  const { token } = getUserLocalStorage();

  const handleClick = async (newStatus) => {
    await makeRequest(`sales/${orderDetail.id}`, 'put', { status: newStatus }, token);
    setOrderDetail({ ...orderDetail, status: newStatus });
  };

  useEffect(() => {
    const unsubscribe = ordersStore.subscribe(() => {
      setOrderDetail(ordersStore.getState().orderDetail);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (orderDetail.status === 'Pendente') {
      setPending(true);
    } else setPending(false);

    if (orderDetail.status === 'Preparando') {
      setInPreparation(true);
    } else setInPreparation(false);

    if (orderDetail.status === 'Em Trânsito') {
      setInTransit(true);
    } else setInTransit(false);
  }, [orderDetail]);

  const testId = `${page}_order_details__element-order-details-label-delivery-status`;
  return (
    <OrderDetailsSComponent>
      <div
        className="main-title"
      >
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
      </div>
      { page === 'seller' && inPreparation && (
        <div>
          <button
            type="button"
            className="btn-set-status"
            data-testid="seller_order_details__button-preparing-check"
            onClick={ () => handleClick('Em Trânsito') }
          >
            SAIU PARA ENTREGA
          </button>
        </div>
      )}
      { page === 'seller' && pending && (
        <div>
          <button
            type="button"
            className="btn-set-status"
            data-testid="seller_order_details__button-dispatch-check"
            onClick={ () => handleClick('Preparando') }
          >
            PREPARAR PEDIDO
          </button>
        </div>
      )}
      { page === 'customer' && inTransit && (
        <div>
          <button
            type="button"
            className="btn-set-status"
            data-testid="customer_order_details__button-delivery-check"
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
