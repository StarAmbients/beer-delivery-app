import React from 'react';
import PropTypes from 'prop-types';
import OrderStatusSComponent from '../styles/OrderStatusSComponent';

function OrderStatus({ status, testId }) {
  return (
    <OrderStatusSComponent>
      <p className={ status } data-testid={ testId }>
        {`${status}`}
      </p>
    </OrderStatusSComponent>
  );
}

OrderStatus.propTypes = {
  status: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
};

export default OrderStatus;
