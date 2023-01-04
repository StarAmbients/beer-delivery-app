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
      <table>
        <table className="title-table">
          <tr>
            <th className="item">Item</th>
            <th className="description">Descrição</th>
            <th className="quantity">Quantidade</th>
            <th className="unit-value">Valor Unitário</th>
            <th className="sub-total">Sub-total</th>
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
                  className="product-subtotal"
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
      <h2
        data-testid={ `${page}_order_details__element-order-total-price` }
      >
        {`Total: ${totalPrice?.replace(/\./g, ',')}`}
      </h2>
    </TableSComponent>
  );
}

Details.propTypes = {
  page: PropType.string.isRequired,
};

export default Details;
