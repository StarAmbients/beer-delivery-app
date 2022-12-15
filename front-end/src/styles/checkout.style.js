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

  .title_finalizar_pedido {
    display: flex;
    width: 100%;
    h3 {
      margin-bottom: 20px;
    }
  }

  .total_finalizado {
    width: 100%;
    h2 {
      background-color: green;
      color: white;
    }
  }
  .seller_details {
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    background-color: whitesmoke;

  }

`;

export default CheckoutSComponent;
