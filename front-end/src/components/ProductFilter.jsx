import React, { useState, useEffect } from 'react';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import ProductFilterSComponent from '../styles/productFilterDetails.style';
import productsStore from '../store/products.store';

const { token } = getUserLocalStorage();

// eslint-disable-next-line react/prop-types
function ProductList({ shouldUpdate }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const {
    setMode,
    modifyAllState,
  } = productsStore((store) => store);

  const myProducts = async () => {
    const allProducts = await makeRequest('customer/products', 'get', {}, token);
    setProducts(allProducts);
  };

  const handleDeleteProduct = async (product) => {
    await makeRequest('seller/products', 'delete', product, token);
    myProducts(); // chama novamente a função que busca todos os produtos
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
                    product.name,
                    product.price,
                    product.urlImage,
                  );
                  setMode();
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
