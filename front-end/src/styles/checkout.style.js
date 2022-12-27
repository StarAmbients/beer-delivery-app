import styled from 'styled-components';

const CheckoutSComponent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin-left: 7%;
  margin-right: 7%;
  margin-top: -100px;
  font-size: 1.7rem;
  font-weight: 400;
  color: #350B4B;

  container {
    background-color: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
  }

  .title_finalizar_pedido {
    display: flex;
    width: 100%;
    
    h3 {
      margin-bottom: 20px;
    }
  }

  .container-total-a-pagar {
    align-items: center;
    display: flex;
    justify-content: right;
    width: 100%;
    
    .total-finalizado {
      align-items: center;
      background: #036B52;
      border-radius: 0.625rem;
      color: white;
      display: flex;
      flex-direction: row;
      height: 80px;
      justify-content: end;
      line-height: 75px;
      margin-bottom: 10px;
      margin-right: 20px;
      padding: 5px 30px;
      width: auto;
      
      h2 {
      font-size: 44px;
      font-weight: 700;
    }

      p {
        font-size: 20px;
        margin-bottom: 34px;
        margin-left: 10px;
        margin-right: 5px;
      }

      .cents {
        margin-left: 0;
        vertical-align: super;
      }
    }
  }

  .seller-details {
    display: flex;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 22%;
    width: 100%;
    justify-content: space-between;
  }

  label {
    display: flex;
    font-size: 18px;
    justify-content: flex-start;
  }

  .label-input-text {
    margin-left: 20px;
  }

  .details-shipment {
    display: flex;
    flex-direction: row;
    margin: 0 20px;
    flex-grow: 1;
  }
  .form-seller {
    flex-grow: 5;
    margin-right: 20px;
    height: 0;
  }
  .form-address {
    flex-grow: 10;
    margin-right: 20px;
    height: 0;


  }
  .form-number {
    flex-grow: 1;
    height: 0;


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
    height: 50px;
    font-size: 18px;
    width: 100%;
  }

  button {
    align-items: center;
    background-color: #036B52;
    border-radius: 10px;
    color: #F2FFFC;
    display: flex;
    font-size: 20px;
    font-size: clamp(1rem,1.5vw,2.5rem);
    justify-content: center;
    width: 20%;
    align-self: center;
  }
  
  .btn-finalizar {
    margin-top: 15px;
    font-weight: 700;
    height: 10vh;
    padding-inline: 60px;
    width: 25vw;
    margin-bottom: 20px;
  }

  .btn-finalizar:disabled {
    color: whitesmoke;
    background-color: lightgray;
    opacity: 0.7;
  }

  .btn-finalizar:enabled {
    cursor: pointer;
  }

  button:hover {
    transform: rotate(360deg);
    transform: scale(1.01);
  }

`;

export default CheckoutSComponent;
