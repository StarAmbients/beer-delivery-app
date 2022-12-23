/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import productsStore from '../store/products.store';
import OrderCardSComponent from '../styles/orderCard.style';

function OrderCard({ product }) {
  const { id, name, price, urlImage } = product;
  const [quantity, setQuantity] = useState(0);
  const {
    insertOnCart,
    updateCart,
    products,
    cart,
  } = productsStore((state) => state);
  const menosUm = -1;
  const cartItemIndex = cart.findIndex((item) => item.id === id);
  const item = products.find((p) => p.id === id);
  const itemQuantity = { ...item, quantity };

  useEffect(() => {
    if (cartItemIndex === menosUm && quantity > 0) {
      return insertOnCart(itemQuantity);
    }
    return updateCart(id, itemQuantity);
  }, [quantity]);

  return (
    <OrderCardSComponent>
      <p
        className="price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {`R$ ${price.replace(/\./, ',')}`}
      </p>
      <img
        className="image"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
        // eslint-disable-next-line no-return-assign
        onError={ ({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = 'https://media0.giphy.com/media/26xBIygOcC3bAWg3S/giphy.gif';
        } }
      />
      <div
        className="base"
      >
        <p
          className="product-name"
          data-testid={ `customer_products__element-card-title-${id}` }
        >
          {name}
        </p>
        <div className="quantity">
          <button
            className="minus"
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            type="button"
            onClick={
              () => (quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1))
            }
          >
            -
          </button>
          <input
            data-testid={ `customer_products__input-card-quantity-${id}` }
            type="number"
            name="quantity"
            value={ itemQuantity.quantity || 0 }
            onChange={ ({ target: { value } }) => (Number(value) <= 0
              ? setQuantity(0)
              : setQuantity(Number(value))) }
          />
          <button
            className="plus"
            data-testid={ `customer_products__button-card-add-item-${id}` }
            type="button"
            onClick={ () => setQuantity(quantity + 1) }
          >
            +
          </button>
        </div>
      </div>
    </OrderCardSComponent>
  );
}

OrderCard.propTypes = {
  product: PropType.instanceOf(Object).isRequired,
};

export default OrderCard;
