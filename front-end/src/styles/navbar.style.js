import styled from 'styled-components';

const NavBarSComponent = styled.div`

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    height: 10vh;
    width: 100%;

    flex-grow: 1;

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
      margin: 0;
      box-sizing: border-box;
      height: 6.17rem;
      display: flex;
      align-items: center;
      color: #001813;
      justify-content: center;
      background-color: #2FC18C;

      font-size: clamp(1rem,1.5vw,2.5rem);
    }
        
    .page-orders {
      margin: 0;
      box-sizing: border-box;
      height: 6.17rem;
      display: flex;
      align-items: center;
      color: white;
      justify-content: left;
      color: #F2FFFC;
      background-color: #036B52;
      padding-left: 30px;

      font-size: clamp(1rem,1.5vw,2.5rem);
    }

    .user-name{
      margin: 0;
      box-sizing: border-box;
      height: 6.17rem;
      display: flex;
      align-items: center;
      color: white;
      justify-content: center;
      color: #F2FFFC;
      background-color: #421981;

      font-size: clamp(1rem,1.5vw,2.5rem);
    }

    .button-exit{
      margin: 0;
      box-sizing: border-box;
      height: 6.17rem;
      display: flex;
      align-items: center;
      color: white;
      justify-content: center;
      color: #F2FFFC;
      background-color: #056CF9;

      font-size: clamp(1rem,1.5vw,2.5rem);
    }
 }

`;

export default NavBarSComponent;
