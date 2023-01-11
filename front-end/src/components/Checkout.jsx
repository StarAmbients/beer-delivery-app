/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import productsStore from '../store/products.store';
import checkoutStore from '../store/checkout.store';
import { getUserLocalStorage } from '../helpers/localStorage';
import makeRequest from '../helpers/axios.integration';
import Table from './Table';
import CheckoutSComponent from '../styles/checkout.style';
import SubmitButton from './SubmitButton';
import Form from './Form';

function Checkout() {
  const { id, token } = getUserLocalStorage();
  const { cart } = productsStore((state) => state);
  const { sellers, fetchSellers } = checkoutStore((state) => state);
  const [selectedOption, setSelectedOption] = useState('seller');
  const [entryAddressData, setEntryAddressData] = useState(false);
  const [entryNumberData, setEntryNumberData] = useState(false);
  const [sellerId, setSellerId] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const tresMil = 3000;

  const totalPrice = cart
    .reduce((prev, curr) => prev + (parseFloat(curr.price) * curr.quantity), 0)
    .toFixed(2);

  const handleCheckout = async () => {
    const order = await makeRequest('checkout/order', 'post', {
      userId: id,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      cart }, token);
    setDisplay(true);
    setTimeout(() => {
      navigate(`/customer/orders/${order.id}`);
    }, tresMil);
  };

  const handleChange = (event) => {
    console.log(selectedOption);
    setSelectedOption(event.target.value);
    setSellerId(Number(event.target.value));
  };

  useEffect(() => {
    if (deliveryNumber !== '' && deliveryAddress !== '') {
      setEntryAddressData(true);
      setEntryNumberData(true);
    } else {
      setEntryAddressData(false);
      setEntryNumberData(false);
    }
  }, [deliveryNumber, deliveryAddress]);

  useEffect(async () => {
    fetchSellers(token);
  }, []);

  useEffect(() => {
    console.log('The component was rendered or updated');
  }, [selectedOption, entryNumberData]);

  return (
    <CheckoutSComponent>
      <div
        className="title_finalizar_pedido"
      >
        <h3>Finalizar Pedido</h3>
      </div>
      <container>
        <Table page="checkout" />
        <div
          className="container-total-a-pagar"
        >
          <div
            className="total-finalizado"
          >
            <h2>
              Total:
            </h2>
            <p>
              R$
            </p>
            <h2
              data-testid="customer_checkout__element-order-total-price"
            >
              {`${Math.trunc(totalPrice)}`}
            </h2>
            <p
              className="cents"
            >
              {`${Math
                .trunc((totalPrice - (Math.trunc(totalPrice))) * 100)
                .toString().padStart(2, '0')}`}
            </p>
          </div>
        </div>

      </container>
      <div
        className="title_finalizar_pedido"
      >
        <h3>Detalhes e Endereço para Entrega</h3>
      </div>
      <div className="seller-details">
        <div
          className="details-shipment"
        >
          <Form
            formClass="form-seller"
            label="Pessoa Vendedora Responsável:"
            inputType="select"
            inputId="seller"
            inputName="seller"
            inputPlaceholder="Escolha seu vendedor"
            inputOnChange={ handleChange }
          >
            <option value="seller">Escolha seu vendedor</option>
            {sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))}
          </Form>
          <Form
            formClass="form-address"
            label="Endereço"
            labelClass="label-input-text"
            inputType="text"
            inputId="address"
            inputName="address"
            inputPlaceholder="Digite seu endereço"
            inputOnChange={ ({ target: { value } }) => setDeliveryAddress(value) }
          />
          <Form
            formClass="form-number"
            label="Número/Complemento"
            labelClass="label-input-text"
            inputType="text"
            inputId="number"
            inputName="number"
            inputPlaceholder="Exemplo: 56 bloco B"
            inputOnChange={ ({ target: { value } }) => setDeliveryNumber(value) }
          />
        </div>
        <SubmitButton
          handleCheckout={ handleCheckout }
          // eslint-disable-next-line sonarjs/no-redundant-boolean, react/jsx-curly-spacing
          selectedOption={ selectedOption }
          entryAddressData={ entryAddressData }
          entryNumberData={ entryNumberData }

        />
      </div>
    </CheckoutSComponent>
  );
}

export default Checkout;
