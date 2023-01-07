import styled from 'styled-components';

const RegisterSComponent = styled.section`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;

  form {
    align-items: center;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    height: 90vh;
    justify-content: center;
    width: 500px;

    img {
      border-radius: 50%;
      height: 130px;
    }

    h1 {
      color: #350b4b;
      color: white;
      font-family: "Roboto", "Ubuntu", sans-serif;
      font-size: 1.7rem;
      font-weight: 400;
    }

    label {
      background-color: black;
      border: 1 solid red;
      display: flex;
      flex-direction: row;
      margin: 0.5rem;
    }

    input {
      background-color: black;
      border-color: gray;
      border-radius: 0.2rem;
      border: 0.05rem solid gray;
      color: #350B4B;
      font-size: 1rem;
      font-weight: 500;
      height: 1.4375em;
      min-width: 0;
      outline: none;
      padding: 0.8rem;
      width: 20rem;

      :hover {
        animation-duration: 10ms;
        border: 0.05rem inset #350b4b;
        box-shadow: 0px 3px 1px -2px #350B4B;
        outline: solid red;
      }

      :focus {
        outline: 0;
      }
    }

    div {
      display: flex;
      flex-direction: column;
      
      button {
        border-radius: 3px;
        border: 2px solid #f89e2c;
        color: gray;
        font-size: 1em;
        margin: 1em 0 5em 0;
        // DSR
        padding: 0.55em 1em;
        padding: 0.8rem;
        transition: 0.2s;
        width: 21.8rem;
        
        :hover {
          background-color: #f89e2c;
          color: white;
        }
      }
    }
  }
`;

export default RegisterSComponent;
