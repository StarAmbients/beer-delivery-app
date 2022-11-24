import styled from 'styled-components';

const NavBarSComponent = styled.div`

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    background: #036B52;
    width:100%;
    margin: 0;
    padding: 0;
    top: 0;
    position: fixed;
    z-index: 999;


    .nav-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #036B52;
      flex-direction: row;

      h1 {
        margin: 0;
        // transform px to rem
        padding: 1.87rem;
        width: 10.43rem;
        background-color: #2FC18C;
        color: #001813;
        display: flex;
        justify-content: center;
      }
      h2 {
        margin: 0;
        padding: 1.87rem;
        width: 23.31rem;
        color: #F2FFFC;
        background-color: #036B52;
        display: flex;
        justify-content: start;
      }
    }

    .nav-right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #421981;
      flex-direction: row;

      h3 {
        margin: 0;
        padding: 1.87rem;
        width: 22.31rem;
        background-color: #421981;
        color: #F2FFFC;
        display: flex;
        justify-content: center;
      }

      h1 {
        margin: 0;
        padding: 1.87rem;
        width: 7.5rem;
        color: #F2FFFC;
        background-color: #056CF9;
        display: flex;
        justify-content: center;
      }
    }
 }

`;

export default NavBarSComponent;
