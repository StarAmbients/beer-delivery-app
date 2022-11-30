import styled from 'styled-components';

const ContainerSchoppingCard = styled.div`
  display: flex;
  flex-direction: column;
  .button-checkout {
    display: flex;
    justify-content: end;
    margin-right: 10%;
    margin-top: 4%
  }

  button {
    background: #036B52;
    font-weight: 500;
    font-size: 2.25rem;
    line-height: 2.63rem;
    color: white;
    
    height: 4.9375rem;
    width: 27.8125rem;
    border: none;
    border-radius: 0.625rem;
  
    display: flex;
    align-items: center;
    text-align: center;
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
  /* padding: 6.25rem 3.75rem; */
  flex-wrap: wrap;
  /* gap: 16px; */
  border: 1px solid violet;

    /* margin-top:70px;
    box-sizing: border-box; */


  .products-container {
    border: 8px solid blue;
    width: 100%;
    height: 100%;  }


`;

export { ContainerSchoppingCard, CustomerProductsSComponent, ContainerCards };
