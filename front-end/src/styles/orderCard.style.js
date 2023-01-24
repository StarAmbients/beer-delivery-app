import styled from 'styled-components';

const OrderCardSComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 3rem;
  height: 80vh;  
  
  .card {
    background: #EAF1EF;
    border: 1px solid #B1C2BE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: black;
    display: flex;
    flex-direction: row;
    height: 12.5rem;
    justify-content: space-between;
    margin-bottom: 3rem;
    text-decoration: none;
    width: 53.125rem;
  }
  
  .order {
    align-items: center;
    background: rgba(242, 255, 252, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    
    p {
      font-size: 1.5625rem;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }

    .order-number {
      font-size: 2.25rem;
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
    width: 100%;
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
      font-size: 1.5625rem;
      font-size: 2.25rem;
      font-weight: 700;
      height: 4rem;
      justify-content: center;
      margin-bottom: 1.125rem;
      margin-top: 1.25rem;
      width: 16.5rem;
    }
  }

  .ship-to-address {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 1.5rem;
    font-weight: 400;
    height: 100%;
    justify-content: end;
    padding-right: 1.125rem;
    width: 100%;
  }

  .no-orders{
    align-items: center;
    align-self: center;
    background-color: pink;
    display: flex;
    justify-content: center;
    width: 100%;
    
    h1 {
      align-self: center;
      display: flex;
      justify-content: center;
      margin-left: 10px;
      text-align: center;
    }
  }  

  @media (max-width: 53.125rem) {
    
    .card {
      width: 100%;
    }
  }

  @media (max-width: 428px) {
    font-size: 1.5rem;
    
    p {
      padding: 0.2rem 0.75rem;
    }
  }
`;

export default OrderCardSComponent;
