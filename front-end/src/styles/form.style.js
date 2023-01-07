import styled from 'styled-components';

const FormSComponent = styled.section`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  margin: 20px;

  .form-seller {
    flex-grow: 5;
  }
  .form-address {
    flex-grow: 10;
  }
  .form-number {
    flex-grow: 1;
  }

  input,
  select {
    background: #ffffff;
    border-radius: 5px;
    border: 1px solid #001813;
    bottom: 0%;
    box-sizing: border-box;
    font-size: 18px;
    height: 70px;
    left: 0%;
    right: 0%;
    top: 37.5%;
    width: 100%;
  }
`;

export default FormSComponent;
