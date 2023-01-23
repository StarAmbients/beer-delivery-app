import styled from 'styled-components';

const OrderCardSComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 50px;
  
  .card {
    color: black;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #EAF1EF;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 850px;
    height: 200px;
    margin-bottom: 50px;
  }

  .order {
    display: flex;
    flex-direction: column;
    width: 25%;
    background: rgba(242, 255, 252, 0.75);
    align-items: center;
    justify-content: center;
    p {
      margin-bottom: 8px;
      margin-top: 8px;
      font-size: 25px;
    }
    .order-number {
      font-size: 36px;
    }
  }

  .order-date-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      display: flex;
      margin-bottom: 20px;
      margin-top: 20px;
      font-size: 25px;
      background: rgba(242, 255, 252, 0.75);
      border-radius: 10px;
      font-size: 36px;
      font-weight: 700;
      width: 264px;
      height: 63.66px;
      justify-content: center;
      align-items: center;
      margin-bottom: 12px;
      margin-top: 12px;
    }
    width: 36%;
  }
`;

export default OrderCardSComponent;
