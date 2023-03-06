import React, { useState } from 'react';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';

const { token } = getUserLocalStorage();

function ProductList() {
  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState('');
  // const [editedProduct, setEditedProduct] = useState({});

  const myProducts = async () => {
    const allProducts = await makeRequest('customer/products', 'get', {}, token);
    setProducts(allProducts);
    console.log(products);
  };
  myProducts();

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // const handleEditProduct = (product) => {
  //   setEditing(true);
  //   setEditedProduct(product);
  // };

  const handleSaveProduct = (event) => {
    event.preventDefault();
    const updatedProducts = products
      .map((product) => (product.id === editedProduct.id ? editedProduct : product));
    setProducts(updatedProducts);
    // setEditedProduct({});
    // setEditing(false);
  };

  // const handleDeleteProduct = (product) => {
  //   const updatedProducts = products.filter(
  //     (p) => p.id !== product.id,
  //   );
  //   setProducts(updatedProducts);
  // };

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
            {/* <button
              type="submit"
              onClick={ () => handleEditProduct(product) }
            >
              Edit
            </button> */}
            {/* <button
              type="submit"
              onClick={ () => handleDeleteProduct(product) }
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
