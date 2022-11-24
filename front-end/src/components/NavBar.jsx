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
        <div className="nav-left">
          <div className="page-name">
            { page === 'customer' && (
              <Link
                style={ { textDecoration: 'none' } }
                data-testid="customer_products__element-navbar-link-products"
                to="/customer/products"
              >
                <h1>
                  PRODUTOS
                </h1>
              </Link>
            )}
          </div>
          <Link
            style={ { textDecoration: 'none' } }
            data-testid="customer_products__element-navbar-link-orders"
            to={ page !== 'admin' ? `/${page}/orders` : '/admin/manage' }
          >
            <h2>
              {page === 'customer' && 'MEUS PEDIDOS'}
              {page === 'seller' && 'PEDIDOS'}
              {page === 'admin' && 'GERENCIAR USUÁRIOS'}
            </h2>
          </Link>
        </div>
        <div className="nav-right">
          <h3
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {`${name}`}
          </h3>
          <Link
            style={ { textDecoration: 'none' } }
            to="/"
            onClick={ handleLogout }
            data-testid="customer_products__element-navbar-link-logout"
          >
            <h1>
              Sair
            </h1>
          </Link>
        </div>

      </nav>
    </NavBarSComponent>
  );
}

NavBar.propTypes = {
  page: PropType.string.isRequired,
};

export default NavBar;
