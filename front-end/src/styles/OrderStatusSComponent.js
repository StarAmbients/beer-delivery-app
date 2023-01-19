import styled from 'styled-components';

const OrderStatusSComponent = styled.p`
height: 100px;
display: flex;
align-items: center;

p {
    align-items: center;
    background: #421981 75%;
    color: #f2fffc;
    display: flex;
    font-size: 28px;
    font-weight: 400;
    text-align: center;
    width: auto;
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
`;

export default OrderStatusSComponent;
