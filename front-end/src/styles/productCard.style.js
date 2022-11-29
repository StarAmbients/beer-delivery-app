import styled from 'styled-components';

const ProductCardSComponent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  
  /* Colors */
  --colors-light-text: #F2FFFC;
  --colors-dark-text: #001813;
  --colors-primary: #036B52;
  --colors-secondary: #2FC18C;
  --colors-tertiary: #421981;
  --colors-quaternary: #056CF9;
  --colors-quinary: #7B61FF;
  --colors-light-grey: #E5E5E5;
  --colors-dark-grey: #828282;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 60px;
  top: 159px;

  .product-card {
    display: flex;
    flex-direction: column;
    width: 378px;
    /* width: 30%; */
    height: 486px;
    left: 80px;
    margin-top: 140px;
    border: 3px solid red;
    justify-content: space-between;
    align-items: center;

    .price {
      position: absolute; 
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 42px;
      display: flex;
      text-indent: 15px;
      color: #001813;
      width: 20%;
      margin: 0;
      /*margin-right: 5%;*/
    }
    
    .image-card {
      /*height: 70%;
      width: 100%;
      justify-content: center;
      top: 0;*/
      margin-bottom: 0;

      .image {
        overflow: hidden;
        height: 70%;
        max-width: 100%;
        object-fit: fit-content;
      }
    }

    .base {
      box-sizing: border-box;
      display: flex;
      left: 0%;
      right: 0%;
      top: 600%;
      bottom: 0%;
      background: #EAF1EF;
      border: 1px solid #B1C2BE;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      .label {
        position: absolute;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #001813;
        margin-bottom: 25px;
      }
    }
  }
`;

export default ProductCardSComponent;
