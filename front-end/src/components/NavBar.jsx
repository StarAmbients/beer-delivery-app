import React from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import { getUserLocalStorage, removeUserLocalStorage } from '../helpers/localStorage';
import userStore from '../store/user.store';
import NavBarSComponent from '../styles/navbar.style';

function NavBar({ page }) {
  const { clearAllState } = userStore((state) => state);
  const { name } = getUserLocalStorage();

  const handleLogout = () => {
    clearAllState();
    removeUserLocalStorage();
  };

  return (
    <NavBarSComponent>
      <nav>
        { page === 'customer' && (
          <Link
            className="nav-1"
            style={ { textDecoration: 'none' } }
            data-testid="customer_products__element-navbar-link-products"
            to="/customer/products"
          >
            <h1
              className="products"
            >
              PRODUTOS
            </h1>
          </Link>
        )}
        { page === 'seller' && (
          <Link
            className="nav-1"
            style={ { textDecoration: 'none' } }
            data-testid="customer_products__element-navbar-link-products"
            to="/seller/newproduct"
          >
            <h1
              className="products"
            >
              PRODUTOS
            </h1>
          </Link>
        )}
        <Link
          className="nav-2"
          style={ { textDecoration: 'none' } }
          data-testid="customer_products__element-navbar-link-orders"
          to={ page !== 'admin' ? `/${page}/orders` : '/admin/manage' }
        >
          <h2
            className="page-orders"
          >
            {page === 'customer' && 'MEUS PEDIDOS'}
            {page === 'seller' && 'PEDIDOS'}
            {page === 'admin' && 'GERENCIAR USUÁRIOS'}
          </h2>
        </Link
        >
        <div
          className="nav-3"
        >
          <h1
            className="user-name"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {`${name}`}
          </h1>
        </div>
        <Link
          className="nav-4"
          style={ { textDecoration: 'none' } }
          to="/"
          onClick={ handleLogout }
          data-testid="customer_products__element-navbar-link-logout"
        >
          <h1
            className="button-exit"
          >
            Sair
          </h1>
        </Link>
      </nav>
    </NavBarSComponent>
  );
}

NavBar.propTypes = {
  page: PropType.string.isRequired,
};

export default NavBar;
