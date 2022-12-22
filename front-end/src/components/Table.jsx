import React from 'react';
import PropType from 'prop-types';
import { Trash } from 'phosphor-react';
import productsStore from '../store/products.store';
import { TableSComponent, TrashSComponent } from '../styles/table.style';

function Table({ page }) {
  const { cart, removeFromCart } = productsStore((state) => state);
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
            {page === 'checkout' && <th>Remover Item</th>}
          </tr>
        </table>
        <div
          className="scroll"
        >
          <table>
            {cart?.map((c, index) => (
              <tr
                className="product-line"
                key={ c.name }
              >
                <td
                  className="product-item"
                  data-testid={
                    page === 'checkout'
                      ? `customer_checkout__element-order-table-item-number-${index}`
                      : `customer_order_details__element-order-table-item-number-${index}`
                  }
                >
                  { index + 1 }
                </td>
                <td
                  className="product-description"
                  data-testid={
                    page === 'checkout'
                      ? `customer_checkout__element-order-table-name-${index}`
                      : `customer_order_details__element-order-table-name-${index}`
                  }
                >
                  { c.name }
                </td>
                <td
                  className="product-quantity"
                  data-testid={
                    page === 'checkout'
                      ? `customer_checkout__element-order-table-quantity-${index}`
                      : `customer_order_details__element-order-table-quantity-${index}`
                  }
                >
                  { page === 'checkout' ? c.quantity : c.SalesProducts.quantity }
                </td>
                <td
                  className="product-value"
                  data-testid={
                    page === 'checkout'
                      ? `customer_checkout__element-order-table-unit-price-${index}`
                      : `customer_order_details__element-order-table-unit-price-${index}`
                  }
                >
                  { `R$ ${c.price.replace(/\./g, ',')}` }
                </td>
                <td
                  className="product-subtotal"
                  data-testid={
                    page === 'checkout'
                      ? `customer_checkout__element-order-table-sub-total-${index}`
                      : `customer_order_details__element-order-table-sub-total-${index}`
                  }
                >
                  { page === 'checkout'
                    ? `R$ ${Number(c.price * c.quantity).toFixed(2)
                      .replace(/\./g, ',')}`
                    : `R$ ${Number(c.price * c.SalesProducts.quantity).toFixed(2)
                      .replace(/\./g, ',')}`}
                </td>
                {
                  page === 'checkout' && (
                    <td
                      className="product-remove"
                    >
                      <div
                        className="delete-product"
                      >
                        <button
                          className="button-remove"
                          type="button"
                          value={ c.name }
                          data-testid={
                            `customer_checkout__element-order-table-remove-${index}`
                          }
                          onClick={ () => removeFromCart(c.id) }
                        >
                          Remover
                          <TrashSComponent>
                            <Trash />
                          </TrashSComponent>
                        </button>
                      </div>
                    </td>
                  )
                }
              </tr>
            ))}
          </table>
        </div>
      </table>
    </TableSComponent>
  );
}

Table.propTypes = {
  page: PropType.string.isRequired,
};

export default Table;
