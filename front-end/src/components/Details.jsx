/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropType from 'prop-types';
import ordersStore from '../store/orders.store';
import { TableSComponent } from '../styles/table.style';

function Details({ page }) {
  const { orderDetail } = ordersStore((state) => state);
  const { totalPrice, products } = orderDetail;

  return (
    <TableSComponent>
      <table className="table-finished-order">
        <table className="title-table">
          <tr>
            <th className="item">Item</th>
            <th className="description">Descrição</th>
            <th className="quantity-person">Quantidade</th>
            <th className="unit-value-person">Valor Unitário</th>
            <th className="sub-total-person">Sub-total</th>
          </tr>
        </table>
        <div
          className="scroll"
        >
          <table>
            {products?.map((p, index) => (
              <tr key={ p.name }>
                <td
                  className="product-item"
                  data-testid={
                    `${page}_order_details__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  className="product-description"
                  data-testid={
                    `${page}_order_details__element-order-table-name-${index}`
                  }
                >
                  { p.name }
                </td>
                <td
                  className="product-quantity"
                  data-testid={
                    `${page}_order_details__element-order-table-quantity-${index}`
                  }
                >
                  { p.SalesProducts.quantity }
                </td>
                <td
                  className="product-value"
                  data-testid={
                    `${page}_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  { p.price.replace(/\./g, ',') }
                </td>
                <td
                  className="product-subtotal-person"
                  data-testid={
                    `${page}_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  { Number(p.price * p.SalesProducts.quantity).toFixed(2)
                    .replace(/\./g, ',')}
                </td>
              </tr>
            ))}
          </table>
        </div>
      </table>
      <div
        className="container-total-a-pagar"
      >
        <div
          className="total-value"
        >
          <h2>
            Total:
          </h2>
          <p>
            R$
          </p>
          <h2
            data-testid={ `${page}_order_details__element-order-total-price` }
          >
            {`${Math.trunc(totalPrice)}`}
          </h2>
          <p
            className="cents"
          >
            {`${Math
              .trunc((totalPrice - (Math.trunc(totalPrice))) * 100)
              .toString().padStart(2, '0')}`}
            {' '}
          </p>
        </div>
      </div>
    </TableSComponent>
  );
}

Details.propTypes = {
  page: PropType.string.isRequired,
};

export default Details;
