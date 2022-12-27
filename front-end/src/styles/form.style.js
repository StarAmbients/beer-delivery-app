import styled from 'styled-components';

const FormSComponent = styled.section`
    display: flex;
    flex-direction: row;
    margin: 20px;
    flex-grow: 1;

  .form-seller {
    flex-grow: 5;
  }
  .form-address {
    flex-grow: 10;
  }
  .form-number {
    flex-grow: 1;
  }

  input, select {
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #001813;
    bottom: 0%;
    box-sizing: border-box;
    left: 0%;
    /* position: absolute; */
    right: 0%;
    top: 37.5%;
    height: 70px;
    font-size: 18px;
    width: 100%
  }

`;

export default FormSComponent;
