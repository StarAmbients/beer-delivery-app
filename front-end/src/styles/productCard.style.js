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

  /* display: flex;
  flex-direction: column;
  background: #E5E5E5;
  Product List */
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 1800px;
  height: 1166px;
  left: 60px;
  top: 159px;
  
  
  .product-card {
    /* font-family: "Roboto", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 175px;
    height: 240px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    overflow: hidden;
    border-radius: 4px;

    background: #EAF1EF;
    border: 1px solid #B1C2BE;

    Card Produto */

    position: absolute;
    width: 378px;
    height: 486px;
    left: 80px;
    top: 0px;

    .titulo {
      /* Título */
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
      align-items: left;
      text-indent: 15px;

      /* Texto Dark */
      color: #001813;
    }
    
    .image-card {
      /* Image */
      position: absolute;
      height: 357px;
      left: 0.28%;
      right: 0.28%;
      top: 2px;

      /* height: 70%;
      max-width: 100%;
      overflow: hidden;
      object-fit: fit-content; */

      .label {
        /* Label */
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

        /* Texto Dark */
        color: #001813;
      }
    }
    .base {
      /* Base */
      box-sizing: border-box;

      position: absolute;
      left: 0%;
      right: 0%;
      top: 0%;
      bottom: 0%;

      background: #EAF1EF;
      border: 1px solid #B1C2BE;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;

export default ProductCardSComponent;
