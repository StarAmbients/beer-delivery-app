import styled from 'styled-components';

const ProductCardSComponent = styled.div`
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: 240px;
  margin: 1rem;
  overflow: hidden;
  position: relative;
  width: 175px;

  .price {
    background-color: var(--colors-light-grey);
    border-radius: 8px;
    color: var(--colors-dart-text);
    font-size: 1rem;
    font-weight: 700;
    left: 8px;
    padding: 4px;
    position: absolute;
    top: 8px;
  }

  .image {
    height: 100%;
    max-width: 100%;
    object-fit: fit-content;
    overflow: hidden;
  }

  .base {
    align-items: center;
    background: #e8f2ef;
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    padding: 4px;
    width: 100%;
    
    .product-name {
      font-size: 80%;
      padding: 4px 0;
      white-space: nowrap;
    }

    .quantity {
      align-items: center;
      border-radius: 4px;
      border: 1px solid #036b52;
      color: black;
      display: flex;
      height: 27px;
      justify-content: space-between;
      overflow: hidden;
      
      button {
        align-items: center;
        background: #036b52;
        border-radius: 0;
        border: none;
        color: white;
        display: flex;
        font-weight: 400;
        height: 32px;
        justify-content: center;
        margin-bottom: 5px;
        padding-right: 3px;
        width: 32px;
      }

      input {
        appearance: none;
        border: none;
        text-align: center;
        width: 40px;
        
        /* Chrome, Safari, Edge, Opera /
        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        / Firefox */
        &[type="number"] {
          -moz-appearance: textfield;
        }
      }
    }
  }
`;

export default ProductCardSComponent;
