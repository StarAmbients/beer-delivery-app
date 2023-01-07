import styled from 'styled-components';

const NavBarSComponent = styled.div`
  nav {
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    height: 10vh;
    justify-content: space-between;
    width: 100%;

    .nav-1 {
      flex-grow: 1;
      width: 15%;
    }

    .nav-2 {
      flex-grow: 1;
      width: 45%;
    }

    .nav-3 {
      flex-grow: 1;
      width: 30%;
    }

    .nav-4 {
      flex-grow: 1;
      width: 10%;
    }

    .products {
      align-items: center;
      background-color: #2fc18c;
      box-sizing: border-box;
      color: #001813;
      display: flex;
      font-size: clamp(1rem, 1.5vw, 2.5rem);
      height: 6.17rem;
      justify-content: center;
      margin: 0;
    }

    .page-orders {
      align-items: center;
      background-color: #036b52;
      box-sizing: border-box;
      color: #f2fffc;
      display: flex;
      font-size: clamp(1rem, 1.5vw, 2.5rem);
      height: 6.17rem;
      justify-content: left;
      margin: 0;
      padding-left: 30px;
    }

    .user-name {
      align-items: center;
      background-color: #421981;
      box-sizing: border-box;
      color: #f2fffc;
      display: flex;
      font-size: clamp(1rem, 1.5vw, 2.5rem);
      height: 6.17rem;
      justify-content: center;
      margin: 0;
    }

    .button-exit {
      align-items: center;
      background-color: #056cf9;
      box-sizing: border-box;
      color: #f2fffc;
      display: flex;
      font-size: clamp(1rem, 1.5vw, 2.5rem);
      height: 6.17rem;
      justify-content: center;
      margin: 0;
    }
  }
`;

export default NavBarSComponent;
