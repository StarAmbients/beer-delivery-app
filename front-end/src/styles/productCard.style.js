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
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  height: fit-content;
  margin-top: 90px;*/
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 175px;
  height: 240px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 1rem;
  overflow: hidden;
  border-radius: 4px;
  border: 3px solid green;

  .price {
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--colors-dart-text);
    background-color: var(--colors-light-grey);
    border-radius: 8px;
    padding: 4px;
  }

  .image {
    overflow: hidden;
    max-width: 100%;
    height: 100%;
    object-fit: fit-content;
  }

  .base {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px;
    flex: 1;
    width: 100%;
    background: #e8f2ef;

    .product-name {
      padding: 4px 0;
      font-size: 80%;
      white-space: nowrap;
    }

    .quantity {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38%;
      border: 1px solid #036B52;
      border-radius: 4px;
      overflow: hidden;
      color: black;

      button {
        background: #036B52;
        font-weight: 800;
        color: white;
        height: 32px;
        width: 32px;
        border: none;
      }

      input {
      width: 40px;
      text-align: center;
      border: none;
      appearance: none;
      /* Chrome, Safari, Edge, Opera /
      ::-webkit-outer-spin-button,
      ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      / Firefox */
      &[type=number] {
        -moz-appearance: textfield;
      }
      }
      .plus {
        
      }
    }
  }

`;

export default ProductCardSComponent;
