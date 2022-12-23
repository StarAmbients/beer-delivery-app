import styled from 'styled-components';

const OrderCardSComponent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  
  position: absolute;
  width: 797px;
  height: 245px;
  left: 151px;
  top: 436px;
  
  .status {
    position: absolute;
    width: 295px;
    height: 141px;
    left: 215px;
    top: 13px;

    .typography {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;

      .title {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #001813;
      }
    }

    .bg {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      background: rgba(0, 204, 155, 0.75);
      border-radius: 10px;
    }
  }

  .typography-address {
    position: absolute;
    width: 577px;
    height: 68px;
    left: 207px;
    top: 164px;

    .label {
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-align: right;
      color: #001813;
    }
  }

  .typography-reference-order {
    position: absolute;
    width: 202px;
    height: 231px;
    left: 1px;
    top: 1.47px;

    .titulo { 
      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #001813;
    }
  }

  .order-price {
    position: absolute;
    left: 65.37%;
    right: 1.51%;
    top: 36.73%;
    bottom: 36.87%;

    .typography {
      position: absolute;
      height: 63.66px;
      left: 65.37%;
      right: 1.51%;
      top: 91.01px;

      .title {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #001813;
      }
    }

    .rectangle-35 {
      position: absolute;
      height: 63.66px;
      left: 65.37%;
      right: 1.51%;
      top: 90px;
      background: rgba(242, 255, 252, 0.75);
      border-radius: 10px;
    }
  }

  .order-status {
    position: absolute;
    left: 65.37%;
    right: 1.51%;
    top: 5.31%;
    bottom: 68.71%;

    .typography  {
      position: absolute;
      height: 63.66px;
      left: 65.37%;
      right: 1.51%;
      top: 13px;

      .title {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 0%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #001813;
      }
    }

    .rectangle-34 {
      position: absolute;
      height: 63.66px;
      left: 65.37%;
      right: 1.51%;
      top: 13px;
      background: rgba(242, 255, 252, 0.75);
      border-radius: 10px;
    }

  }

  .bg {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 4.08%;

    .bg-id-product {
      position: absolute;
      height: 230.7px;
      left: 0.13%;
      right: 74.53%;
      top: 1.43px;
      background: #FFFFFF;
    }

    .base {
      box-sizing: border-box;
      position: absolute;
      height: 235px;
      left: 0%;
      right: 0%;
      top: 0px;
      background: #EAF1EF;
      border: 1px solid #B1C2BE;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default OrderCardSComponent;
