import React, { useState, useEffect } from 'react';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';

const { token } = getUserLocalStorage();

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  const myProducts = async () => {
    const allProducts = await makeRequest('customer/products', 'get', {}, token);
    setProducts(allProducts);
  };

  const handleDeleteProduct = async (product) => {
    await makeRequest('seller/products', 'delete', product, token);
    myProducts(); // chama novamente a função que busca todos os produtos
  };

  const handleEditProduct = async (product) => {
    console.log('PRODUCT : ', product);
    await makeRequest('seller/products', 'put', product, token);
    myProducts(); // chama novamente a função que busca todos os produtos
  };

  useEffect(() => {
    myProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSaveProduct = (event) => {
    event.preventDefault();
    const updatedProducts = products
      .map((product) => (product.id === editedProduct.id ? editedProduct : product));
    setProducts(updatedProducts);
    // setEditedProduct({});
    // setEditing(false);
  };

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Product List</h1>
      <form onSubmit={ handleSaveProduct } />
      <input
        type="text"
        value={ search }
        onChange={ handleSearchChange }
        placeholder="Search products"
      />
      <ul>
        {filteredProducts.map((product) => (
          <li key={ product.id }>
            {product.name}
            {' '}
            -
            {product.price}
            <button
              type="submit"
              onClick={ () => handleEditProduct(product) }
            >
              Edit
            </button>
            <button
              type="submit"
              onClick={ () => handleDeleteProduct(product) }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
