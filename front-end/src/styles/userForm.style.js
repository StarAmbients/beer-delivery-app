import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 100vh;
`;

export const Image = styled.img`
  border-radius: 75%;
  height: 450px;
  padding: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;     

  h1 {
    color: #350b4b;
    font-size: 1.7rem;
    font-weight: 400;
    margin-left: 0.4em;
  }

  label {
    border: 1 solid red;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    .btn-visibility {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      margin-right: 2%;
      padding-top: 2%;
      border: none;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1,
    }
  }

  
  input {
    border-radius: 0.2rem;
    border: 0.05rem solid gray;
    color: #350b4b;
    font-size: 1rem;
    font-weight: 500;
    height: 1.4375em;
    min-width: 0;
    outline: none;
    padding: 0.8rem;
    width: 20rem;
    max-width: 20rem;
    
    :hover {
      animation-duration: 10ms;
      border: 0.05rem inset #350b4b;
      box-shadow: 0px 3px 1px -2px #350b4b;
    }
    :focus {
      outline: 0;
    }
  }
  
  .segundoInput {
    max-width: calc(20rem - 27px);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    button {
      border-radius: 3px;
      border: 2px solid #f89e2c;
      color: black;
      font-size: 1em;
      margin: 1em 0 1em 0;
      padding: 0.55em 1em;
      transition: 0.2s;
      width: 21.8rem;
      
      :hover {
        background-color: #f89e2c;
        color: white;
      }
    }

    .container-register {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    }

    .container-social {
      align-items: start;
    }

    .btn-register {
      width: auto;
      padding: 0;
      margin: 0;
      border: none;
      background-color: transparent;
      margin-left: 0.5em;
    }
  }
`;
