import styled from 'styled-components';

const ProductFilterSComponent = styled.section`
  height: 50vh;
  width: 40vw;
  
  h1 {
    font-size: 1.7em;
    text-align: center;
  }

  form {
    align-items: center;
    background: rgba(0, 204, 155, 0.75);
    border-radius: 0.625em;
    color: #001813;
    display: flex;
    font-size: 1.75em;
    font-weight: 550;
    justify-content: center;
    line-height: 2.625em;
    text-align: center;
    width: 10vw;
  }
  input {
    margin-bottom: 1.25em;
  }

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    overflow: auto;
    height: 32vh;
  }
  
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 7px;
    background-color: whitesmoke;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
  }

  .product-name {
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    margin-left: 0.6em;
    //margin-right: 0.3em;
    overflow: auto;
  }

  .product-name::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .container {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    height: auto;
    width: auto;
    margin: 0;
    padding: 0;
    margin-right: 0.3em;
  }

  button {
    background-color: #036b52;
    border-radius: 0.625em;
    display: flex;
    justify-content: center;
    margin: 0.3em 0.625em;
  }

  .btn-set-status {
    align-items: center;
    color: #f2fffc;
    display: flex;
    font-size: clamp(0.9em,1.0vw,1.25em);
    font-weight: 450;
    padding: 0.7em 0.7em;
    text-align: center;
    width: 5.4em;
    height: 2.8em;
    cursor: pointer;
  }

  button:hover {
    transform: rotate(360deg);
    transform: scale(1.01);
  }
`;

export default ProductFilterSComponent;
