import styled from 'styled-components';

const ProductFilterSComponent = styled.section`
  height: 50vh;

  form {
    align-items: center;
    background: rgba(0, 204, 155, 0.75);
    border-radius: 10px;
    color: #001813;
    display: flex;
    font-size: 28px;
    font-weight: 550;
    justify-content: center;
    line-height: 42px;
    text-align: center;
    width: 10vw;
  }

  li {
    display: flex;
    flex-direction: row;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: auto;
    width: auto;
  }

  button {
    align-items: center;
    align-self: center;
    background-color: #036b52;
    border-radius: 10px;
    display: flex;
    justify-content: center;
  }

  .btn-set-status {
    align-items: center;
    color: #f2fffc;
    display: flex;
    font-size: clamp(0.9rem,0.75vw,1.25rem);
    font-weight: 400;
    padding: 0.7rem 0.7rem;
    text-align: center;
    width: auto;
    cursor: pointer;
  }

  button:hover {
    transform: rotate(360deg);
    transform: scale(1.01);
  }
`;

export default ProductFilterSComponent;
