import styled from 'styled-components';

const ProductCardSComponent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  
  align-items: center;
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  height: 240px;
  margin: 1rem;
  overflow: hidden;
  position: relative;
  width: 175px;

  .price {
    color: var(--colors-dart-text);
    background-color: var(--colors-light-grey);
    border-radius: 8px;
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
    flex: 1;
    flex-direction: column;
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
      border: 1px solid #036B52;
      border-radius: 4px;
      color: black;
      display: flex;
      height: 27px;
      justify-content: space-between;
      overflow: hidden;

      button {
        background: #036B52;
        border: none;
        color: white;
        font-weight: 400;
        height: 32px;
        width: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5px;
        padding-right: 3px;
        border-radius: 0;
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
        &[type=number] {
          -moz-appearance: textfield;
        }
      }
    }
  }
`;

export default ProductCardSComponent;
