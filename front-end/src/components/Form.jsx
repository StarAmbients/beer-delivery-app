import React from 'react';
import PropTypes from 'prop-types';

function Form({
  formClass,
  inputClass,
  label,
  inputType,
  inputId,
  labelClass,
  inputPlaceholder,
  inputOnChange,
  children,
}) {
  return (
    <form className={ formClass }>
      <label
        htmlFor={ inputId }
        className={ labelClass }
      >
        {label}

      </label>
      {inputType === 'select' ? (
        <select
          className={ inputClass }
          id={ inputId }
          placeholder={ inputPlaceholder }
          onChange={ inputOnChange }
        >
          {children}
        </select>
      ) : (
        <input
          className={ inputClass }
          type={ inputType }
          id={ inputId }
          placeholder={ inputPlaceholder }
          onChange={ inputOnChange }
        />
      )}
    </form>
  );
}

Form.propTypes = {
  formClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  inputOnChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
