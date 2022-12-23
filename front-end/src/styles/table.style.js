import styled from 'styled-components';

const TableSComponent = styled.section`
  border-radius: 4px;
  width: 100%;
  max-height: 1200px;
  margin: 20px;
  
  table {
    background-color: whitesmoke;
    flex-direction: row;
    justify-content: center;
    width: calc(100% - 20px);
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

  .unit-value {
    margin-left: 50px;
  }

  .sub-total {
    margin-left: 115px;
    margin-right: 115px;
  }
  
  .product-line {
    background-color: transparent;
    border-radius: 15px;
  }

  .product-item {
    background-color: #036B52;
    border-bottom-left-radius: 15px;
    border-top-left-radius: 15px;
    color: white;
    width: 60px;
  }

  .product-description {
    background-color: #EAF1EF;
    padding-left: 30px;
    text-align: left;
    width: 680px;
  }

  .product-quantity {
    background-color: #036B52;
    color: white;
    width: 120px;
  }

  .product-value {
    background-color: #421981;
    color: white;
    width: 210px;
  }

  .product-subtotal {
    background-color: #056CF9;
    color: #F2FFFC;
    margin-bottom: 30px;
    width: 210px;
  }
  
  .product-remove {
    align-items: center;
    background-color: #2FC18C;
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    display: flex;
    justify-content: center;
    margin-top: 0px;
  }

  .button-remove {
    align-items: center;
    background-color: #2FC18C;
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

export {
  TableSComponent, TrashSComponent,
};
