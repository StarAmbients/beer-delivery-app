import styled from 'styled-components';

const AdminSComponent = styled.section`
  align-items: center;
  color: #350b4b;
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  font-weight: 400;
  height: 100vh;
  justify-content: center;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: -100px;

  h3 {
    align-self: flex-start;
    font-size: 1.7rem;
  }
  
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    background-color: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100px;
    margin-bottom: 30px;
    margin-top: -20px;
  }

.container-table {
  height: 32vh;
  margin-top: -20px;
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

  .seller-details {
    background-color: whitesmoke;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    height: 22%;
    justify-content: space-between;
    width: 100%;
  }

  label {
    font-size: 18px;
    max-width: 330px;
  }

  span {
    color: red;
    display: flex;
    justify-content: end;
  }

  .label-input-text {
    margin-left: 20px;
  }

  .details-shipment {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    margin: 0 20px;
  }
  .form-seller {
    flex-grow: 5;
    height: 0;
    margin-right: 20px;
  }
  .form-address {
    flex-grow: 10;
    height: 0;
    margin-right: 20px;
  }
  .form-number {
    flex-grow: 1;
    height: 0;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input, select {
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid #001813;
    box-sizing: border-box;
    font-size: 18px;
    height: 50px;
    position: relative;
    width: 100%;
  }

  .role {
    width: 175px;
    margin-left: 0;
  }


  button {
    align-items: center;
    align-self: center;
    background-color: #036b52;
    border-radius: 10px;
    color: #f2fffc;
    display: flex;
    font-size: 20px;
    font-size: clamp(1rem, 1.5vw, 2.5rem);
    justify-content: center;
    width: 15%;
    height: 50%;
  }

  button:enabled {
    cursor: pointer;
    color: #f2fffc;
  }

  button:disabled {
    background-color: lightgray;
    color: whitesmoke;
    opacity: 0.7;
  }

  button:hover {
    transform: rotate(360deg);
    transform: scale(1.01);
  }

  table {
    background-color: whitesmoke;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  th {
    position: sticky;
    top: 0;
  }

  td {
    background-color: violet;
    height: 55px;
    text-align: center;
    font-size: 1.7rem;
  }

  .scroll {
    max-height: 240px;
    overflow: auto;
  }
  
  .item {
    margin-left: 10px;
    width: 60px;
  }

  .field-item {
    background-color: #2fc18c;
    width: 60px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .name {
    margin-left: 350px;
    width: 480px;
  }

  .field-name {
    background-color: #eaf1ef;
    width: 480px;
  }

  .email {
    margin-left: 480px;
    width: 500px;
  }

  .field-email {
    background-color: #036b52;
    color: #F2FFFC;
    width: 500px;
  }

  .type {
    margin-left: 40px;
    width: 230px;
  }

  .field-type {
    background-color: #421981;
    color: #F2FFFC;
    width: 230px;
  }

  .exclude {
    margin-left: 40px;
  }

  .field-exclude {
    color: #F2FFFC;
    // background-color: #eaf1ef;
    background-color: #056CF9;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  .btn-exclude {
    margin-right: 10px;
    border: none;
    background-color: #056CF9;
    display: flex;
    flex-direction: center;
    justify-content: center;
    width: 98%;
    height: 100%;
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export default AdminSComponent;
