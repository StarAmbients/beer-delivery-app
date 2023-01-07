import styled from 'styled-components';

const OrderDetailsSComponent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 6vh;
  width: 81vw;
  padding: 0 15px;
  font-size: 1.7rem;
  font-weight: 400;
  color: #350B4B;
  background: #EAF1EF;
  border: 1px solid #B1C2BE;
  margin-left: 2px;
  margin-top: 4px;

  .order-id {
    font-weight: 550;
    color: #001813;
  }

  .name {
    font-size: 28px;
    font-weight: 400;
    line-height: 42px;
    color: #001813;
    padding-right: 300 px;
    width: 25vw;
  }

  .saleDate {
    font-size: 28px;
    font-weight: 550;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #001813;
    
    background: rgba(242, 255, 252, 0.75);
    border-radius: 10px;
    width: 11vw;
    justify-content: center;

  }

  .status {
    font-size: 28px;
    font-weight: 550;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #001813;
    width: 10vw;
    background: rgba(0, 204, 155, 0.75);
    border-radius: 10px;
    justify-content: center;

  }

  button {
    align-items: center;
    background-color: #036B52;
    border-radius: 10px;
    display: flex;
    // font-size: 20px;
    // font-size: clamp(1rem,1.5vw,2.5rem);
    justify-content: center;
    width: 20%;
    // align-self: center;
  }
  
  .btn-set-status {
    height: 38px;
    width: 23vw;
    font-size: 28px;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    color: #F2FFFC;
  }

  .btn-set-status:disabled {
    color: whitesmoke;
    background-color: lightgray;
    opacity: 0.7;
  }

  .btn-set-status:enabled {
    cursor: pointer;
  }

  button:hover:enabled {
    transform: rotate(360deg);
    transform: scale(1.01);
  }

`;

export default OrderDetailsSComponent;
