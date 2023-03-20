import { React, useState } from 'react';
import PropTypes from 'prop-types';

function SubmitButton({
  handleCheckout,
  selectedOption,
  entryAddressData,
  entryNumberData,
}) {
  const [buttonText, setButtonText] = useState('FINALIZAR PEDIDO');
  return (
    <button
      type="button"
      className="btn-finalizar"
      data-testid="customer_checkout__button-submit-order"
      onClick={ () => {
        handleCheckout();
        setButtonText('CONFIRMANDO PEDIDO...');
      } }
      disabled={ selectedOption === 'seller' || (!entryNumberData || !entryAddressData) }
    >
      {buttonText}
    </button>
  );
}

SubmitButton.propTypes = {
  handleCheckout: PropTypes.func.isRequired,
  selectedOption: PropTypes.string.isRequired,
  entryAddressData: PropTypes.string.isRequired,
  entryNumberData: PropTypes.string.isRequired,
};

export default SubmitButton;
