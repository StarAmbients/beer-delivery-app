import styled from 'styled-components';

const OrderDetailsSComponent = styled.section`
  align-items: center;
  background: #eaf1ef;
  border: 1px solid #b1c2be;
  color: #350b4b;
  display: flex;
  flex-direction: row;
  font-size: 1.7rem;
  font-weight: 400;
  height: 6vh;
  // justify-content: space-between;
  margin-left: 2px;
  margin-top: 4px;
  padding: 0 15px;
  width: 81vw;

  .main-title {
    display: flex;
    justify-content: space-between;
    width: 71%;
    height: 100%;
    align-items: center;
    padding-right: 10px;
  }

  .order-id {
    color: #001813;
    font-weight: 550;
  }

  .name {
    color: #001813;
    font-size: 28px;
    font-weight: 400;
    line-height: 42px;
    width: 25vw;
  }

  .saleDate {
    align-items: center;
    background: rgba(242, 255, 252, 0.75);
    border-radius: 10px;
    color: #001813;
    display: flex;
    font-size: 28px;
    font-weight: 550;
    justify-content: center;
    line-height: 42px;
    text-align: center;
    width: 11vw;
  }

  /* .status-component {
    width: 5px;
    height: 5px;
    border: green;
    color: red !important; 
  } */

  .status {
    align-items: center;
    background: rgba(0, 204, 155, 0.75);
    border-radius: 10px;
    color: #001813;
    display: flex;
    font-size: 28px;
    font-weight: 550;
    justify-content: center;
    line-height: 42px;
    text-align: center;
    width: 10vw;
  }

  button {
    align-items: center;
    align-self: center;
    background-color: #036b52;
    border-radius: 10px;
    display: flex;
    font-size: 20px;
    font-size: clamp(1rem,1.5vw,2.5rem);
    justify-content: center;
    /*width: 20%;*/
  }

  .btn-set-status {
    align-items: center;
    color: #f2fffc;
    display: flex;
    font-size: 28px;
    font-weight: 400;
    height: 38px;
    margin-left: 52px;
    margin-right: 10px;
    padding-left: 20px;
    padding: 1.4rem 1.4rem;
    text-align: center;
    width: auto;
  }

  .btn-set-status:disabled {
    background-color: lightgray;
    color: whitesmoke;
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
