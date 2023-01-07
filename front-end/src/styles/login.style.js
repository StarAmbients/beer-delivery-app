import styled from 'styled-components';

const LoginSComponent = styled.section`
  align-items: center;
  background-image: linear-gradient(0deg, #350b4b 0%, #ffb703 74%);
  display: flex;
  height: 100vh;
  justify-content: center;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    
    img {
      border-radius: 50%;
      height: 130px;
    }

    h1 {
      color: #350b4b;
      font-family: "Roboto", "Ubuntu", sans-serif;
      font-size: 1.7rem;
      font-weight: 400;
    }

    label {
      border: 1 solid red;
      margin: 0.5rem;
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
      
      :hover {
        animation-duration: 10ms;
        border: 0.05rem inset #350b4b;
        box-shadow: 0px 3px 1px -2px #350b4b;
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
        color: black;
        font-size: 1em;
        margin: 1em 0 5em 0;
        padding: 0.55em 1em;
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

export default LoginSComponent;
