import styled from 'styled-components';

const PersonOrderDetailsSComponent = styled.section`
  height: 100vh;
  font-size: 1.9rem;
  font-weight: 400;
  color: #350b4b;

  .title_detalhes_pedido {
    display: flex;
    width: 100%;

    h3 {
      margin-bottom: 20px;
      margin-top: 40px;
      padding-left: 130px;
    }
  }

  container {
    background-color: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;

    table-container {
      display: block;
      width: 100%;
      margin: 0;
      /* margin-left: 100px;
      margin-right: 10px; */
    }
  }
`;

export default PersonOrderDetailsSComponent;
