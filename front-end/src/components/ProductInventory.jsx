/* eslint-disable react/jsx-max-depth */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import adminStore from '../store/admin.store';
import AdminSComponent from '../styles/admin.style';

function ProductInventory() {
  const { token } = getUserLocalStorage();
  const [display, setDisplay] = useState(false);
  // const [errorName, setErrorName] = useState('');
  // const [errorprice, setErrorprice] = useState('');
  // const [errorVolumeInMilliliters, setErrorVolumeInMilliliters] = useState('');

  // const [errorurl, setErrorurl] = useState('');

  const {
    name,
    price,
    volume,
    image,
    fetchAllUsers,
    handleChange,
    clearAllState,
  } = adminStore((store) => store);

  const tresMil = 3000;
  // const quatro = 4;

  const handleClick = async () => {
    try {
      console.log('Info.......: ', name, price, image);
      const newProduct = await makeRequest('seller/newproduct', 'post', {
        name, price, urlImage: image }, token);
      console.log(newProduct);
      clearAllState();
    } catch (error) {
      console.log(error);
      setDisplay(true);
      setTimeout(() => { setDisplay(false); }, tresMil);
    }
  };

  // const priceRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const urlRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  useEffect(() => {
    fetchAllUsers(token);
  }, []);

  return (
    <AdminSComponent>
      <h3>Cadastrar novo produto</h3>
      { display && (
        <p
          data-testid="seller_manage__element-invalid-register"
        >
          Registro já existente!
        </p>
      )}
      <div
        className="container"
      >
        <form>
          <label
            htmlFor="name"
          >
            Nome
            <input
              data-testid="seller_manage__input-name"
              name="name"
              type="text"
              value={ name }
              placeholder="Nome e sobrenome"
              onChange={ handleChange }
              // onBlur={ () => {
              //   if (name.length < quatro) {
              //     setErrorName('Mínimo de 12 caracteres');
              //   }
              // } }
              // onFocus={ () => setErrorName('') }
            />
            {/* {errorName && <span>{errorName}</span>} */}
          </label>
        </form>
        <form>
          <label
            htmlFor="volume"
          >
            Volume
            <input
              data-testid="seller_manage__input-name"
              name="volume"
              type="number"
              value={ volume }
              placeholder="Volume em mililitros"
              onChange={ handleChange }
              // onBlur={ () => {
              //   if (volume < quatro) {
              //     setErrorName('Mínimo 4 mililitros');
              //   }
              // } }
              // onFocus={ () => setErrorVolumeInMilliliters('') }
            />
            {/* {errorVolumeInMilliliters && <span>{errorVolumeInMilliliters}</span>} */}
          </label>
        </form>
        <form>
          <label htmlFor="price">
            Preço
            <input
              data-testid="seller_manage__input-price"
              name="price"
              type="number"
              value={ price }
              placeholder="valor em Reais"
              onChange={ handleChange }
              // onBlur={ () => {
              //   if (!priceRegex.test(price) || (price.length < quatro)) {
              //     setErrorprice('price inválido');
              //   }
              // } }
              // onFocus={ () => setErrorprice('') }
            />
            {/* {errorprice && <span>{errorprice}</span>} */}
          </label>
        </form>
        <form>
          <label htmlFor="image">
            URL da image
            <input
              data-testid="seller_manage__input-url"
              name="image"
              type="text"
              value={ image }
              placeholder="https://www.image"
              onChange={ handleChange }
              // onBlur={ () => {
              //   if (!urlRegex.test(image)) {
              //     setErrorurl('Mín. 6 dígitos, 1 especial e 1 numérico');
              //   }
              // } }
              // onFocus={ () => setErrorurl('') }
            />
            {/* {errorurl && <span>{errorurl}</span>} */}
          </label>
        </form>
        {/* <form>
          <label
            className="role"
            htmlFor="role"
          >
            Tipo
            <select
              data-testid="seller_manage__select-role"
              name="role"
              onChange={ handleChange }
              value={ role }
            >
              <option value="customer">Usuário</option>
              <option value="seller">Vendedor</option>
              <option value="administrator">Administrador</option>
            </select>
          </label>
        </form> */}
        <button
          data-testid="seller_manage__button-register"
          type="button"
          // disabled={
          //   !(price
          //   && url.length >= quatro
          //   && name.length >= quatro)
          // }
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </button>
      </div>

    </AdminSComponent>
  );
}

export default ProductInventory;
