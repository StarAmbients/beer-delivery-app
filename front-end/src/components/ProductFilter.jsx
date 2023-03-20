import React, { useState, useEffect } from 'react';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import ProductFilterSComponent from '../styles/productFilterDetails.style';
import productsStore from '../store/products.store';

const { token } = getUserLocalStorage();
const volumeRegex = /\d+ml/; // Expressão regular para encontrar uma ou mais sequências de dígitos seguida de "ml"
const nameRegex = /(\d+ml)/g; // Expressão regular para encontrar um ou mais dígitos seguidos de "ml" em toda a string

// eslint-disable-next-line react/prop-types
function ProductList({ shouldUpdate }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const {
    modifyAllState,
    setVolume,
    setMode,
  } = productsStore((store) => store);

  const myProducts = async () => {
    const allProducts = await makeRequest('customer/products', 'get', {}, token);
    setProducts(allProducts);
  };

  const handleDeleteProduct = async (product) => {
    await makeRequest('seller/products', 'delete', product, token);
    myProducts();
  };

  useEffect(() => {
    myProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    myProducts();
  }, [shouldUpdate]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSaveProduct = (event) => {
    event.preventDefault();
    const updatedProducts = products
      .map((product) => (product.id === editedProduct.id ? editedProduct : product));
    setProducts(updatedProducts);
  };

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <ProductFilterSComponent>
      <h1>Lista de Produtos</h1>
      <form onSubmit={ handleSaveProduct } />
      <input
        type="text"
        value={ search }
        onChange={ handleSearchChange }
        placeholder="Buscar produtos"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={ product.id }>
            <div
              className="product-name"
            >
              {product.name}
              {' '}
              -
              {' R$ '}
              {product.price}
            </div>
            <div
              className="container"
            >
              <button
                className="btn-set-status"
                type="submit"
                onClick={ () => {
                  modifyAllState(
                    product.id,
                    product.name.replace(nameRegex, ''),
                    product.price,
                    product.urlImage,
                  );
                  setMode('editar');
                  setVolume(product.name.match(volumeRegex)[0]);
                } }
              >
                EDITAR
              </button>
              <button
                className="btn-set-status"
                type="submit"
                onClick={ () => handleDeleteProduct(product) }
              >
                REMOVER
              </button>
            </div>
          </li>
        ))}
      </ul>
    </ProductFilterSComponent>
  );
}

export default ProductList;
