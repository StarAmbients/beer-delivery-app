/* eslint-disable react/jsx-max-depth */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import EmailValidator from 'email-validator';
import { Trash } from 'phosphor-react';
import makeRequest from '../helpers/axios.integration';
import { getUserLocalStorage } from '../helpers/localStorage';
import adminStore from '../store/admin.store';
import AdminSComponent from '../styles/admin.style';
import { TrashSComponent } from '../styles/table.style';

function Admin() {
  const { token } = getUserLocalStorage();
  const [display, setDisplay] = useState(false);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');

  const {
    name,
    email,
    password,
    role,
    users,
    fetchAllUsers,
    handleChange,
    clearAllState,
  } = adminStore((store) => store);

  const tresMil = 3000;
  const seis = 6;
  const doze = 12;

  const handleClick = async () => {
    try {
      const newUser = await makeRequest('admin', 'post', {
        name, email, password, role }, token);
      console.log(newUser);
      clearAllState();
      fetchAllUsers(token);
    } catch (error) {
      console.log(error);
      setDisplay(true);
      setTimeout(() => { setDisplay(false); }, tresMil);
    }
  };

  const handleDelete = async (params) => {
    const deletedUser = await makeRequest('admin', 'delete', {
      name: params.name, email: params.email }, token);
    console.log(deletedUser);
  };

  const roles = {
    administrator: 'Administrador',
    seller: 'P. Vendedora',
    customer: 'Cliente',
  };

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

  useEffect(() => {
    fetchAllUsers(token);
  }, []);

  return (
    <AdminSComponent>
      <h3>Cadastrar novo usuário</h3>
      { display && (
        <p
          data-testid="admin_manage__element-invalid-register"
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
              data-testid="admin_manage__input-name"
              name="name"
              type="text"
              value={ name }
              placeholder="Nome e sobrenome"
              onChange={ handleChange }
              onBlur={ () => {
                if (name.length < doze) {
                  setErrorName('Mínimo de 12 caracteres');
                }
              } }
              onFocus={ () => setErrorName('') }
            />
            {errorName && <span>{errorName}</span>}
          </label>
        </form>
        <form>
          <label htmlFor="email">
            Email
            <input
              data-testid="admin_manage__input-email"
              name="email"
              type="text"
              value={ email }
              placeholder="seu-email@site.com.br"
              onChange={ handleChange }
              onBlur={ () => {
                if (!emailRegex.test(email) || (email.length < seis)) {
                  setErrorEmail('Email inválido');
                }
              } }
              onFocus={ () => setErrorEmail('') }
            />
            {errorEmail && <span>{errorEmail}</span>}
          </label>
        </form>
        <form>
          <label htmlFor="password">
            Senha
            <input
              data-testid="admin_manage__input-password"
              name="password"
              type="password"
              value={ password }
              placeholder="********"
              onChange={ handleChange }
              onBlur={ () => {
                if (!passwordRegex.test(password)) {
                  setErrorPassword('Mín. 6 dígitos, 1 especial e 1 numérico');
                }
              } }
              onFocus={ () => setErrorPassword('') }
            />
            {errorPassword && <span>{errorPassword}</span>}
          </label>
        </form>
        <form>
          <label
            className="role"
            htmlFor="role"
          >
            Tipo
            <select
              data-testid="admin_manage__select-role"
              name="role"
              onChange={ handleChange }
              value={ role }
            >
              <option value="customer">Usuário</option>
              <option value="seller">Vendedor</option>
              <option value="administrator">Administrador</option>
            </select>
          </label>
        </form>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={
            !(EmailValidator.validate(email)
            && password.length >= seis
            && name.length >= doze)
          }
          onClick={ () => handleClick() }
        >
          CADASTRAR
        </button>
      </div>
      <h3>Lista de usuários</h3>
      <table
        className="container-table"
      >
        <table className="title-table">
          <tr>
            <th className="item">Item</th>
            <th className="name">Nome</th>
            <th className="email">Email</th>
            <th className="type">Tipo</th>
            <th className="exclude">Excluir</th>
          </tr>
        </table>
        <div
          className="scroll"
        >
          <table>
            { users?.map((u, index) => (
              <tr key={ u.id }>
                <td
                  className="field-item"
                  data-testid={ `admin_manage__element-user-table-item-number-${
                    index}` }
                >
                  {u.id}
                </td>
                <td
                  className="field-name"
                  data-testid={ `admin_manage__element-user-table-name-${index}` }
                >
                  {u.name}
                </td>
                <td
                  className="field-email"
                  data-testid={ `admin_manage__element-user-table-email-${index}` }
                >
                  {u.email}
                </td>
                <td
                  className="field-type"
                  data-testid={ `admin_manage__element-user-table-role-${index}` }
                >
                  {roles[u.role]}
                </td>
                <td
                  className="field-exclude"
                >
                  <button
                    className="btn-exclude"
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    type="button"
                    onClick={ () => handleDelete({ name: u.name, email: u.email }) }
                  >
                    Excluir
                    <TrashSComponent>
                      <Trash />
                    </TrashSComponent>
                  </button>
                </td>

              </tr>
            ))}
          </table>
        </div>
      </table>

    </AdminSComponent>
  );
}

export default Admin;
