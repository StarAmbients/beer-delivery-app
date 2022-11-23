import styled from 'styled-components';

const NavBarSComponent = styled.div`

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    .nav-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #036B52;
      flex-direction: row;
    }

    .nav-right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #421981;
      flex-direction: row;
    }
 }

`;

export default NavBarSComponent;
