import styled from 'styled-components';

const TableSComponent = styled.section`
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-height: 1200px;
  /* overflow-y: scroll; */

  table {
    background-color: whitesmoke;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  th {
    position: sticky;
    top: 0;
    /*  */
  }

  td {
    background-color: violet;
    height: 55px;
    text-align: center;
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
    width: 680px;
    padding-left: 30px;
    text-align: left;
    /* important */
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
    width: 210px;
    margin-bottom: 30px;
  }
  
  .product-line {
    background-color: transparent;
    border-radius: 15px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
  }

  .scroll {
    max-height: 200px;
    overflow: auto;
  }

  .title-table tr {
    display: flex;
    font-size: 18px;
    justify-content: flex-start;
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
    margin-right: 135px;
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
