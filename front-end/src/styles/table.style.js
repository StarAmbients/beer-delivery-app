import styled from 'styled-components';

const TableSComponent = styled.section`
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;
  max-height: 1200px;
  /* overflow-y: scroll; */

  table {
    width: 100%;
    background-color: whitesmoke;
    justify-content: center;
    flex-direction: row;
  }

  th {
    /* position: sticky; */
    top: 0;
  }

  td {
    background-color: violet;
    text-align: center;
    height: 55px;
  }

  .product-item {
    background-color: #036B52;
    color: white;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .product-description {
    /* important */
    text-align: left;
    padding-left: 30px;
    max-width: 170px;
    background-color: #EAF1EF;
  }

  .product-quantity {
    background-color: #036B52;
    color: white;
  }

  .product-value {
    background-color: #421981;
    color: white;
  }

  .product-subtotal {
    color: #F2FFFC;
    background-color: #056CF9;

  }
  
  .product-line{
      /* background-color: #2FC18C; */
      border-radius: 15px;
    }

  .product-remove {
    background-color: #2FC18C;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;
    /* width: 65px; */
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .button-remove {
    display: flex;
    background-color: red;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: white;
    width: 7vw;
    border: none;
  }
  .button-remove:hover {
    cursor: pointer;
  }

  .scroll {
    max-height: 200px;
    overflow: auto;
  }

  .title-table tr {
    display: flex;
    justify-content: flex-start;
    font-size: 18px;
  }
  .item {
    margin-left: 10px;
  }
  .description {
    margin-left: 350px;
  }
  .quantity {
    margin-left: 290px;
  }
  .unit-value {
    margin-left: 40px;
  }
  .sub-total {
    margin-left: 115px;
    margin-right: 148px;
  }

`;

const TrashSComponent = styled.section`
      color: red;
`;

export { TableSComponent, TrashSComponent };
