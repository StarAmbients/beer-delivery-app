import styled from 'styled-components';

const ContainerSchoppingCard = styled.div`
  display: flex;
  flex-direction: column;
  .button-checkout {
    display: flex;
    justify-content: end;
    margin-right: 10%;
    margin-top: 4%;
    padding-left:10px;
    padding-right:10px;
    min-width:100px;

    p {
      margin: 30px
    }
  }

  button {
    background: #036B52;
    font-weight: 500;
    font-size: 2.25em;
    line-height: 2.63rem;
    color: white;
    
    height: 4.9375rem;
    width: auto;
    border: none;
    border-radius: 0.625rem;
  
    display: flex;
    align-items: center;
    text-align: center;
  }
  
  button:hover:enabled {
    transform: rotate(360deg);
    transform: scale(1.01);
  }

  button:disabled,
  button[disabled] {
    opacity: 0.4;
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
    width: 100%;
    height: 100%;  }
`;

export { ContainerSchoppingCard, CustomerProductsSComponent, ContainerCards };
