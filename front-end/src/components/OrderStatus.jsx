import React from 'react';
import PropTypes from 'prop-types';
import OrderStatusSComponent from '../styles/OrderStatusSComponent';

function OrderStatus({ status, testId, style }) {
  return (
    <OrderStatusSComponent>
      <p
        style={ style }
        className={ status }
        data-testid={ testId }
      >
        {`${status}`}
      </p>
    </OrderStatusSComponent>
  );
}

OrderStatus.propTypes = {
  status: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  testId: PropTypes.string,
  style: PropTypes.string.isRequired,
};

export default OrderStatus;
