import styled from 'styled-components';

const TableSComponent = styled.section`
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 100%;

  table {
    width: 100%;
    background-color: whitesmoke;
    justify-content: center;
    flex-direction: row;
  }
  td {
    background-color: violet;
    text-align: center;
  }

  .product_name {
    /* important */
    text-align: left;
    color: white;
  }
  `;

export default TableSComponent;
