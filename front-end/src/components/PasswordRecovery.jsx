import React, { useState } from 'react';
import makeRequest from '../helpers/axios.integration';

function PasswordRecovery() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await makeRequest('forgotten', 'post', { email });
      setSuccess(true);
      console.log(response);
    } catch (err) {
      console.log(err);
      setError(`Erro ao enviar o email.
      Por favor, verifique o endereço de email e
      tente novamente.`);
    }
  };

  return (
    <div>
      <h1>Recuperar senha</h1>
      {success ? (
        <p>
          Um email com as instruções para recuperar sua senha foi enviado para
          {' '}
          {email}
          .
        </p>
      ) : (
        <>
          <p>
            Insira seu endereço de email abaixo para receber
            as instruções de recuperação de senha.

          </p>
          <form onSubmit={ handleSubmit }>
            <input
              type="email"
              placeholder="Digite seu email"
              value={ email }
              onChange={ (event) => setEmail(event.target.value) }
              required
            />
            <button type="submit">Enviar</button>
          </form>
          {error && <p>{error}</p>}
        </>
      )}
    </div>
  );
}

export default PasswordRecovery;
