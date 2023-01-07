import styled from 'styled-components';

const ContainerSchoppingCard = styled.div`
  display: flex;
  flex-direction: column;
  
  .button-checkout {
    display: flex;
    justify-content: end;
    margin-right: 10%;
    margin-top: 4%;
    min-width:100px;
    padding-left:10px;
    padding-right:10px;
    
    p {
      margin: 30px
    }
  }

  button {
    align-items: center;
    background: #036B52;
    border-radius: 0.625rem;
    border: none;
    color: white;
    display: flex;
    font-size: 2.25em;
    font-weight: 500;
    height: 4.9375rem;
    line-height: 2.63rem;
    text-align: center;
    width: auto;
  }
  
  button:hover:enabled {
    cursor: pointer;
    transform: rotate(360deg);
    transform: scale(1.01);
  }

  button:disabled,
  button[disabled] {
    background-color: lightgray;
    color: whitesmoke;
  }
`;

const ContainerCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  `;

const CustomerProductsSComponent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  display: flex;
  flex-direction: row;
  width: 70%;
  height: 70%;
  align-items: center;
  margin-top:90px;
  flex-wrap: wrap;

  .products-container {
    border: 8px solid blue;
    height: 100%;
    width: 100%;
  }
`;

export {
  ContainerSchoppingCard, CustomerProductsSComponent, ContainerCards,
};
