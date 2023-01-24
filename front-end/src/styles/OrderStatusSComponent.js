import styled from 'styled-components';

const OrderStatusSComponent = styled.p`
  height: auto;
  width: auto;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.25rem 0.9375rem;
  border-radius: 0.5rem;
  text-align: center;

  p {
    justify-content: center;
    align-items: center;
    background: #421981 75%;
    color: #f2fffc;
    display: flex;
    font-weight: 400;
    text-align: center;
    width: 100%;
    padding: 0.4rem 1.5rem;
    border-radius: 8px;
  }

  .PENDENTE {
    background: #CCB800 75%;
    color: black;
    font-weight: 600;
  }

  .PREPARANDO {
    background: #66CC00 75%;
    color: black;
    font-weight: 600;
  }

  .ENTREGUE {
    background: #00CC9B 75%;
    color: black;
    font-weight: 600;
  }

    @media (min-width: 600px) {
    font-size: 1.5rem;
    p {
      padding: 0.2rem 0.75rem;
    }
  }

  @media (min-width: 1000px) {
    font-size: 2rem;
    p {
      padding: 0.5rem 0.75rem;
    }
    
  }
`;

export default OrderStatusSComponent;
