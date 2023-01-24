import styled from 'styled-components';

const OrderCardSComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 50px;
  
  .card {
    background: #EAF1EF;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: black;
    display: flex;
    flex-direction: row;
    height: 200px;
    justify-content: space-between;
    margin-bottom: 50px;
    text-decoration: none;
    width: 850px;
  }
  
  .order {
    align-items: center;
    background: rgba(242, 255, 252, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    
    p {
      font-size: 25px;
      margin-bottom: 8px;
      margin-top: 8px;
    }
    .order-number {
      font-size: 36px;
    }
  }
  
  .right {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .superior {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 75%;
    justify-content: space-evenly;
  }

  .order-date-price {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    width: 47%;
    
    p {
      align-items: center;
      background: rgba(242, 255, 252, 0.75);
      border-radius: 10px;
      display: flex;
      font-size: 25px;
      font-size: 36px;
      font-weight: 700;
      height: 63.66px;
      justify-content: center;
      margin-bottom: 18px;
      margin-top: 20px;
      width: 264px;
    }
  }

  .ship-to-address {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 24px;
    font-weight: 400;
    height: 100%;
    justify-content: end;
    padding-right: 2em;
    width: 100%;
  }
`;

export default OrderCardSComponent;
