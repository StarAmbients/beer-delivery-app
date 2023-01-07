import styled from 'styled-components';

const PersonOrderDetailsSComponent = styled.section`
  height: 100vh;
  // width: 100vw;
  font-size: 1.9rem;
  font-weight: 400;
  color: #350b4b;

  .title_detalhes_pedido {
    display: flex;
    width: 100vw;

    h3 {
      margin-bottom: 20px;
      margin-top: 40px;
      padding-left: 130px;
    }
  }

  container {
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content: center;
    background-color: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 83vw;
    margin-left: 128px;

    table-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 83vw;
    }
  }

  .container-total-a-pagar {
    align-items: center;
    display: flex;
    height: 10vh;
    padding-inline: 60px;
    width: 25vw;
    float: right;
    margin-top: 25vh;

    
    .total-value {
      align-items: center;
      background: #036B52;
      border-radius: 0.625rem;
      color: #F2FFFC;
      display: flex;
      flex-direction: row;
      height: 80px;
      justify-content: end;
      line-height: 75px;
      margin-bottom: 10px;
      margin-right: 20px;
      padding-inline: 70px;
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
`;

export default PersonOrderDetailsSComponent;
