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
    display: flex;
    justify-content: right;
    align-items: center;
    
    .pai-do-hdois {
      display: flex;
      align-items: center;
      justify-content: end;


      flex-direction: row;
      width: auto;
      height: 55%;

      background: #036B52;
      color: white;

      /* margin: 50px; */
      margin-right: 6px;
      padding: 5px 30px;

      h2 {
      font-weight: 700;
      font-size: 44px;
      }

      p{
        margin-left: 10px;
        margin-right: 5px;
        margin-bottom: 34px;
        font-size: 20px;
      }

      line-height: 75px;
      border-radius: 0.625rem;
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
