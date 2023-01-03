import React from 'react';
import PropTypes from 'prop-types';

function SubmitButton({
  handleCheckout,
  selectedOption,
  entryAddressData,
  entryNumberData,
}) {
  return (
    <button
      type="button"
      className="btn-finalizar"
      data-testid="customer_checkout__button-submit-order"
      onClick={ () => handleCheckout() }
      // eslint-disable-next-line sonarjs/no-redundant-boolean
      disabled={ selectedOption === 'seller' || (!entryNumberData || !entryAddressData) }
    >
      FINALIZAR PEDIDO
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
