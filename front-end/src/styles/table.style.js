import styled from 'styled-components';

const TableSComponent = styled.section`
  border-radius: 4px;
  max-height: 1200px;
  width: 100%;

  table {
    background-color: whitesmoke;
    flex-direction: row;
    justify-content: center;
    width: calc(100% - 15px);
  }

  .table-finished-order {
    margin: 0;
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title-table tr {
    display: flex;
    font-size: 18px;
    justify-content: flex-start;
  }

  th {
    position: sticky;
    top: 0;
  }

  td {
    background-color: violet;
    height: 55px;
    text-align: center;
  }

  .scroll {
    max-height: 240px;
    overflow: auto;
  }

  .item {
    margin-left: 10px;
  }

  .description {
    margin-left: 350px;
  }

  .quantity {
    margin-left: 300px;
  }

  .quantity-person {
    margin-left: 400px;
  }

  .unit-value {
    margin-left: 50px;
  }

  .unit-value-person {
    margin-left: 73px;
  }

  .sub-total {
    margin-left: 115px;
    margin-right: 115px;
  }

  .sub-total-person {
    margin-left: 135px;
    margin-right: 0;
  }

  .sub-total-checkout {
    color: red;
    margin-left: 115px;
    margin-right: 115px;
  }

  .product-line {
    background-color: transparent;
    border-radius: 15px;
  }

  .product-item {
    background-color: #036b52;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    color: white;
    width: 60px;
  }

  .product-description {
    background-color: #eaf1ef;
    padding-left: 30px;
    text-align: left;
    width: 680px;
  }

  .product-quantity {
    background-color: #036b52;
    color: white;
    width: 120px;
  }

  .product-value {
    background-color: #421981;
    color: white;
    width: 210px;
  }

  .product-subtotal {
    background-color: #056cf9;
    color: #f2fffc;
    margin-bottom: 30px;
    width: 210px;
  }

  .product-subtotal-person {
    background-color: #056cf9;
    color: #f2fffc;
    margin-bottom: 30px;
    width: 210px;
    border-radius: 0 15px 15px 0;
  }

  .product-remove {
    align-items: center;
    background-color: #2fc18c;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
  }

  .button-remove {
    align-items: center;
    background-color: #2fc18c;
    border: none;
    color: white;
    display: flex;
    font-size: 20px;
    justify-content: center;
    width: 90%;
  }

  .button-remove:hover {
    cursor: pointer;
  }

  .delete-product {
    align-items: center;
    display: flex;
    height: 55px;
    justify-content: center;
  }
`;

const TrashSComponent = styled.section`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export { TableSComponent, TrashSComponent };
