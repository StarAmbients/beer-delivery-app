import styled from 'styled-components';

const OrderDetailsSComponent = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: 5vh;
  margin-left: 7%;
  margin-right: 7%;
  padding: 0 15px;
  font-size: 1.7rem;
  font-weight: 400;
  color: #350B4B;
  background: #EAF1EF;
  border: 1px solid #B1C2BE;

  .order-id {

  }

  .name {
    font-size: 1.4rem;
    font-weight: 400;
    color: #B1C2BE;
    background: rgba(242, 255, 252, 0.75);
  }

  .saleDate {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #001813;
    
    background: rgba(242, 255, 252, 0.75);
    border-radius: 10px;
  }

  .status {
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 42px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #001813;

    background: rgba(0, 204, 155, 0.75);
    border-radius: 10px;
  }

  button {
    align-items: center;
    background-color: #036B52;
    border-radius: 10px;
    display: flex;
    font-size: 20px;
    font-size: clamp(1rem,1.5vw,2.5rem);
    justify-content: center;
    width: 20%;
    align-self: center;
  }
  
  .btn-set-status {
    margin-top: 15px;
    font-weight: 700;
    height: 52px;
    padding-inline: 60px;
    width: 25vw;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #F2FFFC;
    width: 332px;
  }

  .btn-set-status:disabled {
    color: whitesmoke;
    background-color: lightgray;
    opacity: 0.7;
  }

  .btn-set-status:enabled {
    cursor: pointer;
  }

  button:hover {
    transform: rotate(360deg);
    transform: scale(1.01);
  }

`;

export default OrderDetailsSComponent;
